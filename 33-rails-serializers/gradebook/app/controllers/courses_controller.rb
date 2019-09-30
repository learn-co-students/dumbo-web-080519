class CoursesController < ApplicationController

  def show
    course = Course.find(params[:id])
    render json: course
  end
  
end
