import React, { Component } from 'react';
// import { WiredButton, WiredInput } from "wired-elements"
import field from "../Images/field.png"


// import 'wired-elements';


class Form extends Component {
  state = {
    name: "",
    userhabits: []
  }

componentDidMount(){
  this.setState({
    userhabits: this.props.allHabits
  })
}

  changeHandler = (e) => {
  // debugger
  this.setState({
    [e.target.name]: e.target.value
  })
  // debugger
}

addHabit = (e) => {
  // debugger
  fetch("http://localhost:3000/api/v1/habits", {
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
    body: JSON.stringify({
      name: `${e.target.name.value}`
      }),
    }).then(res => res.json())
      .then(response => console.log(response))
}

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div>
<div  />

<form  className="habitform" onSubmit= {(e)=>{this.addHabit(e, this.state)}}>
New Habit Form!!! <br /> <br />
Habit Name: <br /><input className="nameput" onChange= {this.changeHandler} name = "name" placeholder="Name"  /> <br />

<button> Submit </button>
</form>

    </div>
  )}
}
export default Form
