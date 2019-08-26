require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    "<h1>Fruit Snack Devs</h1>" * 5
    # erb :welcome
  end

  get "/fruits" do
    "<h1>Fruit Snack Devs</h1><p>Here are all of our fruits.</p>"
  end

  delete "/fruits" do
    "<h1>Fruit Snack Devs</h1><p>You can't delete what you can't handle.</p>"
  end

end
