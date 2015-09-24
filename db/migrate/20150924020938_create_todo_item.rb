class CreateTodoItem < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.text :content
      t.timestamps
    end
  end
end
