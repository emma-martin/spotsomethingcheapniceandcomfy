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

  render() {
    const rooms = this.state.rooms;
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
          {this.state.isLoading ? <Spinner /> : <List rooms={rooms} />}
        </main>
      </div>
    );
  }
}

export default App;
