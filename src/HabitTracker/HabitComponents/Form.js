import React, { Component } from 'react';
import { WiredButton, WiredInput } from "wired-elements"
import field from "../Images/field.png"


import 'wired-elements';


class Form extends Component {
  render() {
    return (
      <div>
<div className="postIt" />

<wired-input placeholder="Enter name">tyfgjhkl</wired-input>
<img src = {field} />

<form onSubmit= {(e)=>{this.props.newCharFunc(e, this.state)}}>
Name: <input onChange= {this.changeHandler} name = "name" placeholder="Name"  /> <br />

Role: <input onChange= {this.changeHandler} name = "role" placeholder="Role"  /> <br />
House: <input onChange= {this.changeHandler} name = "house" placeholder="House"  /> <br />
Age: <input onChange= {this.changeHandler} name = "age" placeholder="Age"  /> <br />
Image1: <input onChange= {this.changeHandler} name = "image1" placeholder="Image1"  /> <br />
<button> Submit </button>
</form>

    </div>
  )}
}
export default Form
