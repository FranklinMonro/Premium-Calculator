from django.shortcuts import render
from .models import UserIdModel, MembersModel, MemberCaclModel
from .forms import UserIdForm, MemberCaclForm
from django.http import HttpResponseRedirect
from django.urls import reverse


# Create your views here.
def home(request):#Home page view, to check if the ID number provided exist in database
    dataAdd = False

    if request.method == 'POST':
        make_id = UserIdForm( data = request.POST)
        if make_id.is_valid():
            job = make_id.save()
            job.save()
            dataAdd = True
            entry = request.POST.get('enter_id')
            if MembersModel.objects.filter(member_id = entry).exists():
                return HttpResponseRedirect(reverse('membersCalc'))# If a member then go to member calculator page
            else:
                return HttpResponseRedirect(reverse('nonMembersCalc'))# Else go to non member calculator page
    else:
        make_id = UserIdForm()
    return render(request, 'home.html', {'id_entry':make_id})


def membersCalc(request):# Member calculator view store data in MemberCaclModel
    dataAdd = False
    if request.method == 'POST':
        calcInf = MemberCaclForm( data= request.POST)

        if calcInf.is_valid():
            job = calcInf.save()
            job.save()
            dataAdd = True
        else:
            print(calcInf.errors)
    else:
        calcInf = MemberCaclForm()
    return render(request, 'memCalc.html',{'membInf':calcInf})

def nonMembersCalc(request):# Non member calculator view store data in MemberCaclModel
    dataAdd = False
    if request.method == 'POST':
        calcInf = MemberCaclForm( data= request.POST)

        if calcInf.is_valid():
            job = calcInf.save()
            job.save()
            dataAdd = True
        else:
            print(calcInf.errors)
    else:
        calcInf = MemberCaclForm()
    return render(request, 'nonMemCalc.html', {'nonInf': calcInf})

def history(request):
    history_views = MemberCaclModel.objects.order_by('member_id')
    return render(request, 'history.html', {'history_dict': history_views})
