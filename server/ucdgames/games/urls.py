from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('all_games/', views.all_games, name='all games'),
    path('<int:game_id>/', views.game, name='game'),
]
