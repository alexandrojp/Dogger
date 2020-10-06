from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from apps.dogger.models import *

admin.site.register(City)
admin.site.register(User, UserAdmin)
admin.site.register(Dog)
