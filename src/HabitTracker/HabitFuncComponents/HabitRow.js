import React from 'react';
import del from "../../img/cancel.png"

function HabitRow(props) {

  // debugger
// console.log(props.habit.name);
// console.log(props.ha);
function done() {
console.log("head");}
// console.log(props.delete);
return (
<div className="seperate">
  <img className="cancel" id={props.habit.habit.id} src={del} onClick={(e) => {props.delete(e)}}/> <p className="habtype" onClick={(e) => {props.delete(e)}}>{props.habit.habit.name}</p>
        <div className="namecon">
            <div className= "weekContainer">
              <div className= "monthContainer" id={props.habit.id} />
            </div>
        </div>
        </div>
      )
  }

export default HabitRow
