var apiBaseURL = "http://127.0.0.1:5000";

Articles = new Mongo.Collection("articles");
Articles.initEasySearch(['title', 'id'], {
  'use': 'mongo-db'
});

Meteor.subscribe("articles");

Router.map(function() {
  this.route('search', {
    path: '/search',
  }); // By default, path = '/about', template = 'about'
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
    waitOn: function() {

      console.log("about to call");

      Meteor.call("getArticleJSON", this.params.id, function(err, response) {
        console.log("call returned");
        if (err) {
          Session.set('serverDataResponse', "Error:" + err.reason);
          return;
        }
        Session.set("jsondata", response.content);
      });

    },
    template: 'jsonArticle'
  });
});

//
Template.previewarticles.rendered = function() {
  $('#carousel').slick({
    dots: false,
    arrows: true,
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
        'link': '/search',
        'text': 'Search'
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
Template.jsonArticle.rendered = function() {
  console.log('[main] rendered');
};

Template.jsonArticle.helpers({
  jsondata: function() {
    console.log("[main] 'test' helper executed");
    return Session.get("jsondata");
  }
});


// Search highlight
Template.registerHelper('highlight', function(text) {
  var hashtagPattern = /\s*(#\w*)/gi,
    link = "/search/",
    m, match, matches = [],
    t, url = '';

  // initial check for hashtag in text
  if (text.indexOf("#") !== -1) {

    // find all #keywords (that have hashtags)
    while ((match = hashtagPattern.exec(text))) {
      matches.push(match[0]);
    }

    // replace any #keywords with <a href="/search/keywords">#keywords</a>
    for (var j = 0; j < matches.length; j++) {
      m = matches[j].replace(/\s/g, "");
      // console.log('match',m);
      url = link + m;
      url = url.replace('#', "").toLowerCase(); // remove hashtag for lookup
      t = " <a class='hashtag' href='" + url + "'>" + m + "</a> "; // replace with
      replace = new RegExp("\\s*(" + m + ")", 'gi');

      text = text.replace(replace, t);
    }
  }
  return text;
});