class CreateSweaters < ActiveRecord::Migration[6.0]
  def change
    create_table :sweaters do |t|
      t.string :description
      t.integer :price
      t.references :grandma, null: false, foreign_key: true
      t.belongs_to :sheep, null: false, foreign_key: true

      t.timestamps
    end
  end
end
