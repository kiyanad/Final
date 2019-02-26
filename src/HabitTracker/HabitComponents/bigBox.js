import React, { Component } from 'react';
// import '../HabitCss/HabitTracker.css';
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

// SETS BOX COLOR //
  let box = document.getElementById(`${event.target.id}`)
  {this.state.selected ?   box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, white 100%)` :   box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, green 100%)`}
// END BOX COLOR //

// FOR PATCH FETCH //

  let habit_id = id
  // debugger

  let status = this.state.selected


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
  let day = this.props.day + 1
  // IF USERINSTANCE EXIST SETS COLOR //
  if(this.state.userinstances !== null){

      let vary = `${this.props.monthNum}-${day}`

      let uIs = this.state.userinstances

      let completed = uIs.filter(instance => instance.date === vary)

        if (completed[0] ){
              this.props.userhabits.map(habit => {
          completed.map(complete =>
          {  var mine = this.props.allHabits.find(habit => habit.id === complete.user_habit_id)
            var selected = `${mine.name}-${this.props.monthNum}-${day}`
            let box = document.getElementById(selected)
            box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, green 100%)`

          }
          )

      })
    }
    }
    // END OF SET COLOR//

  let form = this.props.userhabits.map(habit => <NewHabit day={day}key={habit.id} habit={habit} all={this.props.allHabits} date={this.props.monthNum} clickHandler={this.boxHandler}/>)
  return(
    <div className="dd">
    {this.state.selected? <Popup day={day} date={this.state.selected} userhabits={this.props.userhabits}/> : null}
    {this.props.habit === "Read" ? <p className="pclick" onClick={(event) => {this.clickHandler(event)}}>{day} </p>: null}

        <div id={`${this.props.habit}-${this.props.monthNum}-${day}`} className={'dayContainer'} key={day} />
    </div>
  )
}
}
export default BigBox
