class Api::V1::UserHabitsController < ApplicationController
    # skip_before_action :authorized, only: [:get]

    def index
        @user_habits = UserHabit.all
        render json: { user_habit: @user_habits}
    end

    def show
        @user_habit = UserHabit.find(params[:id])
        render json: {user_habit: @user_habit}
    end

    def create
        @user_habit = UserHabit.create(user_habit_params)
        render json: { user_habit: UsersHabitSerializer.new(@habit)}, status: :created

    end

    private

    def user_habit_params
        params.require(:habit).permit(:user_id, :habit_id, :status)
    end
end
