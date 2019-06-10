import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";

import AppRouter from './routes';

import WeatherProvider from './Context';

class App extends Component {
  render() {
    return (
      <Router>
        <WeatherProvider>
          <AppRouter />
        </WeatherProvider>
      </Router>
    )
  }
};

export default App;
