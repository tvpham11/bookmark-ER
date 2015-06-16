;(function () {

  'use strict';
  var allBookmarks = new app.Collections.Bookmarks();

  allBookmarks.fetch().done(function(){

    new app.Views.Main({
      collection: allBookmarks
    });

    new app.Routers.MainRouter();
    Backbone.history.start();

  });

}());
