from django.shortcuts import render
from .models import Category, Article
from .serializers import CategorySerializer, ArticleSerializer
from rest_framework import viewsets
from rest_framework import generics
from django.utils import timezone

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
  queryset = Article.objects.filter(pub_date__lte=timezone.now())
  serializer_class = ArticleSerializer

class ArticleList(generics.ListAPIView):
  serializer_class = ArticleSerializer

  def get_queryset(self):
      """
      This view should return a list of all the Article for
      the user as determined by the articleid portion of the URL.
      """
      username = self.kwargs['articleid']
      return Article.objects.filter(articles__id=articleid)