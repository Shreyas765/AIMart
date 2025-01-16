from rest_framework import serializers
from .models import AIModel

class AIModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = AIModel
        fields = "__all__" #this includes all the fields in the API



