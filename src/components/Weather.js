import React, { useContext, Fragment } from 'react';
import { withRouter } from 'react-router-dom'

import { getName } from 'country-list';

import { WeatherContext } from '../Context';

import '../styles/weather.css';

const img = `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/1920/1080`;

const Weather = () => {
    const weatherState = useContext(WeatherContext);
    const { weatherData } = weatherState;

    console.log('weatherData: ', weatherData);
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const date = new Date();
    const currentDay = days[date.getDay() - 1];
    const currentDate = date.getDate();
    const temperature = weatherData && weatherData.main.temp;
    const city = weatherData && weatherData.name;
    const country = weatherData && getName(weatherData.sys.country);
    const Time = new Date();
    const currentTime = Time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const weatherType = weatherData && weatherData.weather[0].description;
    const sunrise = weatherData && new Date(weatherData.sys.sunrise * 1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const sunset = weatherData && new Date(weatherData.sys.sunset * 1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    return (
        <Fragment>
            <div style={{ backgroundImage: `url(${img})`, height: '100vh', width: '100%' }} />
            <div className={'overlay'}>
                <div className={'column-1'}>
                    <h4>{currentTime}</h4>
                    <h3>{`${currentDay}, ${currentDate}`}</h3>
                    <h2><i className="fas fa-cloud-moon" /></h2>
                    <span className={'description'}>{weatherType}</span>
                    <h1>
                        <i className="fas fa-thermometer-full"></i>
                        {`${temperature}`}&deg;&nbsp;C
                    </h1>
                    <p>
                        {`${city}, ${country}`}
                    </p>
                    <ul className={'list-items'}>
                        <li>{"Sunrise:"} <span>{sunrise}</span></li>
                        <li>{"Sunset:"} <span>{sunset}</span></li>
                    </ul>
                </div>
                <div className={'column-2'}>
                    <form id="search" action="https://www.google.com/search" method="get">
                        <input type="search" name="q" />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </Fragment>
    )
};

export default withRouter(Weather);
