import React, { Component } from "react";
import "../css/skills.css";

class Skills extends Component {
  render() {
    return (
      <div className="container-skills">
        <img className="skills1" src="shapes/skills/1.png" alt="" />
        <img className="skills2" src="shapes/skills/2.png" alt="" />
        <img className="skills3" src="shapes/skills/3.png" alt="" />
        <img className="skills4" src="shapes/skills/4.png" alt="" />
        <h1 className="skill-title">WHAT CAN I DO</h1>
        <div className="frontend">
          <h2>Front-end development</h2>
          <h3>Sass, Bootstrap, jQuery, React, Redux, Angular</h3>
        </div>
        <div className="mobile">
          <h2>Mobile development</h2>
          <h3>React Native, Android</h3>
        </div>
        <div className="tools">
          <h2>Tools</h2>
          <h3>Git, VSCode, Android Studio, Adobe XD</h3>
        </div>
        <div className="language">
          <h2>Human Language</h2>
          <h3>English, Indonesian, German</h3>
        </div>
      </div>
    );
  }
}

export default Skills;
