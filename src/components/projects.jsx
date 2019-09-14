import React, { Component } from "react";
import weather from "../asset/weather_first.png";
import todo from "../asset/todo_tab_first.png";
import plantapp from "../asset/plant_tf_e.png";
import rqm from "../asset/Screenshot-rqm.png";
import bubtea from "../asset/pict_1.png";
import landing from "../asset/landingpageScreenshot.png";
import drum from "../asset/drum_machine.png";
import vetclinic from "../asset/landing_page_wordpress.png";
import resort from "../asset/resort.png";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  Container,
  CardLink
} from "reactstrap";
import "../css/projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="container-work" id="container-work">
        <Container>
          <CardColumns>
            <Card body outline="primary" className="project-card">
              <Container>
                <CardImg
                  top
                  className="project-img"
                  id="weatherapp"
                  src={weather}
                  alt="weather app screenshot"
                />
              </Container>
              <CardBody className="project-text" id="weatherapptext">
                <CardTitle className="projtitle">Weather App</CardTitle>

                <CardSubtitle className="projtype">Type: Android</CardSubtitle>

                <CardText className="projdes">
                  Easy to use light weight android app. This app is intergrated
                  with SQLite and Weather API
                </CardText>
                <Button outline color="secondary" className="btnproj">
                  <a
                    href="https://github.com/nindyahapsari/WeatherApp_Sunshine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projlink"
                  >
                    <i className="fab fa-github" id="githubProject" />
                    <p className="click">click for source code</p>
                  </a>
                </Button>
              </CardBody>
            </Card>

            <Card outline="primary" className="project-card todo ">
              <Container>
                <CardImg
                  className="project-img"
                  id="todoapp"
                  src={todo}
                  alt="todo app screenshot"
                  style={{ width: 150, height: 200 }}
                />
              </Container>
              <CardBody className="project-text">
                <CardTitle className="projtitle todotxt" id="todoapptext">
                  To-do App
                </CardTitle>
                <CardSubtitle>Type: Android</CardSubtitle>
                <CardText>
                  A clone To-do app that is easy to use for day-to-day task.
                  This app is intergrated with SQLite
                </CardText>
                <Button outline color="secondary" className="btnproj">
                  <a
                    href="https://github.com/nindyahapsari/Todo_List"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projlink"
                  >
                    <i className="fab fa-github" id="githubProject" />
                    <p className="click">click for source code</p>
                  </a>
                </Button>
              </CardBody>
            </Card>

            <Card outline="primary" className="project-card plant">
              <Container>
                <CardImg
                  top
                  className="project-img"
                  id="plantapp"
                  src={plantapp}
                  alt="plant detector app screenshot"
                />
              </Container>
              <CardBody className="project-text">
                <CardTitle className="projtitle">Plant App</CardTitle>
                <CardSubtitle>Type: Android</CardSubtitle>
                <CardText>
                  Android App that can detect plants. This app intergrated with
                  tensorflow
                </CardText>
                <Button outline color="secondary" className="btnproj">
                  <a
                    href="https://github.com/nindyahapsari/plants-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projlink"
                  >
                    <i className="fab fa-github" id="githubProject" />
                    <p className="click">click for source code</p>
                  </a>
                </Button>
              </CardBody>
            </Card>

            <Card outline="primary" className="project-card">
              <Container>
                <CardImg
                  top
                  className="project-img"
                  id="website"
                  src={landing}
                  alt="personal website screenshot"
                />
              </Container>
              <CardBody className="project-text">
                <CardTitle className="projtitle">Personal Website</CardTitle>
                <CardSubtitle>Type: Website</CardSubtitle>
                <CardText>
                  Personal Website built with HTML, CSS, React JS. Design using
                  AdobeXD
                </CardText>
                <Button outline color="secondary" className="btnproj">
                  <a
                    href="https://github.com/nindyahapsari/personal_web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projlink"
                  >
                    <i className="fab fa-github" id="githubProject" />
                    <p className="click">click for source code</p>
                  </a>
                </Button>
              </CardBody>
            </Card>

            <Card outline="primary" className="project-card">
              <Container>
                <CardImg
                  top
                  className="project-img"
                  id="bubbleteaapp"
                  src={bubtea}
                  alt="bubbletea app screenshot"
                />
              </Container>
              <CardBody className="project-text">
                <CardTitle className="projtitle">Bubble Tea App</CardTitle>
                <CardSubtitle>Type: Android App</CardSubtitle>
                <CardText>
                  An online ordering app. This app is intergrated with Firebase
                  (Databse), Paypal
                </CardText>
                <Button outline color="secondary" className="btnproj">
                  <a
                    href="https://github.com/nindyahapsari/BubTeaApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projlink"
                  >
                    <i className="fab fa-github" id="githubProject" />
                    <p className="click">click for source code</p>
                  </a>
                </Button>
              </CardBody>
            </Card>

            <Card outline="primary" className="project-card">
              <Container>
                <CardImg
                  className="project-img"
                  id="rqm"
                  src={rqm}
                  alt="random quote machine screenshot"
                />
              </Container>
              <CardBody className="project-text">
                <CardTitle className="projtitle">
                  Random Quote Machine
                </CardTitle>
                <CardSubtitle>Type: Website</CardSubtitle>
                <CardText />

                <Button outline color="secondary" className="btnproj">
                  <a
                    href="https://github.com/nindyahapsari/random_quote_machine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projlink"
                  >
                    <i className="fab fa-github" id="githubProject" />
                    <p className="click">click for source code</p>
                  </a>
                </Button>
              </CardBody>
            </Card>

            <Card outline="primary" className="project-card">
              <Container>
                <CardImg
                  className="project-img"
                  id="drum_machine"
                  src={drum}
                  alt="personal website screenshot"
                />
              </Container>
              <CardBody className="project-text">
                <CardTitle className="projtitle">Drum Machine</CardTitle>
                <CardSubtitle>Type: Website</CardSubtitle>
                <CardText>
                  A fun drum machine app that was build using React
                </CardText>

                <Button outline color="secondary" className="btnproj">
                  <a
                    href="https://codepen.io/nindyahapsari/full/xewbzr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projlink"
                  >
                    <i className="fab fa-github" id="githubProject" />
                    <p className="click">click for source code</p>
                  </a>
                </Button>
              </CardBody>
            </Card>

            <Card outline="primary" className="project-card">
              <Container>
                <CardImg
                  className="project-img"
                  id="vetclinic"
                  src={vetclinic}
                  alt="Wordpress Theme Development"
                />
              </Container>
              <CardBody className="project-text">
                <CardTitle className="projtitle">
                  Wordpress Theme Development
                </CardTitle>
                <CardSubtitle>Type: Website, Wordpress Theme</CardSubtitle>
                <CardLink href="http://nhapsari.rf.gd/?i=1">
                  Link to Website
                </CardLink>
                <CardText />

                <Button outline color="secondary" className="btnproj">
                  <a
                    href="https://github.com/nindyahapsari/vet-clinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projlink"
                  >
                    <i className="fab fa-github" id="githubProject" />
                    <p className="click">click for source code</p>
                  </a>
                </Button>
              </CardBody>
            </Card>

            <Card outline="primary" className="project-card">
              <Container>
                <CardImg
                  className="project-img"
                  id="resort"
                  src={resort}
                  alt="Hotel Resort"
                />
              </Container>
              <CardBody className="project-text">
                <CardTitle className="projtitle">Beach Hotel Resort</CardTitle>
                <CardSubtitle>Type: Website, React</CardSubtitle>
                <CardLink href="https://beachhotel.netlify.com/">
                  Link to Website
                </CardLink>
                <CardText />

                <Button outline color="secondary" className="btnproj">
                  <a
                    href="https://github.com/nindyahapsari/Resort"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projlink"
                  >
                    <i className="fab fa-github" id="githubProject" />
                    <p className="click">click for source code</p>
                  </a>
                </Button>
              </CardBody>
            </Card>
          </CardColumns>
        </Container>
      </div>
    );
  }
}

export default Projects;
