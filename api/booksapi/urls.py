from django.urls import path
from . import views

urlpatterns = [
    path('books/',views.books),
    path('books/<str:id>/', views.one_book),
]