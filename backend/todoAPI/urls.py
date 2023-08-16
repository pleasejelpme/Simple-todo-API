from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.documentation import include_docs_urls


urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", include('base.urls')),
    path("api/", include('accounts.urls')),

    # simple jwt
    path('api/login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Documentation
    path('api/docs/', include_docs_urls(title='To Do API'))
]
