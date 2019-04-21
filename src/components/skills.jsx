import React, { Component } from 'react';


class Skills extends Component{

    render(){
        return(
            
            <div className="flex-container" id="container-skills" style={{backgroundImage: 'url(images/background/skills_bg.png)'}} >

            <div className="every-skill-box" data-aos="fade-up"  id="programming-language" >
                <h2 className="skills-title programlanguage" id="program-lang">Programming Language</h2>
                <ul className="skill-list">
                    <li>HTML - CSS</li>
                    <li>Java Script</li>
                    <li>Java</li>
                    <li>Python</li>
                  </ul>
            </div>
            <div className="every-skill-box" data-aos="fade-up"  id="tools-library">
                <h2 className="skills-title toolslib" id="tools-lib">Tools and Library</h2>
                <ul className="skill-list">
                    <li>Git</li>
                    <li>VScode</li>
                    <li>Android Studio</li>
                    <li>CodePen.io</li>
                    <li>Bootstrap</li>
                    <li>Sass</li>
                    <li>JQuery</li>
                    <li>React + React Native</li>
                    <li>Redux</li>
                  </ul>
            </div>
            <div className="every-skill-box" data-aos="fade-up"  id="softwares">
                <h2 className="skills-title softwaretitle" id="titlesoftwares">Softwares</h2>
                <ul className="skill-list">
                    <li>Adobe XD</li>
                  </ul>
            </div>
            <div className="every-skill-box" data-aos="fade-up"  id="human-language">
                <h2 className="skills-title humlangtitle" id="language">Human Language</h2>
                <ul className="skill-list">
                    <li>English</li>
                    <li>Indonesian</li>
                    <li>German</li>
                  </ul>
            </div>
            
          </div>  
        );
    }
}


export default Skills;