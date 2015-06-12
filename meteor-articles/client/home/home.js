// For the home page.

Template.registerHelper('humanDate', function(passedDate) {
    var dispTime = new Date(passedDate);
    dispTime = new Date(dispTime.getTime() + (dispTime.getTimezoneOffset() * 60000));
    return new Spacebars.SafeString(dispTime.toLocaleDateString() + ' - ' + dispTime.toLocaleTimeString())
});

Template.registerHelper('previewBody', function(passedString) {
    var previewText = passedString.substring(0, 400); //same as truncate.
    return new Spacebars.SafeString(previewText)
});


Template.registerHelper('shortBody', function(passedString) {
    var shortText = passedString.substring(0, 250); //same as truncate.
    return new Spacebars.SafeString(shortText)
});

Template.home.helpers({
    article: function() {
      var results = Articles.find({});
      var array = results.fetch();
      var randomIndex = Math.floor( Math.random() * array.length );
      console.log("random: "+randomIndex);
        return array[randomIndex];
    },
    articlelistings: function(){
      return  Articles.find({}).fetch();
    }
});