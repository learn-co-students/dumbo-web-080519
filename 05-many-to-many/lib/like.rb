class Like
  @@all = []
  attr_reader :tweet, :user

  def initialize(tweet, user)
    @tweet = tweet
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end

end
