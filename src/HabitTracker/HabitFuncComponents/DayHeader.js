import React from 'react';
import HabitRow from "./HabitRow"


function DayHeader(props) {
  // debugger
  // console.log(props.userhabits);
    let row =  props.userhabits.map(habit =>
        <HabitRow key={habit.id} habit= {habit} allhabits= {props.habits}/>
      )

      return (
        <div className= "habitHeader">
          {row}
        </div>
      )
}

export default DayHeader
