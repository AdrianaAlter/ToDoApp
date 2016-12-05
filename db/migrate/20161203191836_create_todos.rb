class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.text :description
      t.boolean :done, default: false
      t.boolean :urgent, default: false
    end
  end
end
