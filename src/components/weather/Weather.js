import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './../navbar/Navbar';

export default class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            weather: []
        }
    }

    componentDidMount() {

        axios.get('http://api.wunderground.com/api/b74ef342fd46d9ef/forecast/q/AZ/Phoenix.json')
        .then(res => {
            this.setState({
            weather: res.data.forecast.simpleforecast.forecastday
          })
        })

    }


    render(){
        const weather = this.state.weather.map((report, i ) => {
            return (
            <div key={i}>
                <div>
                    <div>
                        <div>{report.date.weekday}</div>
                        <div>{report.date.pretty}</div>
                    </div>
                    <div>
                        <div><img src={report.icon_url}/></div>
                        <div>{report.conditions}</div>
                    </div>
                    <div>
                        <div>High Temp: {report.high.fahrenheit} °F</div>
                        <div>Low Temp: {report.low.fahrenheit} °F</div>
                        <br/>
                    </div>
                </div>
            </div>
            )
          })
        
        return(
            <div>
                <Navbar />
                <h1>Weather</h1>
                {weather}
            </div>
        )
    }
}