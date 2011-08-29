(($) ->
  $.fn.item = ->
    item = $(this).tmplItem().data
    (if $.isFunction(item.reload) then item.reload() else null)
  
  $.fn.forItem = (item) ->
    @filter ->
      compare = $(this).tmplItem().data
      true  if item.eql and item.eql(compare) or item == compare
  
  $.fn.serializeForm = ->
    result = {}
    $.each $(this).find("input,textarea").serializeArray(), (i, item) ->
      result[item.name] = item.value
    
    result
) jQuery