(function() {
  jQuery(function($) {
    return window.App = Spine.Controller.create({
      el: $("body"),
      elements: {
        "#sidebar": "sidebarEl",
        "#contacts": "contactsEl"
      },
      init: function() {
        this.sidebar = Sidebarcards.init({
          el: this.sidebarEl
        });
        this.card = Cards.init({
          el: this.contactsEl
        });
        return Card.fetch();
      }
    }).init();
  });
}).call(this);
