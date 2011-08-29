jQuery ($) ->
  window.Sidebar = Spine.Controller.create(
    elements: 
      ".items": "items"
      input: "input"
    
    events: 
      "click button": "create"
      "keyup input": "filter"
      "click input": "filter"
    
    proxied: [ "render" ]
    template: (items) ->
      $("#contactsTemplate").tmpl items
    
    init: ->
      @list = Spine.List.init(
        el: @items
        template: @template
      )
    
    filter: ->
      @query = @input.val()
      @render()
    
    render: ->
      items = Contact.filter(@query)
      items = items.sort(Contact.nameSort)
      @list.render items
    
    create: ->
      item = Cards.create()
  )