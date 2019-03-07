import React, { Component } from 'react';
import '../CSS/Login.css';
import logo from '../img/logo_transparent.png'
import { Redirect } from 'react-router';



class Login extends Component {
  state = {
  name: "",
  email: "",
  username: "",
  password: "",
  loggedin: false
}

changeHandler = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

signIn = (e) =>{
  e.preventDefault()
  fetch("http://localhost:3000/api/v1/users/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          user: {
              name: e.target.name.value,
              email: e.target.email.value,
              username: e.target.username.value,
              password: e.target.password.value
            }
      }

      )
  }).then(r => r.json())
    .then(obj=>{
      window.sessionStorage.accessToken = obj.jwt
      console.log(obj.jwt)}).catch(err=>console.log(err))
  console.log(window.sessionStorage.valueOf())

  this.setState({
    loggedin: true
  })
}
  render () {
    if (window.sessionStorage.valueOf().length !== 0) {
        return <Redirect to="/" push/>
    }
    if(this.state.loggedin){
     return <Redirect to="/" push/>
    }
    return(
      <div>
      <div class="loginbook">
  <span class="loginpage turn"></span>
  <span class="loginpage turn"></span>
  <span class="loginpage turn"></span>
  <span class="loginpage turn"></span>
  <span class="loginpage turn"></span>
  <span class="loginpage turn">
<form className="signform" onSubmit= {(e)=>{this.signIn(e)}}>
    <p className="namep">Name:</p> <input className="one-in" onChange= {this.changeHandler} name = "name" placeholder="Name" value={this.state.name} /> <br />
    <p className="mailput">Email: </p> <input className="two-in" onChange= {this.changeHandler} name = "email" placeholder="Email" value={this.state.email} /> <br />

    <p className="userput">UserName:</p> <input className="three-in" onChange= {this.changeHandler} name = "username" placeholder="UserName" value={this.state.username} /> <br />
  <p className="passput">Password:</p> <input className="four-in" onChange= {this.changeHandler} name = "password" placeholder="Password" value={this.state.password} /> <br />

<button className="button2"> Submit </button>
</form>


  </span>
  <span class="logincover">
  </span>
  <span class="loginpage">
  <h1 className="sign"> SignUp </h1>
  <img className="loglogo2" src={logo} />

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
