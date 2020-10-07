from django.urls import path

from apps.dogger.views import *

app_name = 'dogger'

urlpatterns = [
    path('cities', CityList.as_view(), name='city-list'),
    path('city/<int:pk>', CityDetail.as_view(), name='city-detail'),
    path('walkers', WalkerList.as_view(), name='walker-list'),
    path('walker/new', WalkerCreate.as_view(), name='walker-create'),
    path('walker/<int:pk>', WalkerDetail.as_view(), name='walker-detail'),
    path('owners', OwnerList.as_view(), name='owner-list'),
    path('owner/<int:pk>', OwnerDetail.as_view(), name='owner-detail'),
    path('owners/new', OwnerCreate.as_view(), name='owner-create'),
    path('owners/update/<int:pk>', OwnerUpdate.as_view(), name='owner-update'),
    path('dog/<int:pk>', DogDetail.as_view(), name='dog-detail'),
    path('dog/new', DogCreate.as_view(), name='dog-create'),
    path('dog/update', DogUpdate.as_view(), name='dog-update'),
]
