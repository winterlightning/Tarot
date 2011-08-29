(function() {
  var Contact;
  Contact = Spine.Model.setup("Contact", ["first_name", "last_name", "email", "mobile", "work", "address", "notes"]);
  Contact.extend(Spine.Model.Local);
  Contact.extend(Spine.Model.Filter);
  Contact.selectAttributes = ["first_name", "last_name", "email", "mobile", "work", "address"];
  Contact.nameSort = function(a, b) {
    if (a.first_name === b.first_name) {
      if (a.first_name === b.first_name) {
        return 0;
      }
      if (a.first_name < b.first_name) {
        return -1;
      } else {
        return 1;
      }
    }
    if (a.first_name < b.first_name) {
      return -1;
    } else {
      return 1;
    }
  };
  Contact.include({
    selectAttributes: function() {
      var attr, i, result;
      result = {};
      i = 0;
      while (i < this.parent.selectAttributes.length) {
        attr = this.parent.selectAttributes[i];
        result[attr] = this[attr];
        i++;
      }
      return result;
    },
    fullName: function() {
      if (!this.first_name && !this.last_name) {
        return;
      }
      return this.first_name + " " + this.last_name;
    }
  });
}).call(this);
