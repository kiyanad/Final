import React, { Component } from 'react';
import '../CSS/Login.css';

class SignUp extends Component {
  render () {
    return(
      <div>
      <div class="loginbook">
  <span class="loginpage turn"></span>
  <span class="loginpage turn"></span>
  <span class="loginpage turn"></span>
  <span class="loginpage turn"></span>
  <span class="loginpage turn"></span>
  <span class="loginpage turn">
<h1 className="sign"> Login </h1>
<form className="logform" onSubmit= {(e)=>{this.props.newCharFunc(e, this.state)}}>
UserName: <input placeholder="UserName"  /> <br />
Password: <input  name = "password" placeholder="Password"  /> <br />


<button> Submit </button>
</form>


  </span>
  <span class="logincover">
  </span>
  <span class="loginpage">

  </span>
  <span class="logincover turn">
  <img className="loginpic" src= "https://spng.pngfly.com/20180524/upc/kisspng-political-correctness-language-the-martial-arts-pl-bullet-journal-5b06b138e1f6f2.0109652115271652409256.jpg" />

  </span>
</div>
</div>
    )
  }
}
export default SignUp
