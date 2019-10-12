require 'pry'

require_relative '../lib/animal'
require_relative '../lib/climbable'
require_relative '../lib/sloth'
require_relative '../lib/tiger'
require_relative '../lib/sugar_glider'
require_relative '../lib/komodo_dragon'

jack = Sloth.new("Jack", 4)
tony = Tiger.new("Tony", 2)
warren = SugarGlider.new("Warren", 4, 37)
kristina = KomodoDragon.new("Kristina", 18)

# class Tiger < Mammal
# end
#
# class Mammal < Animal
# end
#
# class Animal
# end
binding.pry




puts "done!"
