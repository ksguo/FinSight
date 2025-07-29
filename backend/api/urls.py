from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("user/register/", views.CreateUserView.as_view(), name="register"),
    path("user/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("user/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    # 添加持仓相关的URL
    path(
        "positions/",
        views.PositionListCreateView.as_view(),
        name="position-list-create",
    ),
    path(
        "positions/<int:pk>/",
        views.PositionRetrieveUpdateDestroyView.as_view(),
        name="position-detail",
    ),
]
