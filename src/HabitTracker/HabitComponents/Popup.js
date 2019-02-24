import React, { Component } from 'react';
import '../HabitCss/HabitTracker.css';
import NewHabit from "./NewHabit"


class Popup extends Component {
  state = {
    done: true
  }
  nun = (e) => {
    // e.preventDefault()
    this.setState({
      done: !this.state.done
    })
  }
render(){
  console.log(this.state.done);
  let form = this.props.userhabits.map(habit => <NewHabit day={this.props.day}key={habit.id} habit={habit} all={this.props.allHabits} date={this.props.date} clickHandler={this.boxHandler}/>)
  return(
    <div className="popup">
        <span className="popuptext show" id="myPopup">
        <form onSubmit= {(e)=>{this.nun(e)}}>
        {form}
          <button>
            Submit
          </button>
        </form>
      </span>
    </div>
  )
}

}
export default Popup
