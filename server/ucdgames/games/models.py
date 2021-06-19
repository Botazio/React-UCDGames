from django.db import models

# Create your models here.


# Describes the different game fields
class Game(models.Model):
    name = models.CharField(max_length=45)
    short_description = models.CharField(max_length=240)
    long_description = models.TextField()
    author = models.CharField(max_length=45)
    category1 = models.CharField(max_length=45)
    category2 = models.CharField(max_length=45)
    category3 = models.CharField(max_length=45, blank=True, null=True)
    category4 = models.CharField(max_length=45, blank=True, null=True)
    topgame = models.BooleanField(default=False)

    def __str__(self):
        return self.short_description
