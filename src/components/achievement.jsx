import React, { Component } from "react";
import fcc from "../asset/cert/fcc.png";
import fcc2 from "../asset/cert/fccjs.png";
import dsc from "../asset/cert/ucsandiego.jpg";
import popc from "../asset/cert/duke.jpg";
import ml from "../asset/cert/standford.jpg";
import "../css/achievement.css";
import { Container, Row, Col } from "reactstrap";

class Achievement extends Component {
  render() {
    return (
      <div id="container-cert">
        <Container>
          <Row>
            <Col sx="6">
              <div className="freecodecampjs">
                <figure>
                  <a href={fcc2}>
                    <img
                      className="cert-img"
                      src={fcc2}
                      width="370"
                      height="228"
                      alt="javascript-library-certificate"
                    />
                  </a>
                </figure>
              </div>
            </Col>
            <Col sx="6">
              <div className="freecodecamp">
                <figure>
                  <a href={fcc}>
                    <img
                      className="cert-img"
                      src={fcc}
                      width="370"
                      height="228"
                      alt="front-end-library-certificate"
                    />
                  </a>
                </figure>
              </div>
            </Col>
            <Col sx="6">
              <div className="sandiego">
                <figure>
                  <a href={dsc}>
                    <img
                      className="cert-img"
                      src={dsc}
                      width="370"
                      height="280"
                      alt="data-structure-certificate"
                    />
                  </a>
                </figure>
              </div>
            </Col>
            <Col xs="6">
              <div className="duke">
                <figure>
                  <a href={popc}>
                    <img
                      className="cert-img"
                      src={popc}
                      width="370"
                      height="280"
                      alt="principal-of-programming-cert"
                    />
                  </a>
                </figure>
              </div>
            </Col>
            <Col xs="6">
              <div className="standford">
                <figure>
                  <a href={ml}>
                    <img
                      className="cert-img"
                      src={ml}
                      width="370"
                      height="280"
                      alt="machine-learning"
                    />
                  </a>
                </figure>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Achievement;
