class VotesController < ApplicationController

  def create
    if @can_vote
      use_one_vote
      @vote = Vote.create(color_id: params[:color_id])
      flash["notification"] = "You just voted for ##{ @vote.color.hex } 💁‍♀️"
    else
      flash["errors"] = [ "You're all out of votes 🖕" ]
    end
    redirect_to colors_path
  end

end

