class CreateGarbageItems < ActiveRecord::Migration[5.2]
  def change
    create_table :garbage_items do |t|
      t.string :name
      t.integer :stinkiness

      t.timestamps
    end
  end
end
