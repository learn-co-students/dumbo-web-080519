class TeachersController < ApplicationController

  def index
    teachers = Teacher.all
    render json: teachers, include: "**"
  end

  def show
    teacher = Teacher.find(params[:id])
    render json: teacher, include: "**"
  end

end
