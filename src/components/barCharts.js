import React, { Component } from 'react';
import Chart from 'react-google-charts';

class BarCharts extends Component {
    constructor(props) {

        super(props);
            // neoDataDisplay : Créer un state qui va etre utiliser comme une base avec par default les titres du graph
        this.state = {
            neoDataDisplay: [['NEO Name', 'Min Estimated Diameter (KMS)', 'Max Estimated Diameter'],]
        };

    }

    //Appel a l'api qui nous return un object (promise)
    callApi(){
        return fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=h2vuNpgOwi4P3bqUpqys0ANkIuHL1cebMn0jeWE5")
            .then(res => res.json())
            .then(
                (result) => {
                    return result
                },

            );
    }

    //Traite la promise et boucle sur near_earth_objects afin d'ajouter les valeurs de l'api à neoDataDisplay

    componentDidMount(){
        let neoDataDisplay  = this.state.neoDataDisplay;

        this.callApi().then(result =>
            result.near_earth_objects.map((obj) =>
                neoDataDisplay.push([obj.name , obj.estimated_diameter.kilometers.estimated_diameter_min,
                    obj.estimated_diameter.kilometers.estimated_diameter_max])
            )
        );
    }

    render() {

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
