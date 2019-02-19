# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

kiyana = User.create(name:"Kiyana", username:"kiki")

read = Habit.create(name:"Read")
sleep = Habit.create(name:"Sleep")
eat = Habit.create(name:"Eat")

UserHabit.create(user: kiyana, habit: read)
UserHabit.create(user: kiyana, habit: sleep)
UserHabit.create(user: kiyana, habit: eat)
