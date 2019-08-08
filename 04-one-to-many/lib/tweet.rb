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

  def username
    @author.username
  end

end
