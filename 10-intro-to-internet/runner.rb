require 'sinatra'

get "/" do
  "<h1> 🍌🍓 Fruit Snack Devs 🍓🍌 </h1><p>We eat fruit snacks and develop.</p>"
end

get "/fruits" do
  "<h1> 🍌🍓 Fruit Snack Devs 🍓🍌 </h1><p> Here are some fruits: 🍌 🍓 🍕 🐔 </p>"
end

delete "/fruits" do
  "<p> You can't delete what you can't handle. </p>"
end
