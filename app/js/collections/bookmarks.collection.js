;(function () {

  'use strict';

  app.Collections.Bookmarks = Backbone.Collection.extend({
    model: app.Models.Bookmark,
    url: app.rootURL

  });

}());
