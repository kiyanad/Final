import React, { Component } from 'react';
import '../CSS/Last.css';

class OneLast extends Component {

  render() {
    if(this.props.all !== undefined){
    var found = this.props.all.filter(last => last.id === this.props.last.id )
    console.log(this.props.i);
}
let gotIt = this.props.uInst.filter(inst => inst.user_last_id === this.props.last.id)
// console.log(gotIt[0].id);
return(
      <div>
      <div class="flex-container">

      <div className="num"><h2>1</h2></div>
      <div className="boxes"><h5>{this.props.all !== undefined ? found[0].name : "Change ToothBrushes"}</h5></div>
      <div className="inputs"><h4 className="input-1">{gotIt[0] !== undefined ? gotIt[0].date : null}</h4></div>
      <div className="inputs"><h4 className="input-2">{gotIt[1] !== undefined ? gotIt[1].date : null}</h4></div>
      <div className="inputs"><h4 className="input-3">{gotIt[2] !== undefined ? gotIt[2].date : null}</h4></div>
      <div className="inputs"><h4 className="input-4">{gotIt[3] !== undefined ? gotIt[3].date : null}</h4></div>
      <br />
      </div>
      </div>
  )
}
}
    export default OneLast
