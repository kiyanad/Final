import React, { Component } from 'react';
import '../CSS/Login.css';
import logo from '../img/logo_transparent.png'
import { Redirect } from 'react-router';




class SignUp extends Component {
  state={
    loggedin: false
  }

  login = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: {
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
})  }

  render () {
    // const redirectToReferrer = this.state.redirectToReferrer;
if (window.sessionStorage.valueOf().length !== 0) {
    return <Redirect to="/" push/>
}
if(this.state.loggedin){
 return <Redirect to="/" push/>
}
    return(
      <div>
      <div className="loginbook">
  <span className="loginpage turn"></span>
  <span className="loginpage turn"></span>
  <span className="loginpage turn"></span>
  <span className="loginpage turn"></span>
  <span className="loginpage turn"></span>
  <span className="loginpage turn">
<form className="logform" onSubmit= {(e)=>{this.login(e)}} >
<p className="use">UserName:</p> <input className="useput2"name = "username" placeholder="UserName"  /> <br />
<p className="pass">Password:</p> <input className="mailput2" name = "password" placeholder="Password"  /> <br />


<button className="button3"> Submit </button>
</form>


  </span>
  <span class="logincover">
  </span>
  <span class="loginpage">
  <h1 className="sign"> Login </h1>
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
export default SignUp
