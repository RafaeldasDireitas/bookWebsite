from django.db import models

# Create your models here.

class Books(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=60, unique=True)
    description = models.TextField()
    author = models.CharField(max_length=60, null=True)
    image = models.ImageField(upload_to="images", null=True)

    def __str__(self) -> str:
        return f"{self.title}"
