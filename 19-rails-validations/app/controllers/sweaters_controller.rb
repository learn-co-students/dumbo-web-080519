class SweatersController < ApplicationController

  def new
    @sweater = Sweater.new
    @grandmas = Grandma.all
    @sheeps = Sheep.all
  end

  def create
    # byebug
    @sweater = Sweater.create(params_for_sweater)
    redirect_to grandma_path(@sweater.grandma)
  end

  private

  def params_for_sweater
    params.require(:sweater).permit(:description, :price, :grandma_id, :sheep_id)
  end

end
