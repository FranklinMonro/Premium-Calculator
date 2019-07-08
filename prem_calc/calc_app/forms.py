from django import forms
from .models import MembersModel, UserIdModel, MemberCaclModel

class UserIdForm(forms.ModelForm):
    class Meta:
        model = UserIdModel
        fields = ('__all__')


class MemberCaclForm(forms.ModelForm):
    class Meta:
        model = MemberCaclModel
        fields = ('__all__')
        widgets = {'memberName':forms.HiddenInput(),
                   'member_id':forms.HiddenInput(),
                   'insuredValue':forms.HiddenInput(),
                   'policyFee':forms.HiddenInput(),
                   'premiumFee':forms.HiddenInput(),
                   'total':forms.HiddenInput(),
                   }
