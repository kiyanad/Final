import React, { Component } from 'react';
import '../HabitCss/HT.css';
import 'wired-elements';
import TopHabit from "./TopHabit"
import DayHeader from "../HabitFuncComponents/DayHeader"
import Grid from "../HabitFuncComponents/Grid"
import Form from "./Form"
import postIt from "../Images/postIt.png"
import 'wired-elements';
import dateFns from "date-fns";





class HabitTracker extends Component {

    state = {
      userhabits: [],
      habits: [],
      selected: null,
      currentMonth: new Date(),
      selectedDate: new Date()
    }
    // COMPONENTDIDMOUNT //

    componentDidMount(){
      // FETCH TO GET LIST OF USER HABITS //
      fetch("http://localhost:3000/api/v1/user_habits")
      .then(res=>res.json())
      .then(habits => this.setState({
        userhabits: habits.user_habit
      })
      )
      // END OF FETCH //

  // FETCH TO GET LIST OF ALL HABITS
      fetch("http://localhost:3000/api/v1/habits")
      .then(res=>res.json())
      .then(habits => this.setState({
        habits: habits.habit
      })
      )
      // END OF CLICKHANDLER //

}
// END OF COMPONENTDIDMOUNT //


//CLICK HANDLER FOR TOP BAR COLOR SELECTION //

clickHandler = (e) =>
{
  // COLOR CHOICES //

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


  if (e.target.attributes[1].value){
    selectedMood = e.target.attributes[1].value;
    choosen.style.background = getGradient(list[selectedMood].code)
  }

  let selection = list[e.target.attributes[1].value]

    this.setState({
      selected: selection
    })
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
  const list = [
  { code: "Green", label: "Completed 👍", num: 0 },
    { code: "Red", label: "Not Completed 👎", num: 1 },
  { code: "Black", label: "Missed Day 😞", num: 2 },
{ code: "White", label: "Remove 🚫", num: 3 },

  ];
// TOP COMPLETION COLOR BAR //
  let topHabit = list.map( choice => < TopHabit key={choice.num} choice ={choice} clickHandler={this.clickHandler}/>)
//   CREATE GRID  //
  let row =  this.state.userhabits.map(habit =>
      <Grid allHabits={this.state.habits} key={habit.id} habit= {habit} selected={this.state.selected} current={this.state.currentMonth} onClick={this.onDateClick} userhabits={this.state.userhabits}/>
    )
  const dateFormat = "MMMM YYYY";

    return (
      <div className="HabitBackground" >
      <img src = {postIt} />

      <Form />
        <h1 className="title">[Habit"  |  -Tracker!#~</h1>
        <div id="grid" onClick={(e) => {this.clickHandler(e)}}>
          <div id="choices">
            {topHabit}
          </div>
          <div id="choosen">Selected: <span></span></div>
        </div>
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
              <DayHeader habits={this.state.habits}/>
              <div id="habitHeader">
                <div id="weekContainer">
                  {row}
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
// const weekContainer = document.getElementById("weekContainer");
// const days_header = document.getElementById("daysHeader");
// const habitHeader = document.getElementById("habitHeader");
// const grid = document.getElementById("grid");
// const choosen = document.querySelector("#choosen span");
// const choices = document.getElementById("choices");
