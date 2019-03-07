import React from "react";
import '../CSS/Login.css';
import smiley from '../img/smiley.png'
import logo from '../img/logo_transparent.png'
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
      <div className="wrapper1">
      <img className="loglogo" src={logo} />
      <div className="cellphone" onClick={this.boom}>
      <p className="signup" onClick={this.boom} >Sign Up!!!</p>
      <img  onClick={this.boom}  className ="smiley" src={smiley}/>
      <p className="click" onClick={this.boom} > (Click Here) </p>
      </div>
      <div onClick={this.bam} className="lognote">
      <p className="login" onClick={this.bam}>Log In!!!!</p>
      <p className="click2" onClick={this.bam}> (Click Here) </p>
      <img  className ="smiley2" src={smiley} onClick={this.bam}/>


      </div>


      {this.state.login ? <Login /> : null}
      {this.state.signup ? <SignUp /> : null}

      </div>
      </div>
    )
  }
}
export default Home
