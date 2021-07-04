from django.http.response import JsonResponse
from django.shortcuts import render

from .models import Game


# template with the routes to the different endpoints
def index(request):
    return render(request, 'games/index.html')


# route with all the games
def all_games(request):
    """Returns the details for all the games"""

    all_games_details = Game.objects.all()
    response = []
    for game_details in all_games_details:
        response.append({
            'id': game_details.id,
            'name': game_details.name,
            'short_desc': game_details.short_description,
            'long_desc': game_details.long_description,
            'author': game_details.author,
            'category1': game_details.category1,
            'category2': game_details.category2,
            'category3': game_details.category3,
            'category4': game_details.category4,
            'topgame': game_details.topgame,
            'imgURL': game_details.imgURL,
        })

    return JsonResponse(response, safe=False)


# route to a particular game
def game(request, game_id):
    """Returns the details for a particular game"""

    game_details = Game.objects.get(pk=game_id)
    response = {
        'id': game_details.id,
        'name': game_details.name,
        'short_desc': game_details.short_description,
        'long_desc': game_details.long_description,
        'author': game_details.author,
        'category1': game_details.category1,
        'category2': game_details.category2,
        'category3': game_details.category3,
        'category4': game_details.category4,
        'topgame': game_details.topgame,
        'imgURL': game_details.imgURL,
    }

    return JsonResponse(response)
