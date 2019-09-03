class CreateSheep < ActiveRecord::Migration[6.0]
  def change
    create_table :sheep do |t|
      t.string :name
      t.string :country

      t.timestamps
    end
  end
end
