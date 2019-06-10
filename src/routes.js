import React from "react";
import {
    Route,
    Switch,
} from "react-router-dom";

import Weather from '../src/components/Weather';

const AppRouter = () => (
    <Switch>
        <Route path="/" component={Weather} />
    </Switch>
);

export default AppRouter;