from django.contrib import admin
from .models import MembersModel, UserIdModel, MemberCaclModel
# Register your models here.

admin.site.register(MembersModel)
admin.site.register(UserIdModel)
admin.site.register(MemberCaclModel)
