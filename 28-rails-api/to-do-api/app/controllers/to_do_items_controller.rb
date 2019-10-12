class ToDoItemsController < ApplicationController

  def index
    @to_do_items = ToDoItem.all
    render({ json: @to_do_items }.merge(to_do_serializer))
  end

  def create
    @to_do_item = ToDoItem.new(to_do_item_params)
    if @to_do_item.save
      render({ json: @to_do_item }.merge(to_do_serializer))
    else
      render json: { error: @to_do_item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @to_do_item = ToDoItem.find(params[:id])
    if @to_do_item.update(to_do_item_params)
      render({ json: @to_do_item }.merge(to_do_serializer))
    else
      render json: { error: @to_do_item.errors.full_messages }, status: :unprocessable_entity
    end

  end
  
  def destroy
    @to_do_item = ToDoItem.find(params[:id])
    @to_do_item.destroy
    render json: { ok: true }
  end

  private

  def to_do_item_params
    params.permit(:title, :done)
  end

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
