class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.text :info
      t.boolean :complete

      t.timestamps null: false
    end
  end
end
