from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('todo', views.TodoViewSet, basename='todo')

urlpatterns = [
]

#Add routerUrls to urlpatterns array
urlpatterns += router.urls