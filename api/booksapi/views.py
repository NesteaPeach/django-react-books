from django.shortcuts import render
from rest_framework.parsers import JSONParser
from rest_framework import status
from .models import Books
from .serializers import BooksSerializer
from rest_framework.decorators import api_view
from django.http.response import JsonResponse

@api_view(['GET','POST'])
def books(request):
    match request.method:
        case 'GET':
            books = Books.objects.all()
            books_serializer = BooksSerializer(books,many=True)
            return JsonResponse(books_serializer.data, safe=False)
        case 'POST':
            book_body = JSONParser().parse(request)
            book_serializer = BooksSerializer(data = book_body)
            if book_serializer.is_valid():
                book_serializer.save()
                return JsonResponse(book_serializer.data,status=status.HTTP_201_CREATED)
            return JsonResponse(book_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET','PUT','DELETE'])
def one_book(request,id):
    try:
        book = Books.objects.get(id=id)
    except Books.DoesNotExist:
        return JsonResponse({'message':'This book does not exist!'},status=status.HTTP_404_NOT_FOUND)
    match request.method:
        case 'GET':
            book_serializer = BooksSerializer(book)
            return JsonResponse(book_serializer.data, safe=False)
        case 'PUT':
            book_body = JSONParser().parse(request)
            book_serializer = BooksSerializer(book, data=book_body)
            if book_serializer.is_valid():
                book_serializer.save()
                return JsonResponse(book_serializer.data, status=status.HTTP_200_OK)
            return JsonResponse(book_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        case 'DELETE':
            book.delete()
            return JsonResponse({'message':'The book was deleted!'}, status=status.HTTP_204_NO_CONTENT)            




