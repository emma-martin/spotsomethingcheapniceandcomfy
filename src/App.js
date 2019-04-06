import React, { Component } from 'react';
import './App.css';
import { getRooms } from "./services/api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      isLoading: true
    };
  }

  componentDidMount(){
    this.fetchRooms();
    this.setState({isLoading: false});
  }


  fetchRooms = () => {
    getRooms()
    .then(data => {
      this.setState({
        rooms: data.homecards
      })
    })
    .catch(err => console.log(err));
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>spotaroom</h1>
        </header>
        <main>
          <ul className="app__list">
          {this.state.rooms.map(item => {
            return (
              <li className="app__list-item" key={1}>
                <div className="card-room">
                  <img src={item.photoUrls.homecardHidpi} alt={item.title} className="card-room__image"/>
                  <div className="room__text">
                    {item.title} 
                  </div>
                  <div className="room__price">
                    {`${item.pricePerMonth}${item.currencySymbol}`}
                  </div>
                  <button className="room__btn">Book now!</button>
                </div>
              </li>
            )
          })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
