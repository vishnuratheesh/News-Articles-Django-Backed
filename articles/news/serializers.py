#from django.contrib.auth.models import User, Group
from .models import Category, Article
from rest_framework import serializers

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ('category_name',)

class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Article
        fields = ('id','title','author','pub_date','category','hero_image_url','extra_image_url','body_text',)
