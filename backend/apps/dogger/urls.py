from django.urls import path

from apps.dogger.views import WalkerList

app_name = 'dogger'

urlpatterns = [
    path('walkers', WalkerList.as_view(), name='walker-list')
]