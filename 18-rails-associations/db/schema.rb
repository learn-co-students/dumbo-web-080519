# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_03_141903) do

  create_table "grandmas", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.integer "experience"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sheep", force: :cascade do |t|
    t.string "name"
    t.string "country"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sweaters", force: :cascade do |t|
    t.string "description"
    t.integer "price"
    t.integer "grandma_id", null: false
    t.integer "sheep_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["grandma_id"], name: "index_sweaters_on_grandma_id"
    t.index ["sheep_id"], name: "index_sweaters_on_sheep_id"
  end

  add_foreign_key "sweaters", "grandmas"
  add_foreign_key "sweaters", "sheep"
end
