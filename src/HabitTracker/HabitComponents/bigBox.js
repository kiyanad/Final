import React, { Component } from 'react';
// import '../HabitCss/HabitTracker.css';
import NewHabit from "./NewHabit"
import Popup from "./Popup"
import isFuture from 'date-fns/is_future'
import endOfToday from 'date-fns/end_of_today'
import getDate from 'date-fns/get_date'
import getMonth from 'date-fns/get_month'
import isPast from 'date-fns/is_past'


class BigBox extends Component {
  state = {
    selected: null,
    done: true,
    all: [],
    selection: false,
    habit: [],
    instance: [],
    missed: false,
    first: false

  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props !== prevProps) {
   }
  }

componentWillUnmount(){

}
   // COMPONENTDIDMOUNT //
  componentDidMount(){
    // FETCH FOR USER INSTANCES //
    var yy = this.props.day

    var result3 = isPast(new Date(2019, `${this.props.monthNum}`,  `${yy}`))
if(this.props.habit !== undefined){
    var myBox = `${this.props.habit.name}-${this.props.monthNum}-${yy}`
    var box2 = document.getElementById(myBox)
    // debugger
    if (box2 !== null && result3 && box2.style.background == ""){
      box2.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, black 100%)`
   }
      if (result3) {
        this.setState({
          missed: true
        })
        }
      }

//FETCH TO GET USER INSTANCES //
  fetch("http://localhost:3000/api/v1/user_instances",{
    method: 'GET',
    headers: {
    Authorization: `Bearer ${window.sessionStorage.accessToken}`
  }
})
  .then(res=>res.json())
  .then(instance => this.setState({
    instance: instance.user_instance
  })
  )
  var day = this.props.day + 1

  var result = isFuture(new Date(2019,`${this.props.monthNum}`,  `${day}`))
  var date = new Date(2019,`${this.props.monthNum}`,  `${day}`)
  // debugger
  var result3 = isPast(new Date(2019, `${this.props.monthNum}`,  `${day}`))

  // console.log(result3);
// debugger  // END OF FETCH//
this.setState({
  all: this.props.allHabits,
  habit: this.props.habit,
  future: result
})

var resul = endOfToday()
var d = getDate(resul)
var mo = getMonth(resul)
var to = mo + "-" + d

var todays = document.getElementsByName(`${to}`)

// var divs = document.querySelectorAll('div[id$="end"]');

todays.forEach(today => today.style.background = 'yellow')
// console.log(todays);

// console.log(this.props.habit)
// console.log(this.state.habit);

if(this.props.userhabits.length !== 0){
  if(this.props.userhabits[0].habit_id == this.props.habit.id){
    this.setState({
      first:true
    })
  }
}
}
// END OF COMPONENTDIDMOUNT //

// CLICKHANDLER FOR SELECTED DATE //
clickHandler = (event) => {
  this.setState({
    selected: this.props.monthNum + "-" + event.target.innerText
  })
  var popup = document.getElementById("myPopup");
  // popup.classList.toggle(" popuptext show");
}
// END OF CLICKHANDLER //

// CLICKHANDLER FOR POPUP //

myFunction = () => {
  var popup = document.getElementById("myPopup");
  // popup.classList.toggle(" popuptext show");
}

// END OF CLICKHANDLER //

// boxHandler = (event, id, date) => {
//
// // SETS BOX COLOR //
//   let box = document.getElementById(`${event.target.id}`)
//   {this.state.selected ?   box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, white 100%)` :   box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, green 100%)`}
// // END BOX COLOR //
//
// // FOR PATCH FETCH //
//
//   let habit_id = this.state.habit
//   // debugger
//
//   let status = this.state.selected
//
//
// // PATCH FETCH //
//   fetch("http://localhost:3000/api/v1/user_instances", {
//     method: 'POST',
//     headers:{
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//       },
//     body: JSON.stringify({
//       user_habit_id: `${habit_id}`,
//       status:this.state.selected,
//       date:`${date}`
//       }),
//     }).then(res => res.json())
//
// }


// CLICKHANDLER FOR BOX CLICK //
newHandler = (event, i) => {
  // console.log(i);
  this.setState({
    selection: !this.state.selection
  })

// SETS BOX COLOR //
  let box = document.getElementById(`${event.target.id}`)
  if(this.props.selected !== null){
  {this.state.selection ?   box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, white 100%)` :   box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, ${this.props.selected.code} 100%)`}
}
// END BOX COLOR //
// FOR PATCH FETCH //
var day = this.props.day +1
var date = this.props.monthNum + "-" + `${day}`
// console.log(date);
  var habit_id = this.props.habit.id

  // console.log(habit_id);
  var status = this.state.selection
  if(this.props.selected !== null){
if(this.props.selected.code === "Red"){
  fetch("http://localhost:3000/api/v1/user_instances", {
    method: 'POST',
    headers:{
      Authorization: `Bearer ${window.sessionStorage.accessToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'

      },
    body: JSON.stringify({
      user_habit_id: `${habit_id}`,
      status:false,
      date:`${date}`
      }),
    }).then(res => res.json())
      .then(response => this.setState({
        instance: [...this.state.instance, response.user_instance ]
      }))
}
}

  // console.log(date);
  // var data = {user_habit: habit_id, status: status, date: date};
// debugger
// PATCH FETCH //
if(this.props.selected !== null){
if(this.props.selected.code === "Green"){

  fetch("http://localhost:3000/api/v1/user_instances", {
    method: 'POST',
    headers:{
      Authorization: `Bearer ${window.sessionStorage.accessToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'

      },
    body: JSON.stringify({
      user_habit_id: `${habit_id}`,
      status:true,
      date:`${date}`
      }),
    }).then(res => res.json())
      .then(response => console.log(response))
}
}
}

render(){

  // this.state.instance.map(inst => {debugger})

  // debugger
  // GIVES ME TODAYS DATE //
  var resul = endOfToday()
  //GIVES ME DAY //
  var d = getDate(resul)
  // GIVES ME MONTH //
  var mo = getMonth(resul)
  // GIVE ME MO-DAY I.E "1-13"
  var to = mo + "-" + d
  // SAVING THIS BOXS DAY TO A VARIABLE **//
  var yy = this.props.day
  // CHECKING IF THIS BOX IS A PAST DAY //
  var result3 = isPast(new Date(2019, `${this.props.monthNum}`,  `${yy}`))

// var habits = this.state.all
// console.log(this.state.all)
  var day = this.props.day + 1

  // IF USERINSTANCE EXIST SETS COLOR **//
  if(this.props.instance.length !== 0){
// debugger
      let vary = `${this.props.monthNum}-${day}`

      let uIs = this.props.instance
      // debugger
      if(uIs.length !== 0 ){
        // debugger
      let completed = uIs.filter(instance => instance.date === vary)
// console.log(completed);
         if (completed[0] ){
        //       this.props.userhabits.map(habit => {
                // console.log(habit)

          completed.map(complete => {
            // debugger
            // { console.log("Complete:",complete)
            var mine = this.props.allHabits.find(habit => complete.user_habit_id === habit.id)
            if(mine !== undefined){
            var selected = `${mine.name}-${this.props.monthNum}-${day}`
            // debugger
            let box = document.getElementById(selected)
            // debugger
            if (box !== null){
            {complete.status ? box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, green 100%)`: box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, red 100%)`}
          }
}
// console.log(result3)
// debugger
var mine_use = this.state.all.find(habit => complete.user_habit_id === habit.id)
// debugger
let found = this.props.instance.find(inst => inst.user_habit_id === this.props.habit.id)
// console.log(found);
// var myBox = `${this.props.habit.name}-${this.props.monthNum}-${yy}`
// var box2 = document.getElementById(myBox)
// debugger
            // if (this.state.missed  && myBox.style.background == `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, white 100%)` ){
            //   debugger
            //   // let box = document.getElementById(selected)
            //   // box.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, yellow 100%)`
            // }
})

        // }
          // )
}

      }
    }

    // END OF SET COLOR//
  let form = this.props.userhabits.map(habit => <NewHabit new={this.newHandler}day={day}key={habit.id} habit={habit} all={this.props.allHabits} date={this.props.monthNum} clickHandler={this.boxHandler}/>)
  return(
    <div className="dd">
    {this.state.selected? <Popup new={this.newHandler} day={day} date={this.state.selected} userhabits={this.props.userhabits} /> : null}
{this.state.first && mo === this.props.monthNum && day === d ?
  <p className="pclick2" onClick={(event) => {this.clickHandler(event)}}>{day} </p>:
    null}
    {this.state.first && mo === this.props.monthNum && day !== d? <p className="pclick">{day}</p> : null}
    {this.state.first && mo !== this.props.monthNum ? <p className="pclick">{day}</p> : null}

    { this.state.future?
          <div id={`${this.props.habit.name}-${this.props.monthNum}-${day}`} name={`${this.props.monthNum}-${day}`}className={`dayContainer ${this.props.habit.name}`} key={day} /> :
          <div id={`${this.props.habit.name}-${this.props.monthNum}-${day}`} name={`${this.props.monthNum}-${day}`}className={`dayContainer ${this.props.habit.name}`} key={day} onClick={this.newHandler} />
        }


    </div>
  )
}
}
export default BigBox
