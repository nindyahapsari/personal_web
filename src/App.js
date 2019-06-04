import React, { Component } from "react";
import "./App.css";
import "./screen.css";
import "./css/landing.css";
import Landing from "./components/landing";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Achievement from "./components/achievement";
import Footer from "./components/footer";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parallax scrolling={true} ref={ref => (this.parallax = ref)} page={6}>
          <div className="components">
            <ParallaxLayer offset={0} speed={0} style={{ opacity: 0.8 }}>
              <img src="shapes/landing/1.png" className="shape1" alt="" />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.1}>
              <img src="shapes/landing/2.png" className="shape2" alt="" />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0} style={{ opacity: 0.8 }}>
              <img src="shapes/landing/3.png" className="shape3" alt="" />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.2}>
              <img src="shapes/landing/4.png" className="shape4" alt="" />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0} style={{ opacity: 0.8 }}>
              <img src="shapes/landing/5.png" className="shape5" alt="" />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.2}>
              <img src="shapes/landing/6.png" className="shape6" alt="" />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.2} style={{ opacity: 0.8 }}>
              <img src="shapes/landing/7.png" className="shape7" alt="" />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0}>
              <img src="shapes/landing/8.png" className="shape8" alt="" />
            </ParallaxLayer>

            {/* Skills shape  */}
            <ParallaxLayer offset={0} speed={0} style={{ opacity: 0.7 }}>
              <img className="skills1" src="shapes/skills/1.png" alt="" />
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.1} style={{ opacity: 1 }}>
              <img className="skills2" src="shapes/skills/2.png" alt="" />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0} style={{ opacity: 1 }}>
              <img className="skills3" src="shapes/skills/3.png" alt="" />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3} style={{ opacity: 1 }}>
              <img className="skills4" src="shapes/skills/4.png" alt="" />
            </ParallaxLayer>

            {/* Project Shapes  */}

            <ParallaxLayer offset={3} speed={0.3} style={{ opacity: 0.9 }}>
              <img className="pro1" src="shapes/projects/1.png" alt="" />
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={0} style={{ opacity: 1 }}>
              <img className="pro2" src="shapes/projects/2.png" alt="" />
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={0.2} style={{ opacity: 1 }}>
              <img className="pro3" src="shapes/projects/3.png" alt="" />
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={0.1} style={{ opacity: 1 }}>
              <img className="pro4" src="shapes/projects/4.png" alt="" />
            </ParallaxLayer>

            {/* Achievement Shapes */}

            <ParallaxLayer offset={4.5} speed={0.1} style={{ opacity: 1 }}>
              <img className="ac1" src="shapes/achievements/1.png" alt="" />
            </ParallaxLayer>
            <ParallaxLayer offset={4.5} speed={0} style={{ opacity: 1 }}>
              <img className="ac2" src="shapes/achievements/2.png" alt="" />
            </ParallaxLayer>
            <ParallaxLayer offset={4.5} speed={0.3} style={{ opacity: 1 }}>
              <img className="ac3" src="shapes/achievements/3.png" alt="" />
            </ParallaxLayer>

            {/* Header */}
            <ParallaxLayer offset={0} speed={-1} style={{ opacity: 1 }}>
              <h1 className="scrolling">keep scrolling</h1>
            </ParallaxLayer>
            <ParallaxLayer offset={0.4} speed={-0.2} style={{ opacity: 1 }}>
              <h1 className="skills-head">Skills</h1>
            </ParallaxLayer>
            <ParallaxLayer offset={2.5} speed={-0.5} style={{ opacity: 1 }}>
              <h1 id="project-head">Projects</h1>
            </ParallaxLayer>
            <ParallaxLayer offset={4.3} speed={-0.5} style={{ opacity: 1 }}>
              <h1 id="cert-head">Achievements</h1>
            </ParallaxLayer>

            {/* Pages Components */}
            <Landing />
            <Skills />
            <Projects />
            <Achievement />
            <Footer />
          </div>
        </Parallax>
      </div>
    );
  }
}

export default App;
