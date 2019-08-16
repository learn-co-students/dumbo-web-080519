require_relative "../config/environment"

class Clown

  attr_accessor :name, :age, :fears, :skill

  def initialize(argument_hash)
    argument_hash.each do |attribute, value|
      # self.name = "Krusty"
      self.send("#{attribute}=", value)
    end
  end

end

krusty = Clown.new({name: "Krusty", fears: "Children", skill: "Juggling Chainsaws"})

binding.pry
0
