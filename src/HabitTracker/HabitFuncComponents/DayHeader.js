import React from 'react';
import HabitRow from "./HabitRow"


function DayHeader(props) {
    let row =  props.habits.map(habit =>
        <HabitRow key={habit.id} habit= {habit} />
      )

      return (
        <div className= "habitHeader">
          {row}
        </div>
      )
}

export default DayHeader
