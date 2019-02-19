class Api::V1::HabitsController < ApplicationController
    # skip_before_action :authorized, only: [:get]

    def index
        @habits = Habit.all
        render json: { habit: @habits}
    end

    def show
        @habit = Habit.find(params[:id])
        render json: {habit: @habit}
    end

    def create
        @habit = Habit.create(habit_params)
        render json: { habit: HabitSerializer.new(@habit)}, status: :created

    end

    private

    def habit_params
        params.require(:habit).permit(:name, :id)
    end
end
