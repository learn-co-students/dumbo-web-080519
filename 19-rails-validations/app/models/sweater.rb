class Sweater < ApplicationRecord
  belongs_to :grandma
  belongs_to :sheep

  validates :description, :price, presence: true, uniqueness: true
end
