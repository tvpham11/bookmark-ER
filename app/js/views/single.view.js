;(function () {

  'use strict';
  app.Views.SingleView = Backbone.View.extend({
    className: 'single',

    template: hbs.single,

    events: {
      'click #delete': 'deleteBookmark'
    },

    initialize: function(options) {
      var args = options || {};
      this.singleId = args.singleId;
      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
    },

    render: function() {
      var singleBookmark = this.collection.get(this.singleId);
      this.$el.html(this.template(singleBookmark.toJSON()));
    },

    deleteBookmark: function(event) {
      var button = event.target;
      var modelID = $(button).data('id');
      var whichOne = this.collection.get(modelID);

      whichOne.destroy().success(function(){
        console.log('Item deleted');
        // Message letting user know bookmark was deleted
        // Force route - Navigate to home page
      });
    }
  });

}());
