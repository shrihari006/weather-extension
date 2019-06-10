import React, { useContext } from 'react';

import { WeatherContext } from '../Context';

import '../styles/landing.css';

const Form = (props) => {
    const weatherState = useContext(WeatherContext);
    const { getWeatherInfo } = weatherState;
    return (
        <div className={'landing-page'}>
            <form onSubmit={getWeatherInfo}>
                <input type="text" name="city" placeholder="City" />
                <input type="text" name="country" placeholder="Country" />
                <button>
                    Get Weather info
            </button>
            </form>
        </div>
    );
};

export default Form;
