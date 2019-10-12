class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    unless @logged_in_user && @logged_in_user == @user
      flash[:errors] = ["You don't have permission to see that page"]
      redirect_to new_login_path
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to colors_path
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to new_user_path
    end
  end

  private 

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
