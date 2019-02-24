import React, { Component } from 'react';

class NewHabit extends Component {

  state = {
    user_habit: "",
    status: "",
    date: "",
    selected: false,
    habit: []
  }

componentDidMount(){
  fetch("http://localhost:3000/api/v1/habits")
  .then(res=>res.json())
  .then(habits => this.setState({
    habits: habits.habit
  })
  )

}

componentDidUpdate(prevProps){
  if (prevProps.date !== this.props.date) {
    console.log("this is where it changes");
  }
}
// CLICKHANDLER FOR BOX CLICK //
clickHandler = (event) => {
  console.log(this);
  this.setState({
    selected: !this.state.selected
  })
  // debugger
// SETS BOX COLOR //
  let box = document.getElementById(`${event.target.id}`)
  {this.state.selected ?   box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, white 100%)` :   box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, green 100%)`}
// END BOX COLOR //

// FOR PATCH FETCH //
var date = this.props.date + "-" + event.target.innerText
console.log(this.props.date);
  let habit_id = this.props.habit.id
  // console.log(habit_id);
  let status = this.state.selected
  // console.log(date);
  // var data = {user_habit: habit_id, status: status, date: date};

// PATCH FETCH //
  fetch("http://localhost:3000/api/v1/user_instances", {
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
    body: JSON.stringify({
      user_habit_id: `${habit_id}`,
      status:this.state.selected,
      date:this.props.date
      }),
    }).then(res => res.json())
      .then(response => console.log(response))
}

//END OF CLICKHANDLER //

  render(){
    // console.log(this.state.habits);

    // debugger
    // console.log(this.props.date);
    var date = this.props.date
// console.log(date);
// GETS HABIT NAME //
  if(this.state.habits !== undefined){
    // debugger
    var habitName = this.state.habits.find(habit => habit.id === this.props.habit.habit_id)
  }
  // END OF HABITS NAME //
    return(
      <div>
        {habitName !== undefined ? <div><p> {habitName.name}: </p> <div id={`checked-${this.props.habit.id}`} className="checked" onClick={this.clickHandler} /> <br /></div> : null }
      </div>
    )
  }
}
export default NewHabit
