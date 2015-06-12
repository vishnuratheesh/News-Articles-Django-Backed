var apiBaseURL = "http://127.0.0.1:5000";

Articles = new Mongo.Collection("articles");

Meteor.subscribe("articles");

Router.map(function() {
    this.route('about'); // By default, path = '/about', template = 'about'
    this.route('home', {
        path: '/', //overrides the default '/home'
    });
    this.route('articles', {
        data: function() {
                return Articles.find()
            } //set template data context
    });
    // this.route('article', {
    //     path: '/article/:id',
    //     data: function() {
    //         return Articles.findOne({
    //             id: parseInt(this.params.id)
    //         })
    //     },
    //     template: 'fullArticle'
    // });
    this.route('article', {
    path: '/article/:id',
    data: function() {

      Meteor.http.get(apiBaseURL + "/articles/"+this.params.id+"/?format=json", function(error, result) {
        if (error) {
          console.log('http get FAILED!');
        } else {
          console.log('http get SUCCESS');
          if (result.statusCode === 200) {
            //this.response.writeHead(200, {'Content-Type': 'application/json'});
            //this.response.end(JSON.stringify(result.content));
            Session.set("jsondata", result.content);
            return {'data': 2};
          }
        }
      });
    },
    template: 'jsonArticle'
  });
});

//
Template.previewarticles.rendered = function() {
    $('#carousel').slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
    });
}

Template.registerHelper('shortTitle', function(passedString) {
    var fooText = passedString.substring(0, 20); //same as truncate.
    return new Spacebars.SafeString(fooText)
});

Template.whatnext.helpers({
    articles: function() {
        return Articles.find({});
    }
});

Template.whatnext.events({
    "click .nextArticles": function() {
        //alert("nextArticles");
        $('#carousel').slick('slickNext');
    },
    "click .prevArticles": function() {
        //alert("prevArticles");
        $('#carousel').slick('slickPrev');
    }

    // $('#slickNext').click(function() {
    //       
    //     });
    //     $('#slickPrev').click(function() {
    //       $('#articleslider').slick('slickPrev');
    //     });
});

// Template menu Helper
Template.menu.helpers({
    menus: function() {
        return {
            'current': 'index',
            'left': [{
                'active': true,
                'link': '/',
                'text': 'Nav 1'
            }, {
                'active': false,
                'link': '/',
                'text': 'Nav 2'
            }, {
                'active': false,
                'link': '/',
                'text': 'Nav 3'
            }, {
                'active': false,
                'link': '/',
                'text': 'Nav 4'
            }, {
                'active': false,
                'link': '/',
                'text': 'Nav 5'
            }],
            'rightLink': '\/session\/index',
            'rightText': 'Log In'
        };
    }
});

// JSON - display from Django
Template.jsonArticle.rendered = function () {
    console.log('[main] rendered');
  };

  Template.jsonArticle.helpers({
    jsondata: function () { 
      console.log("[main] 'test' helper executed");
      return Session.get("jsondata");
    }
  });
