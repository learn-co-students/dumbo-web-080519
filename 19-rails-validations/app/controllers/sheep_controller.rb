class SheepController < ApplicationController
  before_action :set_sheep, only: [:show, :edit, :update, :destroy]
  
  def index
    @sheeps = Sheep.all
  end

  def show
  end

  def new
    @sheep = Sheep.new
  end

  def create
    @sheep = Sheep.create(sheep_params)
    redirect_to @sheep
  end

  def edit
  end

  def update
    @sheep.update(sheep_params)
    redirect_to @sheep
  end

  def destroy
    @sheep.destroy
    redirect_to sheep_index_path
  end


  private

  def sheep_params
    params.require(:sheep).permit(:name, :country)
  end

  def set_sheep
    @sheep = Sheep.find(params[:id])
  end

















end
