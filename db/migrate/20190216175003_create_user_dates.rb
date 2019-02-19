class CreateUserDates < ActiveRecord::Migration[5.2]
  def change
    create_table :user_dates do |t|
      t.belongs_to :user_habits, foreign_key: true

      t.timestamps
    end
  end
end
