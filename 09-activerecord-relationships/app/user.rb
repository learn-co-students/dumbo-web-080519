class User < ActiveRecord::Base
  has_many :votes
  has_many :names, through: :votes

  def dance
    "#{self.handle} is dancing!"
  end
end
