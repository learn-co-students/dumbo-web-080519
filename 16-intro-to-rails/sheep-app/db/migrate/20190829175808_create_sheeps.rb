class CreateSheeps < ActiveRecord::Migration
  def change
    create_table :sheep do |t|
      t.string :name
      t.string :country
    end
  end
end
