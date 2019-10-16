class SnacksController < ApplicationController

  def index
    if logged_in?
      snacks = Snack.all
      render json: snacks
    else
      render json: { go_away: true }, status: :unauthorized
    end
  end



end
