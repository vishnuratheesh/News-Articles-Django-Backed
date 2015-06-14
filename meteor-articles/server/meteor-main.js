Meteor.startup(function() {

  var apiBaseURL = "http://127.0.0.1:5000";
  Future = Npm.require('fibers/future');

  Articles = new Mongo.Collection("articles");
  Articles.initEasySearch(['title', 'id'], {
    'use': 'mongo-db'
  });

  console.log("DB Sync: ")

  Meteor.http.get(apiBaseURL + "/articles/?format=json", function(error, result) {
    if (error) {
      console.log('http get FAILED!');
    } else {
      console.log('http get SUCCESS');
      if (result.statusCode === 200) {
        console.log('Status code = 200!');
        //console.log(result.content);
        //Articles.remove({});

        var res = JSON.parse(result.content)
        res.results.forEach(function(article) {
          // Articles.remove({
          //   id: article.id
          // });
          //Articles.insert(article);
          console.log("Inserted: " + article.id);
        });

      }
    }


    Meteor.methods({
      getArticleJSON: function(article_id) {
        console.log('on server, getArticleJSON called with id: ', article_id);
        var future = new Future();
        if (article_id == undefined || article_id <= 0) {
          throw new Meteor.Error(404, "invalid id");
        }

        Meteor.http.get(apiBaseURL + "/articles/" + article_id + "/?format=json", function(error, result) {
          if (error) {
            console.log('http get FAILED!');
          } else {
            console.log('http get SUCCESS');
            if (result.statusCode === 200) {
              future["return"](result)
            }
          }
        });

        return future.wait();
        //return "Welcome: " + article_id;
      }
    });



  });


  Meteor.publish("articles", function() {
    return Articles.find({});
  });

});