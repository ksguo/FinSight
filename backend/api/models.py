from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Position(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="positions")
    stock_symbol = models.CharField(max_length=10)
    quantity = models.IntegerField()
    purchase_price = models.DecimalField(max_digits=10, decimal_places=2)
    purchase_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.quantity} of {self.stock_symbol} @ {self.purchase_price}"
