class SugarGlider < Animal
  prepend Climbable

  attr_reader :wingspan

  def initialize(name, legs, wingspan)
    super(name, legs)
    @wingspan = wingspan
  end

  def glide
    "Soaring, flying."
  end

  def climb
    "THIS WILL NOT SHOW UP"
  end

end
