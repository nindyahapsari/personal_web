import React, { Component } from "react";
import "../css/skills.css";
import "../css/mobile-skills.css";
import { Container } from "reactstrap";
import one from "../asset/aboutme/2.JPG";

class Skills extends Component {
  render() {
    return (
      <Container>
        <div className="container-skills">
          <div className="img-container">
            <img className="photome" src={one} alt="me" />
          </div>

          <div className="abouttxtbox">
            <h2 className="abouthead">Hi There!</h2>
            <p className="abouttxtfirst">
              I’m Nindya (neen-dee-yeaa). Sometimes people call me “nin” :D I’m
              a passionate Frontend developer living in Cologne, Germany. I’m
              originally from Indonesia (In case you are wondering).
            </p>
            <p className="abouttxtsecond">
              coming from technical background, i quickly jump into web
              development with the ambition to create a functional and reliable
              web experience. By being involve in different projects I’m
              mastering my skills in various digital creation ranging from
              digital media to web development. I’m a curious and passionate
              person that are always up for a new challenges and learning new
              things
            </p>
          </div>

          <div>
            <div className="stackstools">
              <h2 className="stackstoolstxt">Stacks and Tools</h2>
            </div>

            <div className="frontend">
              <h2 className="frontendtxt">Front-end development</h2>
              <h3 className="frontendtxt">
                Sass, Bootstrap, jQuery, React, Redux, Angular
              </h3>
              <div className="animation-bar-frontend">
                <span style={{ width: "90%" }} />
              </div>
            </div>

            <div className="cms">
              <h2 className="cmstxt">Content Management System(CMS)</h2>
              <h3 className="cmstxt">Wordpress</h3>
              <div className="animation-bar-cms">
                <span style={{ width: "80%" }} />
              </div>
            </div>

            <div className="mobile">
              <h2 className="mobiletxt">Mobile development</h2>
              <h3 className="mobiletxt">React Native, Android</h3>
              <div className="animation-bar-mobile">
                <span style={{ width: "70%" }} />
              </div>
            </div>

            <div className="tools">
              <h2 className="toolstxt">Tools</h2>
              <h3 className="toolstxt">
                Git, VSCode, Android Studio, Adobe XD
              </h3>
              <div className="animation-bar-tools">
                <span style={{ width: "85%" }} />
              </div>
            </div>

            <div className="language">
              <h2 className="languagetxt">Human Language</h2>
              <h3 className="languagetxt">English, Indonesian, German</h3>
              <div className="animation-bar-language">
                <span style={{ width: "95%" }} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Skills;
