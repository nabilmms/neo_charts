import React, { Component } from 'react';
import neoData from './data/neo_data';
import BarCharts from './components/barCharts';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Botify !</h1>
          <BarCharts neoData={neoData}/>
      </div>
    );
  }
}

export default App;
