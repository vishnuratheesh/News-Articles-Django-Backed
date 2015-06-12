Meteor.startup(function() {
  var apiBaseURL = "http://127.0.0.1:5000";
  Articles = new Mongo.Collection("articles");
  console.log("only on server")

  Meteor.http.get(apiBaseURL + "/articles/?format=json", function(error, result) {
    if (error) {
      console.log('http get FAILED!');
    } else {
      console.log('http get SUCCES');
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
  });

});