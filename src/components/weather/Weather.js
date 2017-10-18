import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './../navbar/Navbar';
import './Weather.css'

export default class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            weather: []
        }
    }

    componentDidMount() {

        axios.get(`${process.env.REACT_APP_WEATHER}`)
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
                        <div>{report.date.monthname}, {report.date.day} {report.date.year}</div>
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
            <div className='weatherContainer'>
                <h1>4 Day Weather Forecast:</h1>
                {weather}
            </div>
        )
    }
}