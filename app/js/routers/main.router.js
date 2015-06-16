;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function (options) {

      var args = options || {};
      this.collection = args.collection;

    },

    routes: {
      '' : 'homePage',
      'bookmark/:id' : 'singleBookmark'
    },

    homePage: function () {
      new app.Views.Main({
        collection: this.collection
      });
    },

    singleBookmark: function (id) {
      new app.Views.SingleView({
        singleId: id,
        collection: this.collection
      });
    }

  });

}());
