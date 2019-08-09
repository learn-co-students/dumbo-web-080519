require 'pry'
require_relative "./lib/tweet"
require_relative "./lib/user"

coffee_dad = User.new("coffee_dad")
ye = User.new("Kanye")

Tweet.new("Time moves impossibly fast. Nothing is forever.", coffee_dad)
Tweet.new("I love cofeeee#", coffee_dad)
Tweet.new("McDonalds is the best restaurant", ye)

Tweet.new("cofeeee#4 life", coffee_dad)
Tweet.new("I miss the old kanye", ye)
Tweet.new("I need this horse", ye)

coffee_dad.post_tweet("Death is coming.")

binding.pry
0
