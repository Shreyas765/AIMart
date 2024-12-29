from django.db import models

# Create your models here.

class AIModel(models.Model):
    CATEGORY_CHOICES = [
        ('NLP', 'Natural Language Processing'),
        ('CV', 'Computer Vision'),
        ('TAB', 'Tabular Data'),
        ('OTHER', 'Other'),
    ]

    FRAMEWORK_CHOICES = [
        ('TF', 'TensorFlow'),
        ('PT', 'PyTorch'),
        ('ONNX', 'ONNX'),
        ('OTHER', 'Other'),
    ]

    name = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    framework = models.CharField(max_length=20, choices=FRAMEWORK_CHOICES)
    performance_metrics = models.JSONField(default = dict)  # Stores accuracy, F1 score, etc.
    uploaded_at = models.DateTimeField(auto_now_add=True)
    file = models.FileField(upload_to='models/')  # Store the model file
    owner = models.CharField(max_length=255)  # Store user info or connect to a User model
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Set a price for the model

    def __str__(self):
        return self.name
