;(function () {

  'use strict';
  app.Views.SingleView = Backbone.View.extend({
    className: 'single',

    template: hbs.single,

    events: {
      'click #delete': 'deleteBookmark',
      'click #edit': 'editBookmark'
    },

    initialize: function(options) {
      var args = options || {};
      this.singleId = args.singleId;
      this.collection = args.collection;

      this.collection.on('destroy', this.destroyed, this);

      this.render();
      $('.container').html(this.el);
    },

    render: function() {
      var singleBookmark = this.collection.get(this.singleId);
      this.$el.html(this.template(singleBookmark.toJSON()));
    },

    destroyed: function() {
      console.log('A model was removed from my collection.');
    },

    editBookmark: function(event) {
      event.preventDefault();

      var button = event.target,
          id2Edit = $(button).data('id');

      app.mainRouter.navigate('#edit/' + id2Edit, {trigger: true});
    },

    deleteBookmark: function(event) {
      event.preventDefault();

      var button = event.target;
      var modelID = $(button).data('id');
      var whichOne = this.collection.get(modelID);

      if(window.confirm('Do you really want to delete me?')) {
        whichOne.destroy().success(function(){
          app.mainRouter.navigate('', { trigger: true });
        });
      }
    }

  });

}());
