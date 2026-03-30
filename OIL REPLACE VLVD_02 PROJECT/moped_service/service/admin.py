from django.contrib import admin
from django.db.models import Sum, Count
from django.utils.html import format_html
from .models import Client, OilChange, OilSale, Oil


class OilChangeInline(admin.TabularInline):
    model = OilChange
    extra = 1
    fields = ("date", "oil", "oil_volume", "filter_replaced",
              "mileage", "oil_cost", "filter_cost", "price_charged", "get_profit")
    readonly_fields = ("date", "get_profit")

    def get_profit(self, obj):
        if obj.pk:
            profit = obj.profit
            color = "green" if profit >= 0 else "red"
            return format_html('<span style="color:{}">{} ₸</span>', color, profit)
        return "-"
    get_profit.short_description = "Прибыль"


class OilSaleInline(admin.TabularInline):
    model = OilSale
    extra = 1
    fields = ("date", "oil", "oil_volume", "oil_cost", "price_charged", "get_profit")
    readonly_fields = ("date", "get_profit")

    def get_profit(self, obj):
        if obj.pk:
            profit = obj.profit
            color = "green" if profit >= 0 else "red"
            return format_html('<span style="color:{}">{} ₸</span>', color, profit)
        return "-"
    get_profit.short_description = "Прибыль"

@admin.register(Oil)
class OilAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "cost_per_liter")
    
@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = (
        "book_number", "owner_name", "moped_model",
        "license_plate", "phone", "total_changes", "total_spent"
    )
    search_fields = ("book_number", "owner_name", "license_plate", "phone")
    inlines = [OilChangeInline, OilSaleInline]

    def total_changes(self, obj):
        return obj.oil_changes.count()
    total_changes.short_description = "Замен"

    def total_spent(self, obj):
        changes = obj.oil_changes.aggregate(total=Sum("price_charged"))["total"] or 0
        sales = obj.oil_sales.aggregate(total=Sum("price_charged"))["total"] or 0
        return f"{changes + sales} ₸"
    total_spent.short_description = "Всего потратил"


@admin.register(OilChange)
class OilChangeAdmin(admin.ModelAdmin):
    
    list_display = (
    "date", "client", "oil", "oil_volume",
    "filter_replaced", "mileage", "price_charged", "get_profit"
)

    list_filter = ("date", "filter_replaced", "oil")
    search_fields = ("client__owner_name", "client__book_number", "oil__name")
    date_hierarchy = "date"
    
    

    def get_profit(self, obj):
        profit = obj.profit
        color = "green" if profit >= 0 else "red"
        return format_html('<span style="color:{}">{} ₸</span>', color, profit)
    get_profit.short_description = "Прибыль"

    def changelist_view(self, request, extra_context=None):
        # Добавляем итоги внизу списка
        response = super().changelist_view(request, extra_context)
        try:
            qs = response.context_data["cl"].queryset
            totals = qs.aggregate(
                total_revenue=Sum("price_charged"),
                total_oil=Sum("oil_volume"),
                total_changes=Count("id"),
            )
            response.context_data["totals"] = totals
        except Exception:
            pass
        return response


@admin.register(OilSale)
class OilSaleAdmin(admin.ModelAdmin):
    
    list_display = (
    "date", "client", "oil",
    "oil_volume", "price_charged", "get_profit"
)
    list_filter = ("date", "oil")
    search_fields = ("client__owner_name", "oil__name")

    date_hierarchy = "date"

    def get_profit(self, obj):
        profit = obj.profit
        color = "green" if profit >= 0 else "red"
        return format_html('<span style="color:{}">{} ₸</span>', color, profit)
    get_profit.short_description = "Прибыль"


# Меняем заголовок Django Admin
admin.site.site_header = "Moped Service — Управление"
admin.site.site_title = "Moped Service"
admin.site.index_title = "Панель управления"

