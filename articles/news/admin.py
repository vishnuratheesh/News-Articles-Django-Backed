from django.contrib import admin

from .models import Category, Article

class CategoryAdmin(admin.ModelAdmin):
  fields = ['category_name']

admin.site.register(Category, CategoryAdmin)


class ArticleAdmin(admin.ModelAdmin):
  fields = ['category','title','author','pub_date','hero_image_url','extra_image_url','body_text']

admin.site.register(Article, ArticleAdmin)
