Contact = Spine.Model.setup("Contact", [ "first_name", "last_name", "email", "mobile", "work", "address", "notes" ])
Contact.extend Spine.Model.Local
Contact.extend Spine.Model.Filter
Contact.selectAttributes = [ "first_name", "last_name", "email", "mobile", "work", "address" ]
Contact.nameSort = (a, b) ->
  if a.first_name == b.first_name
    return 0  if a.first_name == b.first_name
    return (if (a.first_name < b.first_name) then -1 else 1)
  (if (a.first_name < b.first_name) then -1 else 1)

Contact.include 
  selectAttributes: ->
    result = {}
    i = 0
    
    while i < @parent.selectAttributes.length
      attr = @parent.selectAttributes[i]
      result[attr] = this[attr]
      i++
    result
  
  fullName: ->
    return  if not @first_name and not @last_name
    @first_name + " " + @last_name