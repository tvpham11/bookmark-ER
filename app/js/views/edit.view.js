;(function () {

  'use strict';
   app.Views.EditView = Backbone.View.extend({

    className: 'edit',

    template: hbs.edit,

    events: {
      'click #update': 'updateBookmark'
    },

    initialize: function(options) {
      var args = options || {};
      this.singleId = args.singleId;
      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
    },

    render: function() {
      var single = this.collection.get(this.singleId);
      this.$el.html(this.template(single.toJSON()));
    },

    updateBookmark: function () {

      var single = this.collection.get(this.singleId);

      single.set({
        title: $('#editTitle').val(),
        url: $('#editURL').val()
      });

      single.save(null, {
        dataType:"text",
        success: function () {
          app.mainRouter.navigate('', { trigger: true });
        }
      });
    }

   });
}());
