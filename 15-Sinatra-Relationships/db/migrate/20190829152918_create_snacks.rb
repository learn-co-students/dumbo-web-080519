class CreateSnacks < ActiveRecord::Migration

  def change
    create_table :snacks do |t|
      t.string :name
      t.integer :yumminess
      t.integer :student_id
    end
  end

end
