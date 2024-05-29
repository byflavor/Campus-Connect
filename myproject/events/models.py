from django.db import models

class Event(models.Model):
    name = models.CharField(max_length=100)
    eventDate = models.DateField()
    eventStartTime = models.CharField(max_length=10, default="12:00 PM")  # Provide a sensible default
    eventEndTime = models.CharField(max_length=10, default="12:00 PM")  # Provide a sensible default
    location = models.CharField(max_length=255)
    eventCategories = models.TextField(default="")  # Default to an empty string if no categories

    def __str__(self):
        return self.name
