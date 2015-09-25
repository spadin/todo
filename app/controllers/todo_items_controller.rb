class TodoItemsController < ApplicationController
  def index
    @todo_items = todo_items
  end

  def new
    @todo_item = TodoItem.new
  end

  def create
    create_todo_item
    redirect_to todo_items_path
  end

  def update
    update_todo_item
    redirect_to todo_items_path
  end

  def destroy
    destroy_todo_item
    redirect_to todo_items_path
  end

  private

  def todo_items
    TodoItem.all
  end

  def create_todo_item
    TodoItem.create(todo_attributes)
  end

  def update_todo_item
    TodoItem.update(id, todo_attributes)
  end

  def destroy_todo_item
    TodoItem.destroy(id)
  end

  def todo_attributes
    params.require(:todo_item).permit(:content)
  end

  def id
    params[:id]
  end
end
