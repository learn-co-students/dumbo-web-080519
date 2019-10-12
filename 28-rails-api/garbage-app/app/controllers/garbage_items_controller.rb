class GarbageItemsController < ApplicationController
  before_action :set_garbage_item, only: [:show, :edit, :update, :destroy]

  # GET /garbage_items
  # GET /garbage_items.json
  def index
    @garbage_items = GarbageItem.all
  end

  # GET /garbage_items/1
  # GET /garbage_items/1.json
  def show
  end

  # GET /garbage_items/new
  def new
    @garbage_item = GarbageItem.new
  end

  # GET /garbage_items/1/edit
  def edit
  end

  # POST /garbage_items
  # POST /garbage_items.json
  def create
    @garbage_item = GarbageItem.new(garbage_item_params)

    respond_to do |format|
      if @garbage_item.save
        format.html { redirect_to @garbage_item, notice: 'Garbage item was successfully created.' }
        format.json { render :show, status: :created, location: @garbage_item }
      else
        format.html { render :new }
        format.json { render json: @garbage_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /garbage_items/1
  # PATCH/PUT /garbage_items/1.json
  def update
    respond_to do |format|
      if @garbage_item.update(garbage_item_params)
        format.html { redirect_to @garbage_item, notice: 'Garbage item was successfully updated.' }
        format.json { render :show, status: :ok, location: @garbage_item }
      else
        format.html { render :edit }
        format.json { render json: @garbage_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /garbage_items/1
  # DELETE /garbage_items/1.json
  def destroy
    @garbage_item.destroy
    respond_to do |format|
      format.html { redirect_to garbage_items_url, notice: 'Garbage item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_garbage_item
      @garbage_item = GarbageItem.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def garbage_item_params
      params.require(:garbage_item).permit(:name, :stinkiness)
    end
end
