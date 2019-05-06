import React, { Component } from "react";
import "./App.scss";
import { getRooms } from "./services/api";
import List from "./components/List";
import { Spinner } from "./components/Spinner";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      query: "",
      isLoading: true
    };
  }

  componentDidMount() {
    const dataRooms = localStorage.getItem("dataRooms");
    !dataRooms ?
    this.fetchRooms() :
    this.setState({
      rooms: JSON.parse(dataRooms),
      isLoading: false
    });
  }

  fetchRooms = () => {
    getRooms()
      .then(data => {
        this.setState({
          rooms: data.homecards,
          isLoading: false
        });
        this.setLocalStorage(data.homecards);
      })
      .catch(err => console.log(err));
  };

  setLocalStorage(data) {
    localStorage.setItem("dataRooms", JSON.stringify(data));
  }

  // filterbyUserQuery: 1st, add empty object query to state. 
  // Create an input element
  // <input value={query} type="text" onChange={getUserQuery} />
  // 2nd, value as the user query. Generate and 
  // pass function that sets the user query as the state.  
  // 3rd, filter by userquery: 
  // returning a filtered array, that its criteria filter is 
  // if the item in the array (rooms) contains the user query (query)
  // this is the array that goes into the List map


  getUserQuery = (event) => {
    const userQuery = event.currentTarget.value;
    this.setState({
      query: userQuery
    })
  }

  filterByUserQuery = () =>{
    const {rooms, query} = this.state;
    const filteredRooms = rooms.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()));
    return filteredRooms;
  }


// orderByPrice: 1st, I create a select option list.
// Select onChange will receive the method
// options will have a matching value
// Method will have an event as a parameter, cause target.value as criteria
//then pass it through props
  orderByPrice = (event) => {
    const {rooms} = this.state;
    const sortBy = event.currentTarget.value;
    this.setState({
      rooms: rooms.sort((a, b) => {
        return sortBy === "asc" ?
          a.pricePerMonth - b.pricePerMonth :
          sortBy === "desc" ?
          b.pricePerMonth - a.pricePerMonth :
          rooms;
      })
    })
  }




  render() {
    const {query} = this.state;
    const roomsFilteredByUserQuery = this.filterByUserQuery();
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header__title">
            <h1>
              <a href="./">spotaroom</a>
            </h1>
          </div>
          <nav className="App-header__nav">
            <ul className="App-header__nav-list">
              <li>
                <a href="./">The company</a>
              </li>
              <li>
                <a href="./">How we work</a>
              </li>
              <li>
                <a href="./">Contact us</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {this.state.isLoading ?
            <Spinner /> :
            <List 
              rooms={roomsFilteredByUserQuery} 
              query = {query}
              getUserQuery={this.getUserQuery} 
              orderByPrice={this.orderByPrice}
            />
          }
        </main>
      </div>
    );
  }
}

export default App;
