class Tweet
  attr_reader :message, :author, :time
  @@all = []

  def initialize(message, author)
    @message = message
    @author = author
    @time = Time.now
    @@all << self
  end

  def self.all
    @@all
  end

  def likes
    # => [<LIKE>, <LIKE>]
    Like.all.select do |like|
      like.tweet == self
    end
  end

  def likers
    # => [<USER>, <USER>]
    self.likes.map {|like| like.user }
  end

  def liker_usernames
    # => ["username", "username"]
    self.likers.map do |user|
      user.username
    end
  end

  def liked_by_user(user)
    Like.new(self, user)
  end






















  def username
    @author.username
  end

end
