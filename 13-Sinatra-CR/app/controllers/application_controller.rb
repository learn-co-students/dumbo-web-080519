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

  # NEW action
  get '/students/new' do
    erb :new
  end

  # CREATE action
  post '/students' do
    # old params => {name: "Mad Dog", age: 2}
    # new params => {name: "Mad Dog", age: 2, submitty: "Create a new student"}

    # ideal params => {student: {name: "Mad Dog", age: 2}, submitty: "Create a new student"}

    # binding.pry
    @student = Student.create(params[:student])
    redirect "/students/#{@student.id}"
  end

  # SHOW action
  get '/students/:id' do
    # binding.pry
    @student = Student.find(params[:id])
    erb :show
  end






















end