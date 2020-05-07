import Nav from './Components/NavBar';
import Home from './Components/Homepage';
import React, { Component } from 'react';


class App extends Component {
  state = {}
  render() {
    return (<div>
      < Nav />
      < Home />
    </div>);
  }
}

export default App;

