import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
class Jumbo extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.subHead}</p>
                </Container>
            </Jumbotron>
        );
    }
}
export default Jumbo;
