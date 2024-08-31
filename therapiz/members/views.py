from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
import json
from django.core.mail import send_mail
from .models import TherapizDetails
from .models import Profiles
from .models import Register
from .models import Book
from .serializer import TherapySerializer
from .serializer import ProfileSerializer
from .serializer import RegisterSerializer
from .serializer import BookSerializer
from rest_framework.generics import ListAPIView

class TherapyViewset(ListAPIView):
    queryset=TherapizDetails.objects.all()
    serializer_class=TherapySerializer

class ProfileViewSet(ListAPIView):
    queryset=Profiles.objects.all()
    serializer_class=ProfileSerializer

class RegisterViewSet(ListAPIView):
    queryset=Register.objects.all()
    serializer_class=RegisterSerializer

def SignUp(request):
    if request.method =='POST':
        collectData=json.loads(request.body)
        name=collectData.get('name')
        email=collectData.get('email')
        password=collectData.get('password')
        register=Register(username=name,email=email,password=password)
        register.save()
        
        return JsonResponse({"res":"Data is succesfuly fetch"})
    else:
        return JsonResponse({"res":"Data is not fetch"})
    
class BookViewSet(ListAPIView):
    queryset=Book.objects.all()
    serializer_class=BookSerializer

def BookApoint(request):
    if request.method =='POST':
        collectionData=json.loads(request.body)
        fname=collectionData.get('fname')
        lname=collectionData.get('lname')
        email=collectionData.get('email')
        therapist=collectionData.get('therapist')
        phone=collectionData.get('phone')
        date=collectionData.get('date')
        time=collectionData.get('time')
        message=collectionData.get('message')
        book=Book(fname=fname,lname=lname,email=email,therapist=therapist,phone=phone,date=date,time=time,message=message)
        book.save()
        print(fname,lname,email)

        return JsonResponse({"res":"Data is succesfuly fetch"})
    else:
        return JsonResponse({"res":"Data is not fetch"})

def SendMail(request):
    send_mail(
        'Testing Mail',
        'Your Appointment Is Book',
        'sakhareliyahemit01@gmail.com',
        ['22002170210105@ljku.edu.in'],
        fail_silently=False
    )

def AcceptBook(request):
    if request.method=='POST':
        collectionData=json.loads(request.body)
        id=collectionData.get('id')
        data=Book.objects.get(id=id)
        print(data)
        data.delete()
        send_mail(
            'Testing Mail',
            'Your Appointment Is Book',
            'sakhareliyahemit01@gmail.com',
            ['22002170210105@ljku.edu.in'],
            fail_silently=False
        )
        return JsonResponse({"res":"Data Is Fetch"})
    else:
        return JsonResponse({"res":"Data Is Not Fetch"})
    
def RejectBook(request):
    if request.method=='POST':
        collectionData=json.loads(request.body)
        id=collectionData.get('id')
        data=Book.objects.get(id=id)
        print(data)
        data.delete()
        send_mail(
            'Testing Mail',
            'Your Appointment Is Rejected',
            'sakhareliyahemit01@gmail.com',
            ['22002170210105@ljku.edu.in'],
            fail_silently=False
        )
        return JsonResponse({"res":"Data Is Fetch"})
    else:
        return JsonResponse({"res":"Data Is Not Fetch"})
    
def ChangePassword(request):
    if request.method=='POST':
        collectionData=json.loads(request.body)
        id=collectionData.get('id')
        password=collectionData.get('password')
        xyz=TherapizDetails.objects.get(id=id)
        xyz.password=password
        xyz.save()
        return JsonResponse({"res":"Data Is Fetch"})
    else:
        return JsonResponse({"res":"Data Is Not Fetch"})
