class User < ActiveRecord::Base
  def dance
    "#{self.handle} is dancing!"
  end
end
