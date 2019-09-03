class Sheep < ApplicationRecord
  has_many :sweaters
  has_many :grandmas, through: :sweaters
end
