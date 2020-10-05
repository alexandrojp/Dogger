from rest_framework import serializers

from apps.dogger.models import *


class WalkerSerializer(serializers.ModelSerializer):
    class Meta:
        model: User
        fields = '__all__'


class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        depth = 1

