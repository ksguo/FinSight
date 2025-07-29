from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Position
import random  # 用于模拟获取当前股价


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class PositionSerializer(serializers.ModelSerializer):
    current_price = serializers.SerializerMethodField()
    profit_loss = serializers.SerializerMethodField()

    class Meta:
        model = Position
        fields = [
            "id",
            "stock_symbol",
            "quantity",
            "purchase_price",
            "purchase_date",
            "current_price",
            "profit_loss",
        ]
        read_only_fields = ["user"]

    def get_current_price(self, obj):
        # 注意：这里应该调用一个真实的股票API来获取当前价格
        # 为了演示，我们返回一个在买入价附近的随机价格
        return round(obj.purchase_price * random.uniform(0.8, 1.2), 2)

    def get_profit_loss(self, obj):
        current_price = self.get_current_price(obj)
        return (current_price - obj.purchase_price) * obj.quantity
