import React from 'react'
import '../App.css';

export default class PigCard extends React.Component {

  state={
    clicked: false
  }

  imgClicked(event){
    this.setState({
      clicked: !this.state.clicked
    })
  }



  render(){

    let display = this.state.clicked ? "block" : "none";

    return(
      <div className="ui eight wide column">
        <img onClick={this.imgClicked.bind(this)} alt="" src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(" ").join("_")}.jpg`)} />
        <h1>{this.props.hog.name}</h1>

        <div style={{display: `${display}`}}>
          <h2>{this.props.hog.specialty}</h2>
          <h2>{this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h2>
          <h2>is {!this.props.hog.greased && "not"} Greased</h2>
          <h2>{this.props.hog['highest medal achieved']}</h2>
        </div>
      </div>
    )
  }
}
