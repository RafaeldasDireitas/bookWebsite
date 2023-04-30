from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from api.models import Books
from api.serializers import BooksSerializer


# Create your views here.

@api_view(['GET', 'POST'])
def index(request):
    
    if request.method == "GET":
        books = Books.objects.all()
        serializer = BooksSerializer(books, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = BooksSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
