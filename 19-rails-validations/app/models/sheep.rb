class Sheep < ApplicationRecord
  has_many :sweaters, dependent: :destroy
  has_many :grandmas, through: :sweaters
end
