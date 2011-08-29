jQuery ($) ->
  window.App = Spine.Controller.create(
    el: $("body")
    elements: 
      "#sidebar": "sidebarEl"
      "#contacts": "contactsEl"
    
    init: ->
      @sidebar = Sidebarcards.init(el: @sidebarEl)
      @card = Cards.init(el: @contactsEl)
      Card.fetch()
  ).init()