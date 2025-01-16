from django.test import TestCase
from django.urls import reverse
from marketplace.models import AIModel


# Create your tests here.

class HomePageTests(TestCase):
    def test_home_page_status_code(self):
        response = self.client.get(reverse('home'))  # Use the name of your URL pattern
        self.assertEqual(response.status_code, 200)

    def test_home_page_content(self):
        response = self.client.get(reverse('home'))
        self.assertContains(response, "Welcome to AIMart!")

class AIModelTests(TestCase):
    def setUp(self):
        self.model = AIModel.objects.create(
            name="Test Model",
            description="This is a test",
            category="NLP",
            framework="TF",
            performance_metrics={},
            price=10.0,
            owner="Test Owner"
        )

    def test_model_string_representation(self):
        self.assertEqual(str(self.model), "Test Model")