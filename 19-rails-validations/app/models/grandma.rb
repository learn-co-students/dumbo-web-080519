class Grandma < ApplicationRecord
  has_many :sweaters, dependent: :destroy
  has_many :sheep, through: :sweaters

  validates :name, :age, :experience, presence: true
  validates :name, uniqueness: true
  validates :age, numericality: {greater_than: 0, less_than: 100}

  validate :name_cannot_be_eric
  # validates :experience, presence: true

  def name_cannot_be_eric

    if self.name && self.name.downcase == "eric"
      self.errors.add(:name, "cannot be Eric")
    end

  end

end
