require 'pry'

clown_joke = "Why don't sharks eat clowns? They taste funny."
clown_names = [ "Bluster", "Flaky", "Raspy", "Floppy", "Krusty", "Baby" ]

class Clown
  # Reader/Getter
  attr_reader :hair_color, :fear

  # Writer/Setter
  # attr_writer :hair_color

  # Both a reader and a writer
  attr_accessor :name, :age, :skill

  def initialize(name, age, skill, fear)
    @name = name
    @age = age
    @skill = skill
    @fear = fear
    @hair_color = "red"
  end

  # Behavior
  def dance
    puts "#{self.name} is dancing, la la la."
  end

  def cure
    if @age > 30
      @fear = "Nothing"
    end
  end

  def fear_reassignment=(new_fear)
    if @age > 30
      @fear = new_fear
    end
  end

end


clown1 = Clown.new("Bluster", 40, "juggling", "red noses")
clown2 = Clown.new("Flaky", 32, "pie throwing", "children")
clown3 = Clown.new("Raspy", 24, "haunting your dreams","other clowns")
clown4 = Clown.new("Floppy", 76, "falling down","stairs")
clown5 = Clown.new("Krusty", 39, "giving a creepy smile","parties")
clown6 = Clown.new("Baby", 19, "eating a lot of food","birds")





binding.pry

0
