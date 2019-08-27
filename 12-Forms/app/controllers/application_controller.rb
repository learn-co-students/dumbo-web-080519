require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    @fruit = "kiwi"
    erb :home
  end

  # INDEX action
  get "/students" do
    if params[:search_name]
      # @students = Student.where(name: params[:search_name])
      @students = Student.where("name LIKE ?", "%#{params[:search_name]}%")
    else
      @students = Student.all
    end
    erb :index
  end

  # SHOW action
  get '/students/:id' do
    # binding.pry
    @student = Student.find(params[:id])
    erb :show
  end





















end
