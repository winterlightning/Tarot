(function() {
  jQuery(function($) {
    return window.Contacts = Spine.Controller.create({
      elements: {
        ".show": "showEl",
        ".edit": "editEl",
        ".show .content": "showContent",
        ".edit .content": "editContent"
      },
      events: {
        "click .optEdit": "edit",
        "click .optEmail": "email",
        "click .optDestroy": "destroy",
        "click .optSave": "save"
      },
      proxied: ["render", "show", "edit"],
      init: function() {
        this.editEl.hide();
        Contact.bind("change", this.render);
        this.App.bind("show:contact", this.show);
        return this.App.bind("edit:contact", this.edit);
      },
      change: function(item) {
        this.current = item;
        return this.render();
      },
      render: function() {
        this.showContent.html($("#contactTemplate").tmpl(this.current));
        return this.editContent.html($("#editContactTemplate").tmpl(this.current));
      },
      show: function(item) {
        if (item && item.model) {
          this.change(item);
        }
        this.showEl.show();
        return this.editEl.hide();
      },
      edit: function(item) {
        if (item && item.model) {
          this.change(item);
        }
        this.showEl.hide();
        return this.editEl.show();
      },
      destroy: function() {
        if (confirm("Are you sure?")) {
          return this.current.destroy();
        }
      },
      email: function() {
        if (!this.current.email) {
          return;
        }
        return window.location = "mailto:" + this.current.email;
      },
      save: function() {
        var atts;
        atts = this.editEl.serializeForm();
        this.current.updateAttributes(atts);
        return this.show();
      }
    });
  });
}).call(this);
