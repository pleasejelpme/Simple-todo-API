from django.urls import path
from . import views

urlpatterns = [
    path("tasks/", views.TaskListCreateAPIView.as_view()),
    path('tasks/<str:pk>/', views.TaskDetailAPIView.as_view()),
]
