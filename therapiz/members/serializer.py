from rest_framework import serializers
from .models import TherapizDetails
from .models import Profiles
from .models import Register
from .models import Book

class TherapySerializer(serializers.ModelSerializer):
    class Meta:
        model=TherapizDetails
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=Profiles
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=Register
        fields='__all__'

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model=Book
        fields='__all__'