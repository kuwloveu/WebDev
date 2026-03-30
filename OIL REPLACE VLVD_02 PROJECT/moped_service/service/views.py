from django.shortcuts import render
from django.contrib.admin.views.decorators import staff_member_required
from django.db.models import Sum, Count, F
from .models import Client, OilChange, OilSale
from datetime import date


@staff_member_required
def dashboard(request):
    today = date.today()
    current_month = today.month
    current_year = today.year

    # --- Замены масла ---
    changes = OilChange.objects.all()
    changes_month = changes.filter(date__month=current_month, date__year=current_year)

    # --- Продажи масла ---
    sales = OilSale.objects.all()
    sales_month = sales.filter(date__month=current_month, date__year=current_year)

    # --- Общая выручка ---
    total_revenue_changes = changes.aggregate(t=Sum("price_charged"))["t"] or 0
    total_revenue_sales = sales.aggregate(t=Sum("price_charged"))["t"] or 0
    total_revenue = total_revenue_changes + total_revenue_sales

    # --- Выручка за месяц ---
    month_revenue_changes = changes_month.aggregate(t=Sum("price_charged"))["t"] or 0
    month_revenue_sales = sales_month.aggregate(t=Sum("price_charged"))["t"] or 0
    month_revenue = month_revenue_changes + month_revenue_sales

    # --- Себестоимость ---
    total_cost_changes = changes.aggregate(
        t=Sum(F("oil_cost") + F("filter_cost"))
    )["t"] or 0
    total_cost_sales = sales.aggregate(t=Sum("oil_cost"))["t"] or 0
    total_cost = total_cost_changes + total_cost_sales

    month_cost_changes = changes_month.aggregate(
        t=Sum(F("oil_cost") + F("filter_cost"))
    )["t"] or 0
    month_cost_sales = sales_month.aggregate(t=Sum("oil_cost"))["t"] or 0
    month_cost = month_cost_changes + month_cost_sales

    # --- Прибыль ---
    total_profit = total_revenue - total_cost
    month_profit = month_revenue - month_cost

    # --- Масло ---
    total_oil = (changes.aggregate(t=Sum("oil_volume"))["t"] or 0) + \
                (sales.aggregate(t=Sum("oil_volume"))["t"] or 0)
    month_oil = (changes_month.aggregate(t=Sum("oil_volume"))["t"] or 0) + \
                (sales_month.aggregate(t=Sum("oil_volume"))["t"] or 0)

    # --- Фильтры ---
    total_filters = changes.filter(filter_replaced=True).count()
    month_filters = changes_month.filter(filter_replaced=True).count()

    # --- Клиенты ---
    total_clients = Client.objects.count()

    # --- Последние операции ---
    recent_changes = changes.select_related("client").order_by("-date")[:5]
    recent_sales = sales.select_related("client").order_by("-date")[:5]

    context = {
        "today": today,
        "total_clients": total_clients,
        "total_revenue": total_revenue,
        "total_profit": total_profit,
        "total_oil": total_oil,
        "total_filters": total_filters,
        "month_revenue": month_revenue,
        "month_profit": month_profit,
        "month_oil": month_oil,
        "month_filters": month_filters,
        "total_changes": changes.count(),
        "month_changes": changes_month.count(),
        "recent_changes": recent_changes,
        "recent_sales": recent_sales,
    }
    return render(request, "dashboard.html", context)
