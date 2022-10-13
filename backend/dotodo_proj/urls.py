from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("dotodo_api/", include("dotodo_app.urls"))
]
