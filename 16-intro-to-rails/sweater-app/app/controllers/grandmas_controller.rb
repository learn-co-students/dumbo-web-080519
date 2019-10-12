class GrandmasController < ApplicationController

  def index
    @grandmas = Grandma.all
    # render :index
  end

  def show
    @grandma = Grandma.find(params[:id])
  end

end
