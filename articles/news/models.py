from django.db import models

class Category(models.Model):
  category_name = models.CharField(max_length=50)

  def __unicode__(self):              # __unicode__ on Python 2
    return self.category_name

class Article(models.Model):
  title = models.CharField(max_length=200)
  author = models.CharField(max_length=50)
  pub_date = models.DateTimeField('date published')
  category = models.ForeignKey(Category)
  hero_image_url = models.CharField(max_length=200)
  extra_image_url = models.CharField(max_length=200,blank=True,null=True)
  body_text = models.CharField(max_length=20000)

  def __unicode__(self):
    return self.title