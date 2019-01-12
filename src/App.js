import React, { Component } from 'react';
import BarCharts from './components/barCharts';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {neoData: []};
    }

    componentDidMount(){
        
    }
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
