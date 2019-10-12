class User

  attr_reader :username

  def initialize(username)
    @username = username
  end

  def likes
    # Array of all likes
    # compare self to like.user
    Like.all.select do |like|
      like.user == self
    end
    # Like.all.select {|like| like.user == self}
  end

  def liked_tweets
    self.likes.map { |like| like.tweet }
  end

  def number_of_likes
    self.likes.count
  end

  def liked_tweets_contents
    self.liked_tweets.map { |tweet| tweet.message }
  end

  def like_tweet(tweet)
    Like.new(tweet, self)
  end













  def tweets
    Tweet.all.select do |tweet|
      tweet.author == self
    end
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

end
