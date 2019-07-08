from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class UserIdModel(models.Model):
    enter_id = models.CharField(max_length = 13)

    def __str__(self):
        return self.enter_id


class MembersModel(models.Model):
    memberName =models.CharField(max_length = 13)
    member_id = models.CharField(max_length = 13)

    def __str__(self):
        return self.member_id

class MemberCaclModel(models.Model):
    memberName = models.CharField(max_length = 13)
    member_id = models.CharField(max_length = 13)
    insuredValue = models.CharField(max_length = 13)
    policyFee = models.CharField(max_length = 13)
    premiumFee = models.CharField(max_length = 13, default = "10")
    total = models.CharField(max_length = 13)

    def __str__(self):
        return self.member_id
