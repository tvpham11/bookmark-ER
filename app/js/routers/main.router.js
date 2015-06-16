;(function () {

  'use strict';
  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function() {

    },

    routes: function() {
      'about': 'aboutPage',
      'contact': 'contactPage',
      'about/:name': 'singleAboutPage'
    },

    aboutPage: function() {
      console.log('About page');

    },

    contactPage: function() {
      console.log('Contact page');


    },

    singleAboutPage: function() {
      console.log('Single About page');


    }

  });

}());
