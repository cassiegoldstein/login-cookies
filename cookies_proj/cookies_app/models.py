from django.db import models

class AppUser(models.Model):
    username = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=99)
