from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    is_walker = models.BooleanField()
    is_owner = models.BooleanField()

    class Meta:
        default_permissions = ()

    def __str__(self):
        return '{} {}'.format(self.first_name, self.last_name)


class City(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Person(models.Model):
    city = models.ForeignKey('City', on_delete=models.CASCADE)
    address = models.TextField()
    user = models.OneToOneField('User', on_delete=models.CASCADE)


class Schedule(models.Model):
    def validate_hours(self):
        if self.hour_start < self.hour_finish:
            return True
        else:
            return False

    dog_small = models.BooleanField()
    dog_medium = models.BooleanField()
    dog_big = models.BooleanField()
    hour_start = models.TimeField()
    hour_finish = models.TimeField()

    def __str__(self):
        dogs_size = ''
        if self.dog_small:
            dogs_size += 'small '
        elif self.dog_medium:
            dogs_size += 'medium '
        elif self.dog_big:
            dogs_size += 'big'

        return '{} - {} | {}'.format(self.hour_start, self.hour_finish, dogs_size)


class Dog(models.Model):
    DOG_SIZE = (
        (1, 'small'),
        (2, 'medium'),
        (3, 'big')
    )
    name = models.CharField(max_length=70)
    size = models.PositiveSmallIntegerField(choices=DOG_SIZE)
    breed = models.CharField(max_length=100)
    owner = models.ForeignKey('User', on_delete=models.CASCADE)

    def __str__(self):
        return '{} - Owner {}'.format(self.name, self.owner)


class Reserve(models.Model):
    hour_start = models.TimeField()
    hour_finish = models.TimeField()
    owner = models.ForeignKey('User', on_delete=models.CASCADE)
    walker = models.ForeignKey('User', on_delete=models.CASCADE, null=True, blank=True)
    public = models.BooleanField(default=False)
    accepted = models.BooleanField(default=False)
    closed = models.BooleanField(default=False)


class ReserveDog(models.Model):
    dog = models.ForeignKey('Dog', on_delete=models.CASCADE)
    comment = models.TextField()


class Suggestion(models.Model):
    comment = models.TextField()
    reserve = models.ForeignKey('Reserve', on_delete=models.CASCADE)
    walker = models.ForeignKey('User', on_delete=models.CASCADE)
    accepted = models.BooleanField(default=False)
