import React, { Component } from "react";
import "../css/skills.css";
import { Container, Row, Col } from "reactstrap";

class Skills extends Component {
  render() {
    return (
      <Container>
        <div className="container-skills">
          <h1 className="skill-title">WHAT CAN I DO</h1>
          <Container>
            <div className="frontend">
              <Container>
                <h2 className="frontendtxt">Front-end development</h2>
                <h3 className="frontendtxt">
                  Sass, Bootstrap, jQuery, React, Redux, Angular
                </h3>
              </Container>
            </div>
          </Container>

          <Container>
            <div className="mobile">
              <Container>
                <h2 className="mobiletxt">Mobile development</h2>
              </Container>
              <Container>
                <h3 className="mobiletxt">React Native, Android</h3>
              </Container>
            </div>
          </Container>

          <Container>
            <div className="tools">
              <h2 className="toolstxt">Tools</h2>
              <h3 className="toolstxt">
                Git, VSCode, Android Studio, Adobe XD
              </h3>
            </div>
          </Container>

          <Container>
            <div className="language">
              <h2 className="languagetxt">Human Language</h2>
              <h3 className="languagetxt">English, Indonesian, German</h3>
            </div>
          </Container>
        </div>
      </Container>
    );
  }
}

export default Skills;
