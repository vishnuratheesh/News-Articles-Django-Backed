from dddp.api import API, Collection, Publication
from news import models

class Article(Collection):
  model = models.Article


class AllArticles(Publication):
  queries = [
      models.Article.objects.all(),
  ]

API.register([Article, AllArticles])

print 'ok'