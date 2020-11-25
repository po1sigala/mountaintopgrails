import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron";
class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Jumbotron
                        title="Mountain Top Grails"
                        subHead="Stay Fresh with a Retro fit"
                    />
                </div>
            </div>
        );
    }
}
export default Home;
