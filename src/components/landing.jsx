import React, { Component } from "react";
import "../css/landing.css";
import "../css/mobile-landing.css";

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
          <h1 className="" id="header-name">
            Nindya Hapsari
          </h1>
          <nav className="navbar navbar-light" id="navbar">
            <div id="container-nav-menu">
              <span id="nav-home">
                <a href="https://github.com/nindyahapsari" id="nav-skills-btn">
                  <i class="fab fa-github"></i>
                </a>
              </span>
              <span id="nav-work">
                <a
                  href="https://www.linkedin.com/in/nindya-hapsari-a5000a153/"
                  id="nav-work-btn"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </span>
              <span id="nav-certificate">
                <a
                  href="https://www.instagram.com/butter_scotch/"
                  id="nav-cert-btn"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </span>
            </div>
          </nav>

          <div className="container-fluid" id="welcome-text">
            <h2 className="" id="hello-text">
              Hello! I'm a software engineer
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
