class CreateGrandmas < ActiveRecord::Migration[6.0]
  def change
    create_table :grandmas do |t|
      t.string :name
      t.integer :age
      t.integer :experience

      t.timestamps
    end
  end
end
