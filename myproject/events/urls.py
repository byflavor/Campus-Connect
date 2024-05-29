from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet
from .views import delete_all_events

router = DefaultRouter()
router.register(r'events', EventViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('delete-all/', delete_all_events, name='delete-all-events'),
]


