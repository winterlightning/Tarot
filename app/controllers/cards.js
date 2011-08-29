(function() {
  jQuery(function($) {
    return window.Cards = Spine.Controller.create({
      proxied: ["render", "show", "changed"],
      init: function() {
        Card.bind("change", this.render);
        return this.App.bind("show:cards", this.show);
      },
      show: function(item) {
        if (item && item.model) {
          return this.change(item);
        }
      },
      change: function(item) {
        this.current = item;
        return this.render();
      },
      render: function() {
        return this.showContent.html($("#cardTemplate").tmpl(this.current));
      }
    });
  });
}).call(this);
