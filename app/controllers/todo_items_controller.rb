class TodoItemsController < ApplicationController
  def index
    @todo_items = todo_items
  end

  def new
    @todo_item = TodoItem.new
  end

  def create
    @todo_item = created_todo_item

    respond_to do |format|
      format.html { redirect_to todo_items_path }
      format.json
    end
  end

  def update
    @todo_item = updated_todo_item

    respond_to do |format|
      format.html { redirect_to todo_items_path }
      format.json
    end
  end

  def destroy
    todo_item.destroy

    respond_to do |format|
      format.html { redirect_to todo_items_path }
      format.json
    end
  end

  private

  def todo_attributes
    params.require(:todo_item).permit(:content)
  end

  def todo_items
    TodoItem.all
  end

  def created_todo_item
    TodoItem.create(todo_attributes)
  end

  def updated_todo_item
    todo_item.update(todo_attributes)
    todo_item
  end

  def id
    params[:id]
  end

  def todo_item
    TodoItem.find(id)
  end
end
