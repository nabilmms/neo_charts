import React, { Component } from 'react';
import BarCharts from './components/barCharts';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {neoData : {}}
    }

  render() {

    return (
      <div>
        <h1>Hello Botify !</h1>
            <BarCharts neoData={this.state.neoData}/>
      </div>
    );
  }
}

export default App;
