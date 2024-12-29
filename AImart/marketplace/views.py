from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from .models import AIModel
from .serializers import AIModelSerializer

# # Create your views here.

class AIModelViewSet(ModelViewSet):
    queryset = AIModel.objects.all() #gets all the API models
    serializer_class = AIModelSerializer #Uses the API Model Serializer for data representations 

def ai_model_list(request):
    models = AIModel.objects.all() #this fetches all the AIMOdel entries
    return render(request, 'ai_models_list.html', {'models': models})

def home_view(request):
    return render(request, 'home.html') 

