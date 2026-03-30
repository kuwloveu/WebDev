from django.db import models
from django.db.models import Sum, F, ExpressionWrapper, DecimalField


class Client(models.Model):
    book_number = models.CharField(
        max_length=50,
        primary_key=True,
        verbose_name="Номер сервисной книжки"
    )
    moped_model = models.CharField(max_length=100, verbose_name="Модель мопеда")
    owner_name = models.CharField(max_length=100, verbose_name="Имя владельца")
    license_plate = models.CharField(max_length=20, verbose_name="Гос. номер")
    phone = models.CharField(max_length=20, verbose_name="Номер телефона")
    created_at = models.DateField(auto_now_add=True, verbose_name="Дата регистрации")

    class Meta:
        verbose_name = "Клиент"
        verbose_name_plural = "Клиенты"

    def __str__(self):
        return f"{self.book_number} — {self.owner_name} ({self.license_plate})"

class Oil(models.Model):
    name = models.CharField(max_length=100, verbose_name="Название масла")
    category = models.CharField(max_length=100, verbose_name="Категория")  # например: 2T, 4T, синтетика
    cost_per_liter = models.DecimalField(
        max_digits=10, decimal_places=2,
        verbose_name="Себестоимость за 1л (₸)"
    )

    def __str__(self):
        return f"{self.name} ({self.category})"
    
class OilChange(models.Model):
    """с заменой"""
    client = models.ForeignKey(
        Client,
        on_delete=models.CASCADE,
        related_name="oil_changes",
        verbose_name="Клиент"
    )
    date = models.DateField(auto_now_add=True, verbose_name="Дата замены")
    oil = models.ForeignKey(Oil, on_delete=models.CASCADE, verbose_name="Масло")
    oil_volume = models.DecimalField(
        max_digits=5, decimal_places=2,
        verbose_name="Объём масла (л)"
    )
    filter_replaced = models.BooleanField(
        default=False,
        verbose_name="Фильтр заменён"
    )
    mileage = models.PositiveIntegerField(
        null=True, blank=True,
        verbose_name="Пробег (км)"
    )
    
    oil_cost = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Себестоимость масла (₸)")

    filter_cost = models.DecimalField(
        max_digits=10, decimal_places=2,
        default=0,
        verbose_name="Себестоимость фильтра (₸)"
    )
    price_charged = models.DecimalField(
        max_digits=10, decimal_places=2,
        verbose_name="Цена для клиента (₸)"
    )

    @property
    def profit(self):
        total_cost = self.oil_cost + (self.filter_cost if self.filter_replaced else 0)
        return self.price_charged - total_cost
    
    def save(self, *args, **kwargs):
        self.oil_cost = self.oil.cost_per_liter * self.oil_volume
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = "Замена масла"
        verbose_name_plural = "Замены масла"
        ordering = ["-date"]

    def __str__(self):
        return f"{self.client.owner_name} — {self.date} — {self.oil}"


class OilSale(models.Model):
    """Продажа масла без замены"""
    client = models.ForeignKey(
        Client,
        on_delete=models.SET_NULL,
        null=True, blank=True,
        related_name="oil_sales",
        verbose_name="Клиент (если есть)"
    )
    date = models.DateField(auto_now_add=True, verbose_name="Дата продажи")
    oil = models.ForeignKey(Oil, on_delete=models.CASCADE, verbose_name="Масло")
    oil_volume = models.DecimalField(
        max_digits=5, decimal_places=2,
        verbose_name="Объём (л)"
    )
    oil_cost = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        verbose_name="Себестоимость (₸)"
    )
    price_charged = models.DecimalField(
        max_digits=10, decimal_places=2,
        verbose_name="Цена продажи (₸)"
    )

    @property
    def profit(self):
        return self.price_charged - self.oil_cost
    
    def save(self, *args, **kwargs):
        self.oil_cost = self.oil.cost_per_liter * self.oil_volume
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = "Продажа масла"
        verbose_name_plural = "Продажи масла"
        ordering = ["-date"]

    def __str__(self):
        client_name = self.client.owner_name if self.client else "Без клиента"
        return f"{client_name} — {self.date} — {self.oil} {self.oil_volume}л"
