import React from "react";
import dateFns from "date-fns";
import '../CSS/Book.css';


class Book extends React.Component {
  state = {
    userbooks: [],
    name: "Harry Potter",
    status: false
  }

  componentDidMount(){
    // FETCH TO GET LIST OF USER HABITS //
    fetch("http://localhost:3000/api/v1/user_books")
    .then(res=>res.json())
    .then(books => this.setState({
      userbooks: books.user_book
    })
    )
    if(this.state.userbooks[0]){
      debugger
    }
    // END OF FETCH //
// document.querySelector(".title-1").innerText = this.state.name
let book = document.querySelector(".book-1")

// SETS BOX COLOR //
  {this.state.status ?   book.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, green 100%)` :   book.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, white 100%)`}
// END BOX COLOR //

  }

clickHandler = () => {
  debugger
}

  render() {
    //IF STATEMENTS TO SET BOOK TITLES AND COLORS //
    // ********* THERE IS PROBABLY A MORE SIMPLIFIED WAY TO DO THIS. I WILL REVISIT **********//
    if(this.state.userbooks[0]){
      document.querySelector(".title-1").innerText = this.state.userbooks[0].shortname
      let book = document.querySelector(".book-1")
      let label1 = document.querySelector(".label-1")
      let label2 = document.querySelector(".label-2")
      if(this.state.userbooks[0].status === true) {
        book.style.background = 'url("https://cdn.shoplightspeed.com/shops/607800/files/1542096/japan-book-cloth-green-17-x-26-2-sheets-acid-free.jpg")'
        label1.style.background = 'url("https://us.123rf.com/450wm/golfmhee/golfmhee1806/golfmhee180600034/103752878-abstract-shiny-smooth-foil-metal-gold-color-background-bright-vintage-brass-plate-chrome-element-tex.jpg?ver=6")'
        label2.style.background = 'url("https://us.123rf.com/450wm/golfmhee/golfmhee1806/golfmhee180600034/103752878-abstract-shiny-smooth-foil-metal-gold-color-background-bright-vintage-brass-plate-chrome-element-tex.jpg?ver=6")'

      }
    }

    if(this.state.userbooks[1]){
      document.querySelector(".title-2").innerText = this.state.userbooks[1].shortname
      let book = document.querySelector(".book-2")
      let label = document.querySelector(".label-0")
      if(this.state.userbooks[1].status === false) {
        book.style.background = 'url("http://farm5.static.flickr.com/4124/5029327924_91a3bb0ee2.jpg")'
        label.style.background = 'url("https://us.123rf.com/450wm/golfmhee/golfmhee1806/golfmhee180600034/103752878-abstract-shiny-smooth-foil-metal-gold-color-background-bright-vintage-brass-plate-chrome-element-tex.jpg?ver=6")'

      }
    }

    if(this.state.userbooks[2]){
      document.querySelector(".title-3").innerText = this.state.userbooks[2].shortname
      let book = document.querySelector(".book-3")
      let label = document.querySelector(".label-3-a")
      let label2 = document.querySelector(".label-3")
      if(this.state.userbooks[2].status === false) {
        book.style.background = 'url("https://us.123rf.com/450wm/alexeysmirnov/alexeysmirnov1507/alexeysmirnov150700017/42347612-blauer-bucheinband-nahtlosen-textur-hintergrund.jpg?ver=6")'
        label.style.background = 'url("https://us.123rf.com/450wm/golfmhee/golfmhee1806/golfmhee180600034/103752878-abstract-shiny-smooth-foil-metal-gold-color-background-bright-vintage-brass-plate-chrome-element-tex.jpg?ver=6")'
        label2.style.background = 'url("https://us.123rf.com/450wm/golfmhee/golfmhee1806/golfmhee180600034/103752878-abstract-shiny-smooth-foil-metal-gold-color-background-bright-vintage-brass-plate-chrome-element-tex.jpg?ver=6")'

      }
    }

    if(this.state.userbooks[3]){
      document.querySelector(".title-4").innerText = this.state.userbooks[4].shortname
      let book = document.querySelector(".book-4")
      let label = document.querySelector(".label-4")
      let label2 = document.querySelector(".label-5")
      if(this.state.userbooks[3].status === true) {
        book.style.background = 'url("https://i.pinimg.com/originals/93/fe/f1/93fef1c0a814078910f421291fe74b3e.jpg")'
        label.style.background = 'url("https://us.123rf.com/450wm/golfmhee/golfmhee1806/golfmhee180600034/103752878-abstract-shiny-smooth-foil-metal-gold-color-background-bright-vintage-brass-plate-chrome-element-tex.jpg?ver=6")'
        label2.style.background = 'url("https://us.123rf.com/450wm/golfmhee/golfmhee1806/golfmhee180600034/103752878-abstract-shiny-smooth-foil-metal-gold-color-background-bright-vintage-brass-plate-chrome-element-tex.jpg?ver=6")'

      }
      // {this.state.userbooks[4].status ?
      //   book.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, green 100%)` :
      //   book.style.background = `radial-gradient(ellipse at center, rgba(255,255,255,.1) -95%, white 100%)`
      // 'url("https://image.freepik.com/free-photo/black-leather-texture-texture-background-leather-texture-black-texture-cloth-texture_1627-1792.jpg")'
      // }
    }

    if(this.state.userbooks[4]){
      document.querySelector(".title-5").innerText = this.state.userbooks[4].shortname
      let book = document.querySelector(".book-5")
      let label = document.querySelector(".label-6")
      if(this.state.userbooks[4].status === true) {
        book.style.background = 'url("https://texturex.com/wp-content/uploads/2018/03/leather-texture-brown-uneven-pattern-smoth-old-fabric-photo-5.jpg")'
        label.style.background = 'url("https://us.123rf.com/450wm/golfmhee/golfmhee1806/golfmhee180600034/103752878-abstract-shiny-smooth-foil-metal-gold-color-background-bright-vintage-brass-plate-chrome-element-tex.jpg?ver=6")'

      }


    }

    if(this.state.userbooks[5]){
      document.querySelector(".title-6").innerText = this.state.userbooks[5].shortname
      let book = document.querySelector(".book-6")
      let label = document.querySelector(".label-7")
      if(this.state.userbooks[4].status === true) {
        book.style.background = 'url("https://thumbs.dreamstime.com/t/blue-textile-book-cover-texture-fabric-65964644.jpg")'
        label.style.background = 'url("https://us.123rf.com/450wm/golfmhee/golfmhee1806/golfmhee180600034/103752878-abstract-shiny-smooth-foil-metal-gold-color-background-bright-vintage-brass-plate-chrome-element-tex.jpg?ver=6")'

      }
    }

    if(this.state.userbooks[6]){
      document.querySelector(".title-7").innerText = this.state.userbooks[6].shortname
      let book = document.querySelector(".book-7")
      let label = document.querySelector(".label-8")

      if(this.state.userbooks[6].status){
        book.style.background = 'url("https://previews.123rf.com/images/roystudio/roystudio1301/roystudio130100111/17454427-old-white-wall-texture-grunge-background.jpg")'
        label.style.background = 'url("https://us.123rf.com/450wm/golfmhee/golfmhee1806/golfmhee180600034/103752878-abstract-shiny-smooth-foil-metal-gold-color-background-bright-vintage-brass-plate-chrome-element-tex.jpg?ver=6")'

      }
    }

    if(this.state.userbooks[7]){
      document.querySelector(".title-8").innerText = this.state.userbooks[7].shortname
      let book = document.querySelector(".book-8")
      if(this.state.userbooks[7].status) {
        book.style.background = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLVFXZsIeuOa_kMjaTJPg3Y1Rfopg5_EqjHFbU_19uu_RI3Hl4")'
      }
    }

    if(this.state.userbooks[8]){
      document.querySelector(".title-9").innerText = this.state.userbooks[8].shortname
      let book = document.querySelector(".book-9")
      let label = document.querySelector(".label-10")

      if(this.state.userbooks[8].status){
        book.style.background = `url("http://www.tokkoro.com/thumbs/2117603-yellow-book-cover-texture.jpg")`
        label.style.background = 'url("https://us.123rf.com/450wm/golfmhee/golfmhee1806/golfmhee180600034/103752878-abstract-shiny-smooth-foil-metal-gold-color-background-bright-vintage-brass-plate-chrome-element-tex.jpg?ver=6")'

      }
    }

    if(this.state.userbooks[9]){
      document.querySelector(".title-10").innerText = this.state.userbooks[9].shortname
      let book = document.querySelector(".book-10")
      if(this.state.userbooks[9].status){
        book.style.background = 'url("https://thumbs.dreamstime.com/t/purple-color-canvas-pattern-violet-abstract-background-texture-design-88554162.jpg")'
      }
    }

    if(this.state.userbooks[10]){
      document.querySelector(".title-11").innerText = this.state.userbooks[10].shortname
      let book = document.querySelector(".book-11")
      if(this.state.userbooks[10].status){
        book.style.background = 'url("https://image.freepik.com/free-photo/black-leather-texture-texture-background-leather-texture-black-texture-cloth-texture_1627-1792.jpg")'
       }
    }

    if(this.state.userbooks[12]){
      document.querySelector(".title-12").innerText = this.state.userbooks[12].shortname
      let book = document.querySelector(".book-12")
      if(this.state.userbooks[12].status){
        book.style.background =  `url("https://21202672d9636a0113d2-cb731e64799a4e011b6a04b00ef66067.ssl.cf1.rackcdn.com/Brewster/330463.jpg")`
      }
    }

    console.log(this.state);
    return(
<div>
<p className="title"> Need to Reads...</p>

<div class="realshelf" />

  <div class="room">
    <div class="shelf">

      <div class="shadow"></div>
      <div class="bookend left"></div>
      <div class="books">
        <div className="book-1"  onClick={this.clickHandler}>
          <div className="label-1" />
          <div className="label-2" />
          <p className="title-1">
          </p>
        </div>
        <div className="book-2" onClick={this.clickHandler}>
          <div className="label-0" />
          <p className="title-2">
            Ayden Hortons Book
          </p>
      </div>
      <div className="book-3" onClick={this.clickHandler}>
        <div className="label-3" />
        <div className="label-3-a" />
        <p className="title-3">
          Ayden Hortons Book
        </p>
      </div>
      <div className="book-4" onClick={this.clickHandler}>
      <div className="label-4" />
      <div className="label-5" />
        <p className="title-4">
          Ayden Hortons Book
        </p>
      </div>
      <div className="book-11" onClick={this.clickHandler}>
        <p className="title-11">
          Ayden Hortons Book
        </p>
      </div>
      <div className="book-5" onClick={this.clickHandler}>
        <div className="label-6" />
        <p className="title-5">
        Ayden Hortons Book
        </p>

      </div>
      <div className="book-6" onClick={this.clickHandler}>
        <div className="label-7" />
        <p className="title-6">
          Ayden Hortons Book
        </p>
      </div>
        <div className="book-10" onClick={this.clickHandler}>
        <p className="title-10">
          Ayden Hortons Book
        </p>
      </div>
      <div className="book-7" onClick={this.clickHandler}>
        <div className="label-8" />
        <p className="title-7">
          Ayden Hortons Book
        </p>
      </div>
      <div className="book-8" onClick={this.clickHandler}>
        <p className="title-8">
          Ayden Hortons Book
        </p>
      </div>
      <div className="book-9" onClick={this.clickHandler}>
        <div className="label-10" />
          <p className="title-9">
            Ayden Hortons Book
          </p>
      </div>
        <div className="book-12" onClick={this.clickHandler}>
          <p className="title-12">
            Ayden Hortons Book
          </p>
        </div>
      </div>
      <div class="bookend right"></div>
    </div>
  </div>
</div>
    )
  }
}
export default Book
