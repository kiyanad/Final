import React, { Component } from 'react';
import '../HabitCss/HabitTracker.css';
import NewHabit from "./NewHabit"
import Popup from "./Popup"



class BigBox extends Component {
  state = {
    userinstances: null,
    selected: "",
    done: true

  }
  // COMPONENTDIDMOUNT //
  componentDidMount(){
    // FETCH FOR USER INSTANCES //

  fetch("http://localhost:3000/api/v1/user_instances")
  .then(res=>res.json())
  .then(instance => this.setState({
    userinstances: instance.user_instance
  })
  )

  // END OF FETCH//

}
// END OF COMPONENTDIDMOUNT //

// CLICKHANDLER FOR SELECTED DATE //
clickHandler = (event) => {
  this.setState({
    selected: this.props.monthNum + "-" + event.target.innerText
  })
}
// END OF CLICKHANDLER //

// CLICKHANDLER FOR POPUP //

myFunction = () => {
  var popup = document.getElementById("myPopup");
  popup.classList=(" popuptext show");
}

// END OF CLICKHANDLER //

boxHandler = (event, id, date) => {
  // this.setState({
  //   selected: !this.state.selected
  // })
  // debugger
// SETS BOX COLOR //
  let box = document.getElementById(`${event.target.id}`)
  {this.state.selected ?   box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, white 100%)` :   box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, green 100%)`}
// END BOX COLOR //

// FOR PATCH FETCH //
// var date = this.state.selected

  let habit_id = id
  // debugger

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
      date:`${date}`
      }),
    }).then(res => res.json())
      .then(response => console.log(response))
}

render(){
  // IF USERINSTANCE EXIST SETS COLOR //
  if(this.state.userinstances !== null){

      let vary = `${this.props.monthNum}-${this.props.day}`
      // debugger
      // console.log(this.state.userinstances);
      let uIs = this.state.userinstances

      let completed = uIs.filter(instance => instance.date === vary)
      // debugger
      // var mine = this.props.allHabits.find(habit => habit.id === completed.user_habit_id)
      // var selected = `${mine.name}-${this.props.monthNum}-${this.props.day}`
      // let box = document.getElementById(selected)

        if (completed[0] ){
              this.props.userhabits.map(habit => {
          completed.map(complete =>
          {  var mine = this.props.allHabits.find(habit => habit.id === complete.user_habit_id)
            var selected = `${mine.name}-${this.props.monthNum}-${this.props.day}`
            // console.log(selected);
            let box = document.getElementById(selected)
            box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, green 100%)`

            // debugger


          }
            // box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, green 100%)`
          )


          // var mine = this.props.allHabits.find(habit => habit.id === completed.user_habit_id)
          // var selected = `${mine.name}-${this.props.monthNum}-${this.props.day}`
          // let box = document.getElementById(selected)
          // box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, green 100%)`;;
      })
    }
    }
    // END OF SET COLOR//
    // console.log(this.props.allHabits);

  let form = this.props.userhabits.map(habit => <NewHabit day={this.props.day}key={habit.id} habit={habit} all={this.props.allHabits} date={this.props.monthNum} clickHandler={this.boxHandler}/>)
  return(
    <div className="dd">
    {this.state.selected? <Popup day={this.props.day} date={this.state.selected} userhabits={this.props.userhabits}/> : null}
    {this.props.habit === "Read" ? <p onClick={(event) => {this.clickHandler(event)}}>{this.props.day} </p>: null}

        <div id={`${this.props.habit}-${this.props.monthNum}-${this.props.day}`} className={'dayContainer'} key={this.props.day} />
    </div>
  )
}
}
export default BigBox
