from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, PositionSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Position

# Create your views here.


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]  # Allow any user to create an account


class PositionListCreateView(generics.ListCreateAPIView):
    serializer_class = PositionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # 只返回当前登录用户的持仓
        return Position.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # 创建持仓时自动关联到当前用户
        serializer.save(user=self.request.user)


class PositionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PositionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # 确保用户只能操作自己的持仓
        return Position.objects.filter(user=self.request.user)
