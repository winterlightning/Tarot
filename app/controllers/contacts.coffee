jQuery ($) ->
  window.Contacts = Spine.Controller.create(
    elements: 
      ".show": "showEl"
      ".edit": "editEl"
      ".show .content": "showContent"
      ".edit .content": "editContent"
    
    events: 
      "click .optEdit": "edit"
      "click .optEmail": "email"
      "click .optDestroy": "destroy"
      "click .optSave": "save"
    
    proxied: [ "render", "show", "edit" ]
    init: ->
      @editEl.hide()
      Contact.bind "change", @render
      @App.bind "show:contact", @show
      @App.bind "edit:contact", @edit
    
    change: (item) ->
      @current = item
      @render()
    
    render: ->
      @showContent.html $("#contactTemplate").tmpl(@current)
      @editContent.html $("#editContactTemplate").tmpl(@current)
    
    show: (item) ->
      @change item  if item and item.model
      @showEl.show()
      @editEl.hide()
    
    edit: (item) ->
      @change item  if item and item.model
      @showEl.hide()
      @editEl.show()
    
    destroy: ->
      @current.destroy()  if confirm("Are you sure?")
    
    email: ->
      return  unless @current.email
      window.location = "mailto:" + @current.email
    
    save: ->
      atts = @editEl.serializeForm()
      @current.updateAttributes atts
      @show()
  )