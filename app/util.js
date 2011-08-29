(function() {
  (function($) {
    $.fn.item = function() {
      var item;
      item = $(this).tmplItem().data;
      if ($.isFunction(item.reload)) {
        return item.reload();
      } else {
        return null;
      }
    };
    $.fn.forItem = function(item) {
      return this.filter(function() {
        var compare;
        compare = $(this).tmplItem().data;
        if (item.eql && item.eql(compare) || item === compare) {
          return true;
        }
      });
    };
    return $.fn.serializeForm = function() {
      var result;
      result = {};
      $.each($(this).find("input,textarea").serializeArray(), function(i, item) {
        return result[item.name] = item.value;
      });
      return result;
    };
  })(jQuery);
}).call(this);
