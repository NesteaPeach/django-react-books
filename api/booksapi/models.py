from django.db import models

class Books(models.Model):
    title = models.CharField(max_length=200)
    imageUrl = models.CharField(max_length=2000)
    description = models.TextField(null=True)

    def __str__(self):
        return self.title
