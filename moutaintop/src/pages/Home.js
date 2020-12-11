import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

import Jumbotron from "../components/Jumbotron";
class Home extends Component {
    render() {
        return (
            <div>
                <>
                    <Navbar bg="light">
                        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                    </Navbar>
                    <br />
                    <Navbar bg="light">
                        <Navbar.Brand>Brand text</Navbar.Brand>
                    </Navbar>
                    <br />
                    <Navbar bg="dark">
                        <Navbar.Brand href="#home">
                            <img
                                src="/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    </Navbar>
                    <br />
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{" "}
                            React Bootstrap
                        </Navbar.Brand>
                    </Navbar>
                </>
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
