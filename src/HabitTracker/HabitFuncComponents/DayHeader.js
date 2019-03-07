import React from 'react';
import HabitRow from "./HabitRow"


function DayHeader(props) {
  // debugger
  // console.log(props.userhabits);
  // if(props.userhabits){
  //   let newHab =  props.habits.map(habit =>
  //     props.habits.find(onehabit=> (habit.id === onehabit.id))
  //
  //       // <HabitRow key={habit.id} habit= {habitName} allhabits= {props.habits}/>
  //
  //     )
      // console.log(newHab);
      if (props.habits !== undefined){
        // debugger
      var row = props.userhabits.map(habit => <HabitRow delete={props.delete}key={habit.id} habit= {habit} allhabits= {props.userhabits}/>)
    }
  // }
      // console.log(newHab)

      return (
        <div className= "habitHeader">
          {row}
        </div>
      )
}

export default DayHeader
