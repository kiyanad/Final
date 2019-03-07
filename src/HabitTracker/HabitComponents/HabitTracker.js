import React, { Component } from 'react';
import '../HabitCss/HT.css';
import '../../CSS/Calender.css';
import 'wired-elements';
import TopHabit from "./TopHabit"
import DayHeader from "../HabitFuncComponents/DayHeader"
import Grid from "../HabitFuncComponents/Grid"
import Form from "./Form"
import 'wired-elements';
import dateFns from "date-fns";
import { Redirect } from 'react-router';






// RENDERS DAY HEADER && GRID FUNC COMPONENT //


class HabitTracker extends Component {

    state = {
      //LIST OF AL USER HABITS //
      userhabits: [],
      //LIST OF ALL HABITS //
      habits: [],
      userinstances: [],
      selected: null,
      currentMonth: new Date(),
      selectedDate: new Date()
    }
    // COMPONENTDIDMOUNT //

    componentDidMount(){
      // FETCH TO GET LIST OF USER HABITS //
      fetch("http://localhost:3000/api/v1/user_habits", {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${window.sessionStorage.accessToken}`
        }
      })
        .then(res=>res.json())
        .then(habits => this.setState({
          userhabits: habits.user_habit
          })
        )

      // END OF FETCH //

  // FETCH TO GET LIST OF ALL HABITS
      fetch("http://localhost:3000/api/v1/habits", {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${window.sessionStorage.accessToken}`
              }
      })
        .then(res=>res.json())
        .then(habits => this.setState({
          habits: habits.habit
        })
      )
      // END OF CLICKHANDLER //
      //FETCH TO GET ALL INSTANCES //

      fetch("http://localhost:3000/api/v1/user_instances",{
        method: 'GET',
        headers: {
        Authorization: `Bearer ${window.sessionStorage.accessToken}`
      }
    })
      .then(res=>res.json())
      .then(instance => this.setState({
        userinstances: instance.user_instance
      })
      )
}
// END OF COMPONENTDIDMOUNT //

// CLICK HANDLER TO ADD A HABIT TO USER HABITS VIA HABITS //

addHabit = (e) => {

  e.preventDefault()
  fetch("http://localhost:3000/api/v1/habits", {
    method: 'POST',
    headers:{
      Authorization: `Bearer ${window.sessionStorage.accessToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
    body: JSON.stringify({
      habit: {name: `${e.target.name.value}`
    }
      }),
    })
      .then(res => {
        if (res.ok){
          return res.json()
        }
        else{
          let error= new Error ("Cannot add habit twice")
          throw error
        }
      })
      // .then(rep =>console.log(rep))
      .then(response => this.setState({
        userhabits: [...this.state.userhabits, response.user_habit],
        habits: [...this.state.habits, response.user_habit.habit]
      }))
      .catch(err => {
        console.error(err.message)
        alert(err.message)
      })
}

deleteHabit = (e) => {
  // debugger
  // this.state.habits.filter(habit => {debugger})
  // debugger
  if(e.target.classList.contains("habtype") == false){

  // debugger
  // if(document.getElementById(e.target.nextElementSibling) !== null){
  // debugger
  document.getElementById(e.target.nextElementSibling.innerText).remove()
  // document.getElementsByName(e.target.nextElementSibling.innerText).remove()
  // debugger
// }
  let id = e.target.id
  // debugger
        fetch(`http://localhost:3000/api/v1/user_habits/${id}`,{
          method: 'DELETE',
          headers: {
          Authorization: `Bearer ${window.sessionStorage.accessToken}`
        }
      })
        .then(res=>res.json())
        .then(habity => {
          let newHab = this.state.userhabits.filter(habit =>  habit.id !== habity.habit.id  )
        this.setState({
          userhabits: newHab
        })
      })


}
}
//CLICK HANDLER FOR TOP BAR COLOR SELECTION //

clickHandler = (e) =>
{
  // COLOR CHOICES //
// debugger
if(e.target.attributes[1].value !== "2"){
  const list = {

    0: { code: "Green", label: "Completed 👍" },
    1: { code: "Red", label: "Not Completed 👎" },
    2: { code: "Black", label: "Missed Day 😞" },
    3: { code: "White", label: "Remove 🚫" },

  };
  // END OF COLORCHOICES //

  // GET CHOOSEN COMPLETION COLOR //

  let getGradient = colorId =>
  `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, ${colorId} 100%)`;
  const choosen = document.querySelector("#choosen span");
  // END OF CHOOSEN //

  // SET CHOOSEN TO NULL //

  let selectedMood = null;


  if (e.target.attributes){
    // debugger
    selectedMood = e.target.attributes[1].value;
    choosen.style.background = getGradient(list[selectedMood].code)
    let selection = list[e.target.attributes[1].value]

    this.setState({
      selected: selection
    })
  }

  // debugger

}
}
// END OF CLICKHANDLER //

// CLICKHANDLERS FOR ARROW MONTH AND DATE CLICK //


onDateClick = day => {  this.setState({
    selectedDate: day
  });}

nextMonth = () => {this.setState({
    currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
  });}

prevMonth = () => {
  this.setState({
  currentMonth: dateFns.subMonths(this.state.currentMonth, 1)})
}



// END OF CLICKHANDLER //

render () {
  if (window.sessionStorage.length == 0) {
      return <Redirect to={'/login'} />;
  }
  console.log(this.state.habits);
  // console.log(this.state.userhabits);
  const list = [
  { code: "Green", label: "Completed 👍", num: 0 },
    { code: "Red", label: "Not Completed 👎", num: 1 },
  { code: "Black", label: "Missed Day 😞", num: 2 },
// { code: "White", label: "Remove 🚫", num: 3 },

  ];
// TOP COMPLETION COLOR BAR //
  let topHabit = list.map( choice => < TopHabit key={choice.num} choice ={choice} clickHandler={this.clickHandler}/>)
//   CREATE GRID  //
if(this.state.userhabits){
  var row =  this.state.userhabits.map(habit =>

    <Grid instance={this.state.userinstances} allHabits={this.state.habits} key={habit.habit_id} habit= {habit} selected={this.state.selected} current={this.state.currentMonth} onClick={this.onDateClick} userhabits={this.state.userhabits}/>
  )}
  const dateFormat = "MMMM YYYY";
// console.log(this.state.userinstances);
    return (
      <div className="habCon">
      <div className ="oval" >
      <h1 className="title">[Habit"  |  -Tracker!#~</h1>
      </div>
      <img className="board" src="http://www.stickpng.com/assets/thumbs/5b06c18efad1cae04539afdf.png"/>
      <Form allHabits={this.state.userhabits} addHabit={(e)=>{this.addHabit(e)}}/>
        <div id="grid" onClick={(e) => {this.clickHandler(e)}}>
          <div id="choices">
            {topHabit}
          </div>
          <div id="choosen">Selected: <span></span></div>
        </div>
      <div className="HabitBackground" >


      <div className="HabitCard">
        <div className="tape"></div>
        <div className="tape1"></div>
        <div className="content">
          <div className="header row flex-middle">
            <div className="col col-start">
              <div className="icon" onClick={this.prevMonth}>
                chevron_left
              </div>
            </div>
            <div className="col col-center">
              <span>
                {dateFns.format(this.state.currentMonth, dateFormat)}
              </span>
            </div>
            <div className="col col-end" onClick={this.nextMonth}>
              <div className="icon">chevron_right</div>
            </div>
          </div>
              <div id="daysHeader" />
              <div id="tableContainer">
                <DayHeader delete={this.deleteHabit} habits={this.state.habits} userhabits={this.state.userhabits}/>
                <div id="habitHeader">
                  <div id="weekContainer">
                    {row}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

</div>
    );
  }
}

export default HabitTracker








//
// <div id="grid" onClick={(e) => {this.clickHandler(e)}}>
//   <div id="choices">
//     {topHabit}
//   </div>
//   <div id="choosen">Selected: <span></span></div>
// </div>
// <div className="HabitCard">
//   <div className="tape"></div>
//   <div className="tape1"></div>
//   <div className="content">
//     <div className="header row flex-middle">
//       <div className="col col-start">
//         <div className="icon" onClick={this.prevMonth}>
//           chevron_left
//         </div>
//       </div>
//       <div className="col col-center">
//         <span>
//           {dateFns.format(this.state.currentMonth, dateFormat)}
//         </span>
//       </div>
//       <div className="col col-end" onClick={this.nextMonth}>
//         <div className="icon">chevron_right</div>
//       </div>
//     </div>
//     <div id="daysHeader" />
//     <div id="tableContainer">
//       <DayHeader habits={this.state.habits} userhabits={this.state.userhabits}/>
//       <div id="habitHeader">
//         <div id="weekContainer">
//           {row}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>












//
// <img className="board" src="http://www.stickpng.com/assets/thumbs/5b06c18efad1cae04539afdf.png"/>
// <Form allHabits={this.state.userhabits} addHabit={(e)=>{this.addHabit(e)}}/>













// <img src = {postIt} />

// <Form />



// <img className="board" src="http://www.stickpng.com/assets/thumbs/5b06c18efad1cae04539afdf.png"/>
// <Form allHabits={this.state.userhabits} addHabit={(e)=>{this.addHabit(e)}}/>
//
//   <h1 className="title">[Habit"  |  -Tracker!#~</h1>
//   <div id="grid" onClick={(e) => {this.clickHandler(e)}}>
//     <div id="choices">
//       {topHabit}
//     </div>
//     <div id="choosen">Selected: <span></span></div>
//   </div>
//   <div className="HabitCard">
//     <div className="tape"></div>
//     <div className="tape1"></div>
//     <div className="content">
//       <div className="header row flex-middle">
//         <div className="col col-start">
//           <div className="icon" onClick={this.prevMonth}>
//             chevron_left
//           </div>
//         </div>
//         <div className="col col-center">
//           <span>
//             {dateFns.format(this.state.currentMonth, dateFormat)}
//           </span>
//         </div>
//         <div className="col col-end" onClick={this.nextMonth}>
//           <div className="icon">chevron_right</div>
//         </div>
//       </div>
//       <div id="daysHeader" />
//       <div id="tableContainer">
//         <DayHeader habits={this.state.habits} userhabits={this.state.userhabits}/>
//         <div id="habitHeader">
//           <div id="weekContainer">
//             {row}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>





//
// const weekContainer = document.getElementById("weekContainer");
// const days_header = document.getElementById("daysHeader");
// const habitHeader = document.getElementById("habitHeader");
// const grid = document.getElementById("grid");
// const choosen = document.querySelector("#choosen span");
// const choices = document.getElementById("choices");
