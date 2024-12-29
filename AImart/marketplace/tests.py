from django.test import TestCase
from django.urls import reverse

# Create your tests here.

class HomePageTests(TestCase):
    def test_home_page_status_code(self):
        response = self.client.get(reverse('home'))  # Use the name of your URL pattern
        self.assertEqual(response.status_code, 200)

    def test_home_page_content(self):
        response = self.client.get(reverse('home'))
        self.assertContains(response, "Welcome to AIMart!")