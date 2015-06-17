;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function (options) {

      var args = options || {};
      this.collection = args.collection;

    },

    routes: {
      '' : 'homePage',
      'bookmark/:id' : 'singleBookmark',
      'about': 'aboutPage',
      'edit/:id': 'editPage',
      '*path': 'errorPage'
    },

    homePage: function () {
      new app.Views.Main({
        collection: this.collection
      });
    },

    aboutPage: function() {
      new app.Views.AboutView();
    },

    editPage: function (id) {
      new app.Views.EditView({
        singleId: id,
        collection: this.collection
      });
    },

    singleBookmark: function (id) {
      new app.Views.SingleView({
        singleId: id,
        collection: this.collection
      });
    },

    errorPage: function() {
      $('.container').html('404 Not Found');
    }

  });

}());
