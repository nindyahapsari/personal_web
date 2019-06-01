import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../css/landing.css";

class Landing extends Component {
  render() {
    function typeWriter(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = "";
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }

    // Type Method
    typeWriter.prototype.type = function() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];

      // Check if deleting
      if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txthead">${this.txt}</span>`;

      // Initial Type Speed
      let typeSpeed = 300;

      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      // If word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }

      setTimeout(() => this.type(), typeSpeed);
    };

    // Init On DOM Load
    document.addEventListener("DOMContentLoaded", init);

    // Init App
    function init() {
      const txtElement = document.querySelector(".txthead");
      const words = JSON.parse(txtElement.getAttribute("data-words"));
      const wait = txtElement.getAttribute("data-wait");
      // Init TypeWriter
      new typeWriter(txtElement, words, wait);
    }

    return (
      <div id="wrapper-website">
        <div className="container-fluid" id="home-container">
          <h1 className="scrolling">keep scrolling</h1>
          <h1 className="" id="header-name">
            Nindya Hapsari
          </h1>
          <nav className="navbar navbar-light" id="navbar">
            <div id="container-nav-menu">
              <span id="nav-home">
                <a href="#container-skills" id="nav-skills-btn">
                  Skills
                </a>
              </span>
              <span id="nav-work">
                <a href="#container-work" id="nav-work-btn">
                  My Work
                </a>
              </span>
              <span id="nav-certificate">
                <a href="#container-cert" id="nav-cert-btn">
                  Certificate
                </a>
              </span>
              <span id="nav-contact">
                <a href="#footer" id="nav-contact-btn">
                  Contact
                </a>
              </span>
            </div>
          </nav>
          <img src="shapes/landing/1.png" className="shape1" alt="" />
          <img src="shapes/landing/2.png" className="shape2" alt="" />
          <img src="shapes/landing/3.png" className="shape3" alt="" />
          <img src="shapes/landing/4.png" className="shape4" alt="" />
          <img src="shapes/landing/5.png" className="shape5" alt="" />
          <img src="shapes/landing/6.png" className="shape6" alt="" />
          <img src="shapes/landing/7.png" className="shape7" alt="" />

          <img src="shapes/landing/8.png" className="shape8" alt="" />
          <div className="container-fluid" id="welcome-text">
            <h2 className="" id="hello-text">
              Hello! I'm an aspiring software developer
            </h2>
            <h2 className="" id="focus-text">
              focus on{" "}
              <span
                className="txthead"
                data-wait="3000"
                data-words='["Front End Development"]'
              />
            </h2>
            <h3 className="" id="based-text">
              Based in Cologne, Germany
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
