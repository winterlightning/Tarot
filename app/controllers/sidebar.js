(function() {
  jQuery(function($) {
    return window.Sidebar = Spine.Controller.create({
      elements: {
        ".items": "items",
        input: "input"
      },
      events: {
        "click button": "create",
        "keyup input": "filter",
        "click input": "filter"
      },
      proxied: ["render"],
      template: function(items) {
        return $("#contactsTemplate").tmpl(items);
      },
      init: function() {
        return this.list = Spine.List.init({
          el: this.items,
          template: this.template
        });
      },
      filter: function() {
        this.query = this.input.val();
        return this.render();
      },
      render: function() {
        var items;
        items = Contact.filter(this.query);
        items = items.sort(Contact.nameSort);
        return this.list.render(items);
      },
      create: function() {
        var item;
        return item = Cards.create();
      }
    });
  });
}).call(this);
