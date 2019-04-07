import React, { Component } from 'react';
import './App.scss';
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
    const dataRooms = localStorage.getItem('dataRooms');
    if(!dataRooms){
      console.log('nodata');
      this.fetchRooms();
    } else {
      console.log('sidata');
      this.setState({
        rooms: JSON.parse(dataRooms),
        isLoading: false
      })
    }
  }


  fetchRooms = () => {
    getRooms()
    .then(data => {
      console.log('fetching');
      this.setState({
        rooms: data.homecards
      })
      this.setLocalStorage(data.homecards);
    })
    .catch(err => console.log(err));
  }

  setLocalStorage(data){
    localStorage.setItem('dataRooms', JSON.stringify(data));
  }

  getUniqueIdsFromImages = (str) => {
    const choppedStr = str.split("/");
    return choppedStr[choppedStr.length -1].slice(0, -4);
  }

  render() {
    const rooms = this.state.rooms;
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header__title">
            <h1>spotaroom</h1>
          </div>
        </header>
        <main>
          <ul className="app__list">
          {rooms.map(item => {
            return (
              <li className="app__list-item" key={this.getUniqueIdsFromImages(item.photoUrls.homecardHidpi)}>
                <div className="room__container">
                  <div className="room-card">
                    <img src={item.photoUrls.homecardHidpi} alt={item.title} className="room-card__image"/>
                    <div className="room-card__text">
                      {item.title}
                    </div>
                    <div className="room-card__price">
                      {`${item.pricePerMonth}${item.currencySymbol}`}
                    </div>
                    <button className="room-card__btn">Book now!</button>
                  </div>
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
