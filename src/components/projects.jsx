import React, { Component } from "react";
import weather from "../asset/weather_first.png";
import todo from "../asset/todo_tab_first.png";
import plantapp from "../asset/plant_tf_e.png";
import rqm from "../asset/Screenshot-rqm.png";
import bubtea from "../asset/pict_1.png";
import landing from "../asset/landingpageScreenshot.png";
import drum from "../asset/drum_machine.png";
import { Container, Row, Col } from "reactstrap";
import "../css/projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="container-work" id="container-work">
        <Container>
          <div className="card-wrapper" id="card-wrapper">
            <Row>
              <Col sm="4">
                <div className="project-card weather">
                  <img
                    className="project-img"
                    id="weatherapp"
                    src={weather}
                    alt="weather app screenshot"
                    style={{ width: 100, height: 200 }}
                  />
                  <div className="overlay">
                    <a
                      href="https://github.com/nindyahapsari/WeatherApp_Sunshine"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github" id="githubProject" />
                      <p className="click">click for source code</p>
                    </a>
                    <div className="project-text" id="weatherapptext">
                      Weather App <br /> Android{" "}
                    </div>
                  </div>
                </div>
              </Col>

              <Col sm="4">
                <div className="project-card todo">
                  <img
                    className="project-img"
                    id="todoapp"
                    src={todo}
                    alt="todo app screenshot"
                    style={{ width: 150, height: 200 }}
                  />
                  <div className="overlay">
                    <a
                      href="https://github.com/nindyahapsari/Todo_List"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github" id="githubProject" />
                      <p className="click">click for source code</p>
                      <div className="project-text todotxt" id="todoapptext">
                        To-do App <br /> Android
                      </div>
                    </a>
                  </div>
                </div>
              </Col>

              <Col sm="4">
                <div className="project-card plant">
                  <img
                    className="project-img"
                    id="plantapp"
                    src={plantapp}
                    style={{ width: 200, height: 200 }}
                    alt="plant detector app screenshot"
                  />
                  <div className="overlay">
                    <a
                      href="https://github.com/nindyahapsari/plants-id"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github" id="githubProject" />
                      <p className="click">click for source code</p>
                      <div
                        className="project-text plant"
                        id="plantdetectapptext"
                      >
                        Plant Detector App <br /> Android
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm="4">
                <div className="project-card">
                  <img
                    className="project-img"
                    id="website"
                    src={landing}
                    style={{ width: 300, height: 190 }}
                    alt="personal website screenshot"
                  />
                  <div className="overlay">
                    <a
                      href="https://github.com/nindyahapsari/personal_web"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github" id="githubProject" />
                      <p className="click">click for source code</p>
                      <div
                        className="project-text personal"
                        id="personalwebtext"
                      >
                        Personal Website <br /> HTML CSS JS(React)
                      </div>
                    </a>
                  </div>
                </div>
              </Col>

              <Col sm="4">
                <div className="project-card">
                  <img
                    className="project-img"
                    id="bubbleteaapp"
                    src={bubtea}
                    style={{ width: 100, height: 200 }}
                    alt="bubbletea app screenshot"
                  />
                  <div className="overlay">
                    <a
                      href="https://github.com/nindyahapsari/BubTeaApp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github" id="githubProject" />
                      <p className="click">click for source code</p>
                      <div className="project-text bubtea" id="bubteaapptext">
                        Ordering Bubble Tea App <br /> Android
                      </div>
                    </a>
                  </div>
                </div>
              </Col>

              <Col sm="4">
                <div className="project-card">
                  <img
                    className="project-img"
                    id="rqm"
                    src={rqm}
                    style={{ width: 300, height: 170 }}
                    alt="random quote machine screenshot"
                  />
                  <div className="overlay">
                    <a
                      href="https://github.com/nindyahapsari/random_quote_machine"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fab fa-github" id="githubProject" />
                      <p className="click">click for source code</p>
                      <div className="project-text " id="rqmtext">
                        Random Quote Machine <br /> HTML CSS JS
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm="12">
                <div className="project-card">
                  <img
                    className="project-img"
                    id="drum_machine"
                    src={drum}
                    style={{ width: 300, height: 150 }}
                    alt="personal website screenshot"
                  />
                  <div className="overlay">
                    <a
                      href="https://codepen.io/nindyahapsari/full/xewbzr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github" id="githubProject" />
                      <p className="click">click for source code</p>
                      <div className="project-text" id="dmtext">
                        Drum Machine
                        <br /> HTML CSS JS{" "}
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Projects;
