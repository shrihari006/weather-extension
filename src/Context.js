import React, { Component } from 'react';

const WeatherContext = React.createContext();
export const WeatherConsumer = WeatherContext.Consumer;
export { WeatherContext };

class WeatherProvider extends Component {
    constructor(props) {
        super(props);
        this.init();
    }
    state = {
        weatherData: undefined
    }

    async init() {
        const ip = await fetch('http://ip-api.com/json');
        const ipDetails = await ip.json();
        console.log(ipDetails);
        const apiKey = '8eb6e6c99cd310fb293295ce3ad195bb';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ipDetails.city},${ipDetails.country}&appid=${apiKey}&units=metric`
        const apiCall = await fetch(url);
        const response = await apiCall.json();
        this.setState({
            weatherData: response
        });
    }

    render() {
        return (
            <WeatherContext.Provider value={{
                ...this.state,
            }}>
                {this.props.children}
            </WeatherContext.Provider>
        )
    }
}

export default WeatherProvider;