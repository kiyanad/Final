import React, { Component } from 'react';

class TopHabit extends Component {


componentDidMount(){
  const list = {
    0: { code: "Green", label: "Completed 👍" },
    1: { code: "Red", label: "Not Completed 👎" },
    2: { code: "Black", label: "Missed Day 😞" },
    3: { code: "White", label: "Remove 🚫" },

  };
  let getGradient = colorId =>
  `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, ${colorId} 100%)`;

    let color = document.getElementById(`color-${this.props.choice.num}`)
    let num = this.props.choice.num
        color.style.background = getGradient(list[num].code);

}

  render() {
    return (
      <div>
        <span id={`color-${this.props.choice.num}`} mood={this.props.choice.num} onClick={this.props.clickHandler} />
      </div>
    )

  }
}
export default TopHabit
