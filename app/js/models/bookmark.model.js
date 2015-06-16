;(function () {

  'use strict';
  app.Models.Bookmark = Backbone.Model.extend({
    idAttribute: '_id', // due to MongoDB

    defaults: {
      url: '',
      visited: false,
      title: ''
    }

  });

}());
