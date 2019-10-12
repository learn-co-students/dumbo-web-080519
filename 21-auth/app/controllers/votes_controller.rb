class VotesController < ApplicationController

  # skip_before_action :verify_authenticity_token

  def create
    if !@logged_in_user
      flash["errors"] = [ "You must be logged in to vote!" ]
    elsif @can_vote
      # use_one_vote
      @vote = Vote.create(color_id: params[:color_id], user_id: session[:user_id])
      flash["notification"] = "You just voted for ##{ @vote.color.hex } 💁‍♀️"
    else
      flash["errors"] = [ "You're all out of votes 🖕" ]
    end
    redirect_to colors_path
  end

  def destroy

    vote = Vote.find(params[:id])
    if @logged_in_user && vote.user == @logged_in_user
      flash[:notification] = "🗳💥"
      redirect_to colors_path
    else
      flash[:errors] = ["You don't have permission to see that page"]
      redirect_to new_login_path, method: :get
    end
  end

end

