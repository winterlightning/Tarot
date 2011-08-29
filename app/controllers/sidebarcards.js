(function() {
  jQuery(function($) {
    return window.Sidebarcards = Spine.Controller.create({
      elements: {
        ".items": "items",
        "input": "input"
      },
      events: {
        "click button": "create",
        "keyup input": "filter",
        "click input": "filter"
      },
      proxied: ["render"],
      template: function(items) {
        return $("#cardsTemplate").tmpl(items);
      },
      init: function() {
        this.list = Spine.List.init({
          el: this.items,
          template: this.template
        });
        this.list.bind("change", this.proxy(function(item) {
          return this.App.trigger("show:cards", item);
        }));
        return Card.bind("refresh change", this.render);
      },
      filter: function() {
        this.query = this.input.val();
        return this.render();
      },
      render: function() {
        var items;
        items = Card.filter(this.query);
        return this.list.render(items);
      },
      create: function() {
        var item;
        item = Cards.create();
        return this.App.trigger("edit:contact", item);
      }
    });
  });
}).call(this);
