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
