import React, { Component } from 'react';
import BarCharts from './components/barCharts';


class App extends Component {
    constructor(props){
        super(props);
    }

  render() {

    return (
      <div>
        <h1>Hello Botify !</h1>

            <BarCharts/>
      </div>
    );
  }
}

export default App;
