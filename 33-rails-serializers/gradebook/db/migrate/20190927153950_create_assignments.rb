class CreateAssignments < ActiveRecord::Migration[6.0]
  def change
    create_table :assignments do |t|
      t.string :name
      t.datetime :due_date
      
      t.belongs_to :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end
