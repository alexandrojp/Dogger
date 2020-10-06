from rest_framework import serializers
from rest_framework.serializers import raise_errors_on_nested_writes

from apps.dogger.models import *


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'


class CityHyperlinkSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = City
        fields = ('id', 'url', 'name')
        extra_kwargs = {
            'url': {'view_name': 'dogger:city-detail'}
        }


class DogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dog
        fields = '__all__'


class DogHyperlinkSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Dog
        fields = ('id', 'url', 'name', 'size', 'breed', 'owner')
        extra_kwargs = {
            'url': {'view_name': 'dogger:dog-detail'},
            'owner': {'view_name': 'dogger:owner-detail'}
        }


class WalkerHyperlinkSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'url', 'username', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'url': {'view_name': 'dogger:walker-detail'}
        }


class WalkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'password')

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        user.set_password(user.password)
        user.is_walker = True
        user.save()

        return user


class OwnerHyperlinkSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'url', 'first_name', 'last_name', 'email', 'dogs')
        extra_kwargs = {
            'url': {'view_name': 'dogger:owner-detail'},
            'dogs': {'view_name': 'dogger:dog-detail', 'many': True}
        }


class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password', 'city', 'address')

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        user.set_password(user.password)
        user.is_owner = True
        user.save()

        return user

    def update(self, instance, validated_data):
        raise_errors_on_nested_writes('update', self, validated_data)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.set_password(instance.password)
        instance.save()

        return instance
