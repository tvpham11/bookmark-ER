;(function () {

  'use strict';
  app.Views.Main = Backbone.View.extend({

    className: 'main',

    events: {
      'submit #addBookmark': 'addBookmark'
    },

    template: hbs.main,

    initialize: function() {
      this.render();
      $('.container').html(this.el);
      // use non-jQuerified el because we don't want to dump a cached version of el on page
    },

    render: function() {
      this.$el.html(this.template);
      // we use $el to use the jQuery method of html
    },

    addBookmark: function(event) {
      event.preventDefault();

      // Grab our form and form values
      var form = event.target,
          title = form.find('#bookmarkTitle').val(),
          url = form.find('#bookmarkURL').val();

      // Create bookmark instance
      var b = new app.Model.Bookmark({
        url: url,
        title: title,
      });

      // Add instance to our collection and save to database
    }

  });

}());
