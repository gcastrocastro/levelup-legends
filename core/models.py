from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    games = models.ManyToManyField('self', symmetrical=False)

    def add_game(self, game_name):
        game, _ = UserProfile.objects.get_or_create(user=self.user)
        game.games.add(game_name)
        return game_name

    def remove_game(self, game_name):
        game = self.games.filter(name=game_name).first()
        if game:
            self.games.remove(game)
        return game

    def get_games(self):
        return self.games.all()