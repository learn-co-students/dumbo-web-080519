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

  get "/students" do 
    @students = Student.all
    erb :students
  end 



end
