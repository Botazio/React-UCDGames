from django.contrib import admin

from .models import Game

admin.site.site_header = "UCDGames Admin"
admin.site.site_title = "UCDGames"

admin.site.register(Game)
