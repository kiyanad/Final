import React from 'react';

function HabitRow(props) {

      return (
        <div>
          <div className= "habitHeader2">
            {props.habit.name}
          </div>
            <div className= "weekContainer">
              <div className= "monthContainer" id={props.habit.name} />
            </div>
        </div>
      )
  }

export default HabitRow
