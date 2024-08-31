from django.urls import path
from . import views
# from .views import TherapyViewset
# from rest_framework import routers

# router=routers.DefaultRouter()
# router.register(r'therapy',TherapyViewset)

urlpatterns = [
    path('therapizdetails/',views.TherapyViewset.as_view()),
    path('profiles/',views.ProfileViewSet.as_view()),
    path('register/',views.RegisterViewSet.as_view()),
    path('book/',views.BookViewSet.as_view()),
    path('signup',views.SignUp),
    path('bookapointment',views.BookApoint),
    path('mail',views.SendMail),
    path('acceptbook',views.AcceptBook),
    path('rejectbook',views.RejectBook),
    path('changepass',views.ChangePassword)

    # path('',include(router.urls))
]