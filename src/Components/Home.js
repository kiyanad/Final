import React from "react";
import dateFns from "date-fns";
import '../CSS/Login.css';
import redbook from '../img/redbook.png'
import bluebook from '../img/bluebook.png'
import smiley from '../img/smiley.png'

import Login from '../Components/Login'
import SignUp from '../Components/SignUp'



class Home extends React.Component {
  state = {
    login: false,
    signup: false
  }

  boom = () => {
    this.setState({
      login: !this.state.login
    })
    console.log("clicked");
  }

  bam = () => {
    this.setState({
      signup: !this.state.signup
    })
    console.log("clicked");
  }
  render() {
    return(
      <div className="back">
      <div onClick={this.bam} className="lognote" />
      <img  onClick={this.boom}  className ="smiley" src={smiley}/>
      <img  className ="smiley2" src={smiley} onClick={this.bam}/>
      <p className="click" onClick={this.boom} > (Click Here) </p>
      <p className="click2" onClick={this.bam}> (Click Here) </p>

<div className="cellphone" onClick={this.boom} />
      <p className="signup" onClick={this.boom} >Sign Up!!!</p>
      <p className="login" onClick={this.bam}>Log In!!!!</p>

      {this.state.login ? <Login /> : null}
      {this.state.signup ? <SignUp /> : null}

      </div>
    )
  }
}
export default Home
