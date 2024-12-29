from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AIModelViewSet

# Initialize the router
router = DefaultRouter()
router.register(r'aimodels', AIModelViewSet)

# Define URL patterns
urlpatterns = [
    path('', include(router.urls)),  # Include API routes
]
