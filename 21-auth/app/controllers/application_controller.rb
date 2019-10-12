class ApplicationController < ActionController::Base

  before_action :set_up_voting

  private

  def set_up_voting
    # session["remaining_votes"] ||= 5
    @notification = flash["notification"]
    @errors = flash["errors"]
    # byebug
    if (session[:user_id])
      @logged_in_user = User.find(session[:user_id])
      @remaining_votes = @logged_in_user.remaining_votes
      @can_vote = @logged_in_user.can_vote?
    end
  end

  # def use_one_vote
  #   session["remaining_votes"] -= 1
  # end

end