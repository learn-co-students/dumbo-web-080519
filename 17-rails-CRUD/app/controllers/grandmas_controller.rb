class GrandmasController < ApplicationController

  def index
    @grandmas = Grandma.all
    # render :index
  end

  def show
    @grandma = Grandma.find(params[:id])
  end

  def new
    @grandma = Grandma.new
  end

  def create
    @grandma = Grandma.create(grandma_params)
    redirect_to @grandma
    # redirect_to grandma_path(@grandma.id)
    # redirect_to grandma_path(@grandma)
    # redirect_to "/grandmas/#{@grandma.id}"
  end

  def edit
    @grandma = Grandma.find(params[:id])
  end

  def update
    @grandma = Grandma.find(params[:id])
    @grandma.update(grandma_params)
    redirect_to @grandma
  end

  def destroy
    @grandma = Grandma.find(params[:id])
    @grandma.destroy
    redirect_to grandmas_path
  end

  private

  def grandma_params
    params.require(:grandma).permit(:name, :age, :experience)
  end


















end
