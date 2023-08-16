from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.UserTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path("register/", views.RegisterAPIView.as_view(), name="register")
]
