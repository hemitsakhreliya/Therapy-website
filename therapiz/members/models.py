from django.db import models

# Create your models here.
class TherapizDetails(models.Model):
    id=models.AutoField(primary_key=True)
    img=models.FileField(upload_to='media')
    name=models.CharField(max_length=100)
    post=models.CharField(max_length=100)
    exp=models.IntegerField()
    inr=models.IntegerField()
    loc=models.CharField(max_length=100)
    password=models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name}_{self.id}"
    
class Profiles(models.Model):
    GEN_CATEGORY=[('male','male'),('female','female')]
    img=models.FileField(upload_to='media')
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=100)
    post=models.CharField(max_length=100)
    gender=models.CharField(max_length=10,choices=GEN_CATEGORY)
    age=models.IntegerField()
    loc=models.CharField(max_length=100)
    exp=models.IntegerField()
    email=models.CharField(max_length=100)
    edu1=models.TextField(blank=True)
    edu2=models.TextField(blank=True)
    Specialisation=models.TextField()
    Approaches=models.TextField()
    Fees=models.TextField()
    language=models.CharField(max_length=100)
    platform=models.CharField(max_length=100)
    contat=models.CharField(max_length=100)
    know1=models.TextField()
    know2=models.TextField()
    know3=models.TextField()
    know4=models.TextField()

    def __str__(self):
        return f"{self.name}_{self.id}"

class Register(models.Model):
    id=models.AutoField(primary_key=True)
    username=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=100)

    def __str__(self):
        return f"{self.username}"
    
class Book(models.Model):
    id=models.AutoField(primary_key=True)
    fname=models.CharField(max_length=100)
    lname=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    therapist=models.CharField(max_length=100)
    phone=models.CharField(max_length=10)
    date=models.CharField(max_length=100)
    time=models.CharField(max_length=100)
    message=models.CharField(max_length=1000)

    def __str__(self):
        return self.fname
    