class ApplicationController < ActionController::Base

  before_action :set_up_voting

  private

  def set_up_voting
    session["remaining_votes"] ||= 5
    @remaining_votes = session["remaining_votes"]
    @can_vote = @remaining_votes > 0
    @notification = flash["notification"]
    @errors = flash["errors"]
  end

  def use_one_vote
    session["remaining_votes"] -= 1
  end

end