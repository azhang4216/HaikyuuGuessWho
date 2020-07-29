import React, {Component} from 'react';
import './App.css';
import Game from "./containers/game";
import CreateRoom from "./containers/create-room/create-room";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { play: true }
  }

  render() {
    return (
      <div>
        { this.state.play ?
          <Game name={this.name} /> :
          <CreateRoom/>
        }
      </div>
    );
  }
}

export default App;
