module Api
  class TodoItemsController < ApplicationController
    def index
      @todo_items = todo_items
    end

    def create
      @todo_item = create_todo_item
    end

    def update
      @todo_item = update_todo_item
    end

    def destroy
      destroy_todo_item
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
end
