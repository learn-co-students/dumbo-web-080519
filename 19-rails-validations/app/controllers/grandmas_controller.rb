class GrandmasController < ApplicationController

  def index
    @grandmas = Grandma.all
    # render :index
  end

  def show
    @grandma = Grandma.find(params[:id])
    @sweater = Sweater.new
    @sheeps = Sheep.all - @grandma.sheep
  end

  def new
    @grandma = Grandma.new(flash[:attributes])
  end

  def create
    @grandma = Grandma.create(grandma_params)
    if @grandma.valid?
      redirect_to @grandma
    else
      # render :new
      flash[:errors] = @grandma.errors.full_messages
      flash[:attributes] = @grandma.attributes
      redirect_to new_grandma_path
    end
    # redirect_to @grandma
    # redirect_to grandma_path(@grandma)
    # redirect_to grandma_path(@grandma.id)
    # redirect_to "/grandmas/#{@grandma.id}"
  end

  def edit
    @grandma = Grandma.find(params[:id])
  end

  def update
    @grandma = Grandma.find(params[:id])
    if @grandma.update(grandma_params)
      redirect_to @grandma
    else
      flash[:errors] = @grandma.errors.full_messages
      redirect_to edit_grandma_path(@grandma)
    end

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
