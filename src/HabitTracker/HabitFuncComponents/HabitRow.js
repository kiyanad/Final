import React from 'react';

function HabitRow(props) {


  let habit = props.allhabits.find(habit => habit.id == props.habit.id)
// console.log(props.allhabits);
      return (
        <div>
          <div className= "habitHeader2">
            drtyftghjlk
          </div>
            <div className= "weekContainer">
              <div className= "monthContainer" id={habit} />
            </div>
        </div>
      )
  }

export default HabitRow
