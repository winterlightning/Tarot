jQuery ($) ->
  window.Cards = Spine.Controller.create(
    
    proxied: [ "render", "show", "changed"]
    init: ->
      Card.bind "change", @render
      @App.bind "show:cards", @show
    
    show: (item) ->
      @change item  if item and item.model
    
    change: (item) ->
      @current = item
      @render()
    
    render: ->
      @showContent.html $("#cardTemplate").tmpl(@current)
    
  )