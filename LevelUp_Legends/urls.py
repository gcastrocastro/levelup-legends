from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path, include, re_path
from core.views import front

urlpatterns = [
    path("", front, name="front"),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('core/', include('core.urls')),
    path('accounts', include('django.contrib.auth.urls')),
]
