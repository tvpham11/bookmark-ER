;(function () {

  'use strict';
  app.Views.AboutView = Backbone.View.extend({

    className: '.about',

    template: hbs.about,

    initialize: function() {
      this.render();
      $('#content').html(this.el);
    },

    render: function() {
      this.$el.html(this.template);
    }

  });
}());
