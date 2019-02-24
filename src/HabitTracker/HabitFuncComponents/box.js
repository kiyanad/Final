import React from 'react';
import BigBox from "../HabitComponents/bigBox"
import dateFns from "date-fns";
import differenceInDays from 'date-fns/difference_in_days'


function Box(props){
    const monthStart = dateFns.startOfMonth(props.month);

    const monthEnd = dateFns.endOfMonth(monthStart);

    var result = differenceInDays(
      monthEnd, monthStart
    )

    let monthLength = Array.from({length: result}, (x,i) => i);
// debugger
// console.log(props.allHabits);
// debugger
    let eachDay = monthLength.map(day => <BigBox key={day} day= {day} monthNum={props.monthNum} userhabits={props.userhabits} habit={props.habit} allHabits={props.allHabits}/>)

    let day = monthStart;

  return (
    <div className="row" key={day}>
      {eachDay}
    </div>
  )
}


export default Box
