module Api
  class TodoItemsController < ApplicationController
    def index
    end

    def create
    end

    def update
    end

    def destroy
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
end

