import React, { Component } from "react";
import fcc from "../asset/cert/fcc.png";
import fcc2 from "../asset/cert/fccjs.png";
import dsc from "../asset/cert/ucsandiego.jpg";
import popc from "../asset/cert/duke.jpg";
import ml from "../asset/cert/standford.jpg";
import "../css/achievement.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";

class Achievement extends Component {
  render() {
    return (
      <div id="container-cert">
        <Container>
          <Row>
            <Col sm="4" className="freecodecampjs">
              <a href={fcc2}>
                <CardImg
                  className="cert-img fccjs"
                  src={fcc2}
                  alt="javascript-library-certificate"
                />
              </a>
            </Col>

            <Col sm="4" className="freecodecamp">
              <a href={fcc}>
                <Container>
                  <CardImg
                    className="cert-img fccfront"
                    src={fcc}
                    alt="front-end-library-certificate"
                  />
                </Container>
              </a>
            </Col>

            <Col sm="4" className="sandiego">
              <a href={dsc}>
                <Container>
                  <CardImg
                    className="cert-img sandiegoimg"
                    src={dsc}
                    alt="data-structure-certificate"
                  />
                </Container>
              </a>
            </Col>

            <Col sm="4" className="duke">
              <a href={popc}>
                <Container>
                  <CardImg
                    className="cert-img dukeimg"
                    src={popc}
                    alt="principal-of-programming-cert"
                  />
                </Container>
              </a>
            </Col>

            <Col sm="4" className="standford">
              <a href={ml}>
                <Container>
                  <CardImg
                    className="cert-img standfordimg"
                    src={ml}
                    alt="machine-learning"
                  />
                </Container>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Achievement;
