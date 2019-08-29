require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get '/sheep' do
    @sheep = Sheep.all
    erb :index
  end

  get '/sheep/new' do
    erb :new
  end

  get '/sheep/:id' do
    @sheep = Sheep.find(params[:id])
    erb :show
  end

  post '/sheep' do
    @sheep = Sheep.create(params[:sheep])
    redirect "/sheep/#{@sheep.id}"
  end

  get '/sheep/:id/edit' do
    @sheep = Sheep.find(params[:id])
    erb :edit
  end

end
