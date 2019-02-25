import React from 'react'
import '../App.css';
import PigCard from "./PigCard"
import hogs from "../porkers_data"

export default class PigList extends React.Component {

  state = {
    hogs,
    greasedSort: false
  }

  sortByName(event){
    const hogsSorted = this.state.hogs.sort((a, b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    });
    this.setState({
      hogs: hogsSorted
    })
  }

  sortByWeight(event){
    const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    const hogsSorted = this.state.hogs.sort((a, b) => {
      if(a[weight] < b[weight]) { return -1; }
      if(a[weight] > b[weight]) { return 1; }
      return 0;
    });
    this.setState({
      hogs: hogsSorted
    })
  }

  showGreased(event){
    const hogsSorted = this.state.hogs.filter((hog) => {
      return hog.greased === true
    });
    this.setState({
      hogs: hogsSorted
    })
  }

  showAll(event){
    this.setState({
      hogs: hogs
    })
  }

  render(){
    const listOfPigs = this.state.hogs.map((hog, index) => <PigCard hog={hog} key={index}/>)
    return(
      <div>
        <button onClick={this.sortByName.bind(this)}>Sort by Name</button>
        <button onClick={this.sortByWeight.bind(this)}>Sort by Weight</button>
        <button onClick={this.showGreased.bind(this)}>Show Greased</button><p></p>
        <button onClick={this.showAll.bind(this)}>Show All</button><p></p>
        <div className="ui grid container">
          {listOfPigs}
        </div>
      </div>
    )
  }
}
