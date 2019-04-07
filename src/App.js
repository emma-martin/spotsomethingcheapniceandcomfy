import React, { Component } from 'react';
import './App.scss';
import { getRooms } from "./services/api";
import List from './components/List';

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
          <List rooms={rooms}/>
        </main>
      </div>
    );
  }
}

export default App;
