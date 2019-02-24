import React from 'react';
import  Box from "./box"
import getMonth from 'date-fns/get_month'

// CREATES GRID BOXES //

function Grid(props) {
    var result = getMonth(props.current)
    let found = props.allHabits.find(habit => habit.id === props.habit.habit_id)
      if (found !== undefined){
        var g = found.name
      }
    return(
      <div className="monthContainer" id={g}>
        <Box month={props.current} monthNum={result} userhabits={props.userhabits} habit= {g} allHabits={props.allHabits} />
      </div>
    )
}
export default Grid
