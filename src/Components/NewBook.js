import React, { Component } from 'react';
import "../CSS/NewBook.css"
import $ from 'jquery'

class NewBook extends Component {
  state ={
    title: "",
    shortitle: "",
    author: ""
  }
  componentDidMount(){

    $("input#title").keyup(function(){
      $('.newbook .spine').html(this.value);
    });
    $("input#title2").keyup(function(){
      $('.cover .newbooktitle').html(this.value);
    });
    $("input#author").keyup(function(){
      $('.cover .newbookauthor').html(this.value);
    });

  }

  clickHandler = (e) => {
    e.preventDefault()

this.setState ({
  title: e.target.title.value,
  shorttitle: e.target.title2.value,
  author: e.target.author.value

})

// PATCH FETCH //
  fetch("http://localhost:3000/api/v1/user_books", {
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
    body: JSON.stringify({
      user_id: 3,
      name:e.target.title.value,
      shortname:e.target.title2.value,
      author: e.target.author.value,
      status: false
      }),
    }).then(res => res.json())
      .then(response => console.log(response))
}


//END OF CLICKHANDLER //
// debugger


  render(){

    return(
      <div>
        <div className="wrapper">
          <h2>NEXT ON THE LIST...</h2>
          <form onSubmit= {(e)=> {this.clickHandler(e)}}>
          Short Title:<input type="text" id="title" placeholder="Short Book Title" /><br />
          Full Title:<input type="text" id="title2" placeholder="Book Title" /> <br />
          Author:<input type="text" id="author" placeholder="Book Author" /> <br />
          <button > Submit </button>
          </form>

        </div>

        <div className="newbook">
          <div className="spine" data-text="Book Title">BOOK TITLE</div>
          <div className="cover">
          <img className="newImg" src= "https://www.maplewoodlibrary.org/main/uploads/lets-code-480x309.png" />
            <div className="newbooktitle">
              FULL TITLE
              </div>
            <div className="newbookauthor">
            BOOK AUTHOR
            </div>
          </div>
        </div>
      </div>
    )
  }}

export default NewBook
