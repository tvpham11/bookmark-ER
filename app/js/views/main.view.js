;(function () {

  'use strict';
  app.Views.Main = Backbone.View.extend({

    className: 'main',

    events: {
      'submit #addBookmark': 'addBookmark'
    },

    template: hbs.main,

    initialize: function(options) {
      var args = options || {};
      this.collection = args.collection;

      // this.collection.on('add', this.render, this);

      this.render();
      $('.container').html(this.el);
      // use non-jQuerified el because we don't want to dump a cached version of el on page
    },

    render: function() {
      this.$el.html(this.template({bookmark: this.collection.toJSON()}));
      // we use $el to use the jQuery method of html
    },

    addBookmark: function(event) {
      event.preventDefault();

      // Grab our form and form values
      var self = this,
          form = $(event.target),
          title = form.find('#bookmarkTitle').val(),
          url = form.find('#bookmarkURL').val();

      // Create bookmark instance
      var b = new app.Models.Bookmark({
        url: url,
        title: title
      });

      // Add instance to our collection and save to database
      this.collection.add(b).save().success(function() {
        self.render();
      })

      // The below fails with line 18 because there is a lag
      // this.collection.add(b).save();
    }

  });

}());
