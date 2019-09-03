class SheepController < ApplicationController

  def index
    @sheeps = Sheep.all
  end

  def show
    @sheep = Sheep.find(params[:id])
  end

  def new
    @sheep = Sheep.new
  end

  def create
    @sheep = Sheep.create(sheep_params)
    redirect_to @sheep
  end

  def edit
    @sheep = Sheep.find(params[:id])
  end

  def update
    @sheep = Sheep.find(params[:id])
    @sheep.update(sheep_params)
    redirect_to @sheep
  end

  def destroy
    @sheep = Sheep.find(params[:id])
    @sheep.destroy
    redirect_to sheep_index_path
  end

  private

  def sheep_params
    params.require(:sheep).permit(:name, :country)
  end
end
