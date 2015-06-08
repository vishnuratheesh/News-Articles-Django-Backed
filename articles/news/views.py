from django.shortcuts import render
from .models import Category, Article
from .serializers import CategorySerializer, ArticleSerializer
from rest_framework import viewsets

class CategoryViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows categories to be viewed or edited.
  """
  queryset = Category.objects.all()
  serializer_class = CategorySerializer

class ArticleViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows categories to be viewed or edited.
  """
  queryset = Article.objects.all()
  serializer_class = ArticleSerializer