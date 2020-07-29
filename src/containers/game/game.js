import React, {Component} from "react";
import ioClient from 'socket.io-client';

const connection = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : undefined;

class Game extends Component {

  constructor(props) {
    super(props);
    this.name = props.name;
    this.socket = null;
    this.state = {
      socket: null,
      players: null,
      end: null,
    };
    this.listenToMessages();
    console.log("Hello from Game Constructor")
  }

  listenToMessages() {
    this.socket = ioClient(connection);
    this.socket.on('connect', () => {
      this.socket.emit('name', this.name);
      this.setState({socket: this.socket});


      this.socket.on('disconnect', () => {
        this.setState({socket: null});
      });
    })
  }

  render() {
    return (
      <div>
        Game
      </div>
    );
  }
}

export default Game;
