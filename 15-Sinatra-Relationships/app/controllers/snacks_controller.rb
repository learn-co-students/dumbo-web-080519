class SnacksController < ApplicationController

  get '/snacks/new' do
    @students = Student.all
    erb :'snacks/new'
  end

  post '/snacks' do
    # binding.pry
    # params => {snack => {name: yumminess, student_id:}}
    @snack = Snack.create(params[:snack])
    redirect "/students/#{@snack.student_id}"
  end

  get '/snacks/:id' do
    @snack = Snack.find(params[:id])
    erb :"snacks/show"
  end



end
