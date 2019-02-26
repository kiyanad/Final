import React, { Component } from 'react';
import '../CSS/Login.css';

class Login extends Component {
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
<h1 className="sign"> SignUp </h1>
<form className="signform" onSubmit= {(e)=>{this.props.newCharFunc(e, this.state)}}>
Name: <input placeholder="Name"  /> <br />

Email: <input  name = "email" placeholder="Email"  /> <br />
UserName: <input  name = "username" placeholder="UserName"  /> <br />
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
export default Login
