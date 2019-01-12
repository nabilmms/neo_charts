import React, { Component } from 'react';
import Chart from 'react-google-charts';

class barCharts extends Component {
    constructor(props){
        super(props);
        console.log(props.neoData);
    }

    render() {
        return (
            <div>
                <Chart/>
            </div>
        );
    }
}

export default barCharts;
