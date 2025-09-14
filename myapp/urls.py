from django.urls import path
from .views import ContactListCreate, ContactDetail, index

urlpatterns = [
    path('', index, name='index'),
    path('api/contacts/', ContactListCreate.as_view(), name='contact-list'),
    path('api/contacts/<int:pk>/', ContactDetail.as_view(), name='contact-detail'),
]