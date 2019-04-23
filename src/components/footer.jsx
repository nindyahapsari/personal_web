import React, { Component } from 'react';



class Footer extends Component{

    render(){


      function typeWriter(txtElement, words, wait = 3000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
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
  if(this.isDeleting) {
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

  if(this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if(!this.isDeleting && this.txt === fullTxt) {
    // Make pause at end
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.footertext');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new typeWriter(txtElement, words, wait);
}






        return(
            <div id="footer" className="footer-contact" >

    <h1 id="footer-header">I am open for projects. <span className="footertext" data-wait="3000" data-words='["Would you like to discuss yours?"]'></span>
      </h1>
        <p  id="footer-email">nindyahapsariiljas@yahoo.com</p>
        <div   className="socialmedia-container">
          <div id="github">
            <a href="https://github.com/nindyahapsari" target="_blank" rel="noopener noreferrer" style={{ color: 'whitesmoke'}}><i className="fab fa-github"></i></a>
          </div>
          
          <div id="codepen">
            <a href="https://codepen.io/nindyahapsari/" target="_blank" rel="noopener noreferrer" style={{ color: 'whitesmoke'}}><i className="fab fa-codepen"></i></a>
          </div>
          
          <div id="linkedin">
            <a href="https://www.linkedin.com/in/nindya-hapsari-a5000a153/" target="_blank" rel="noopener noreferrer" style={{ color: 'whitesmoke'}}><i className="fab fa-linkedin"></i></a> 
          </div>
          
          <div id="instagram">
            <a href="https://www.instagram.com/butter_scotch/" target="_blank" rel="noopener noreferrer" style={{ color: 'whitesmoke'}}><i className="fab fa-instagram"></i></a>
          </div>
        </div>

  <footer id="copyright-text"><i className="far fa-copyright"></i>2019 Nindya Hapsari All rights reserved</footer>
</div>
        );
    }

}


export default Footer;