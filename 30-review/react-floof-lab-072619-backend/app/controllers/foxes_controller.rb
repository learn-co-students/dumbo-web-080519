class FoxesController < ApplicationController
    def index
        foxes = Fox.all
        render json: foxes
    end

    def create
        render json: Fox.create(fox_params)
    end

    def update
        fox = Fox.find(params[:id])
        fox.update(fox_params)
        render json: fox
    end

    private
    def fox_params
        params.permit(:name, :img_url)
    end
end
