from django.db import models
from django.contrib.auth.models import User

class Game(models.Model):
    game_id = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    name_description = models.CharField()
    background_image = models.CharField(max_length=50)

    def __str__(self):
        return self.game_id


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    games = models.ManyToManyField(Game)

    def add_game(self, game_id):
        game, _ = Game.objects.get_or_create(game_id=game_id)
        self.games.add(game)
        return game

    def remove_game(self, game_id):
        game = self.games.filter(game_id=game_id).first()
        if game:
            self.games.remove(game)
        return game

    def get_games(self):
        return self.games.all()

    def __str__(self):
        return self.user.username
    