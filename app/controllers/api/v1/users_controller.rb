
class Api::V1::UsersController < ApplicationController

  def index
    # render json: {user: UserSerializer.new(current_user)}, status: :accepted
    @users = User.all
render json: @users
  end

  def create
        @user = User.create(user_params)
          render json: { user: UserSerializer.new(@user)}, status: :created

  end

      private
      def user_params
        params.require(:user).permit(:name, :username)
      end
end
