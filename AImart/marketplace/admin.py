from django.contrib import admin
from .models import AIModel

# Register your models here.

class AIModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'framework', 'uploaded_at', 'price')
    search_fields = ('name', 'category', 'framework')
