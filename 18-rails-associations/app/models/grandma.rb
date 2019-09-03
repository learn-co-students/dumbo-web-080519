class Grandma < ApplicationRecord
  has_many :sweaters
  has_many :sheep, through: :sweaters

end
