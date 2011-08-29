jQuery ($) ->
  window.Sidebarcards = Spine.Controller.create(
    elements: 
      ".items": "items"
      "input": "input"
    
    events: 
      "click button": "create"
      "keyup input": "filter"
      "click input": "filter"
    
    proxied: [ "render" ]
    template: (items) ->
      $("#cardsTemplate").tmpl items
    
    init: ->
      @list = Spine.List.init(
        el: @items
        template: @template
      )
      @list.bind "change", @proxy((item) ->
        @App.trigger "show:cards", item
      )
      Card.bind "refresh change", @render
    
    filter: ->
      @query = @input.val()
      @render()
    
    render: ->
      items = Card.filter(@query)
      @list.render items
    
    create: ->
      item = Cards.create()
      @App.trigger "edit:contact", item
  )