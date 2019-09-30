class Teacher < ApplicationRecord
  has_many :courses
  has_many :assignments, through: :courses

  def professor_name
    "Dr. #{self.name}"
  end

end
