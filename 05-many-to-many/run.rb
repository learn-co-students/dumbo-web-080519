require 'pry'
require_relative "./lib/tweet"
require_relative "./lib/user"
require_relative "./lib/like"

coffee_dad = User.new("coffee_dad")

ye = User.new("Kanye")

cd1 = Tweet.new("Time moves impossibly fast. Nothing is forever.", coffee_dad)
cd2 = Tweet.new("I love cofeeee#", coffee_dad)
k1 = Tweet.new("McDonalds is the best restaurant", ye)

cd3 = Tweet.new("cofeeee#4 life", coffee_dad)
k2 = Tweet.new("I miss the old kanye", ye)
k3 = Tweet.new("I need this horse", ye)

coffee_dad.post_tweet("Death is coming.")

Like.new(cd1, ye)
Like.new(k2, ye)
Like.new(cd3, ye)
Like.new(k2, coffee_dad)
Like.new(k3, coffee_dad)

coffee_dad.like_tweet(cd2)



















binding.pry
0
