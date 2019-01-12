import React, { Component } from 'react';
import ReactGoogleSheets from 'react-google-sheets';


class DataComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sheetLoaded: false,
        }
    }
    render() {
        return (
            <ReactGoogleSheets
                clientId='Hello'
                apiKey='World'
                spreadsheetId='!'
                afterLoading={() => this.setState({sheetLoaded: true})}
            >
                {this.state.sheetLoaded ?
                    <div>
                        {/* Access Data */}

                        {/* Update Data */}
                        <button onClick={() => {
                            this.props.updateCell(
                                'sheet02', // sheetName
                                'E', // column
                                13, // row
                                'Apple', // value
                                null, // successCallback
                                (error) => {
                                    console.log('error', error)
                                } // errorCallback
                            );
                        }}>update cell!</button>
                    </div>
                    :
                    'loading...'
                }
            </ReactGoogleSheets>
        )
    }
}

export default DataComponent;