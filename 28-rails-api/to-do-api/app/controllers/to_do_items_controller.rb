class ToDoItemsController < ApplicationController

  def index
    @to_do_items = ToDoItem.all
    render({ json: @to_do_items }.merge(to_do_serializer))
  end



  private

  def to_do_serializer
    { 
      only: [ :id, :title, :done ], 
      include: { 
        comments: { 
          only: [:id, :text] 
        } 
      } 
    }
  end
end
