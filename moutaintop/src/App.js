import React from "react";

import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
require("dotenv").config();

function App() {
    return (
        <Router>
            <div className="row" id="navRow"></div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Home" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
