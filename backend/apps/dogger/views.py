from django.shortcuts import render
from rest_framework import status, permissions
from rest_framework.generics import *
from rest_framework.response import Response

from apps.dogger.serializers import *


class WalkerList(ListCreateAPIView):
    queryset = User.objects.filter(is_walker=True)
    serializer_class = WalkerHyperlinkSerializer


class WalkerCreate(CreateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = User.objects.all()
    serializer_class = WalkerSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(status=status.HTTP_201_CREATED, headers=headers)


class OwnerList(ListAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = User.objects.filter(is_owner=True)
    serializer_class = OwnerHyperlinkSerializer


class OwnerCreate(CreateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = OwnerSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(status=status.HTTP_201_CREATED, headers=headers)


class OwnerUpdate(UpdateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = User.objects.all()
    serializer_class = OwnerSerializer


class WalkerDetail(RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = User.objects.all()
    serializer_class = WalkerHyperlinkSerializer


class OwnerDetail(RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = User.objects.all()
    serializer_class = OwnerHyperlinkSerializer


class DogList(ListAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = DogSerializer

    def get_queryset(self):
        user = self.request.user
        return Dog.objects.filter(owner_id=user.pk)


class DogDetail(RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Dog.objects.all()
    serializer_class = DogHyperlinkSerializer


class DogUpdate(UpdateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Dog.objects.all()
    serializer_class = DogSerializer


class DogCreate(CreateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Dog.objects.all()
    serializer_class = DogSerializer


class CityList(ListAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = City.objects.all()
    serializer_class = CityHyperlinkSerializer


class CityDetail(RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = City.objects.all()
    serializer_class = CitySerializer

