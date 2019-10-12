class Tiger < Animal
  extend Climbable
  include Climbable

  def kill
    "Give me a minute, I am killing here."
  end

  def run
    "zoom"
  end

end
