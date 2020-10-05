from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView

from apps.dogger.models import Person
from apps.dogger.serializers import WalkerSerializer, OwnerSerializer


class WalkerList(ListCreateAPIView):
    queryset = Person.objects.filter(user__is_walker=True)
    serializer_class = WalkerSerializer


class OwnerList(ListCreateAPIView):
    queryset = Person.objects.filter(user__is_owner=True)
    serializer_class = OwnerSerializer

