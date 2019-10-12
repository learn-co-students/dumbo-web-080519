class Animal
  attr_reader :name, :legs
  def initialize(name, legs)
    @name = name
    @legs = legs
  end

  def eat(food)
    "I am eating #{food}. Yum! 😋"
  end

  def sleep
    "zzz"
  end

  def poop
    "💩"
  end

  def die
    "I am dead."
  end

end
