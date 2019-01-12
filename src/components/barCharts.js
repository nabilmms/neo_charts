import React, { Component } from 'react';
import Chart from 'react-google-charts';

class BarCharts extends Component {
    constructor(props) {
        super(props);
            //verifier la bonne réception de l'object NEO data
        console.log(props.neoData);
            // neoDataObject :Assigner un l'object NEO (props du parent) à un state en ciblant 'near_earth_objects'
            // neoDataDisplay : Créer un state qui va etre utiliser comme une base avec par default les titres du graph
        this.state = {
            neoDataObject: props.neoData.near_earth_objects,
            neoDataDisplay: [['NEO Name', 'Min Estimated Diameter (KMS)', 'Max Estimated Diameter'],]
        };
    }

    render() {

        //Ajouter les valeurs souhaiter dans le state neoDataDisplay avant de les afficher

        let neoDataDisplay  = this.state.neoDataDisplay;
        this.state.neoDataObject.map((obj) =>
            neoDataDisplay.push([obj.name , obj.estimated_diameter.kilometers.estimated_diameter_min,
                                            obj.estimated_diameter.kilometers.estimated_diameter_max])
        );

        return (
            <div>
                <Chart
                    width={'700px'}
                    height={'500px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={this.state.neoDataDisplay}
                    options={{
                        title: 'Near Earth Objects estimated diameter',
                        chartArea: { width: '50%' },
                        hAxis: {
                            title: 'Diametre (KM)',
                            minValue: 0,
                        },
                        vAxis: {
                            title: 'NEO Name',
                        },
                    }}
                />
            </div>
        );
    }
}

export default BarCharts;
