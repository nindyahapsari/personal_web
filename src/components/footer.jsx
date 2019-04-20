import React, { Component } from 'react';



class Footer extends Component{

    render(){
        return(
            <div id="footer" class="footer-contact" >

    <h1 id="footer-header">I am open for projects. Would you like to discuss yours?
      </h1>
        <p  id="footer-email">nindyahapsariiljas@yahoo.com</p>
        <div   class="socialmedia-container">
          <div id="github">
            <a href="https://github.com/nindyahapsari" target="_blank" rel="noopener noreferrer" style={{ color: 'whitesmoke'}}><i class="fab fa-github"></i></a>
          </div>
          
          <div id="codepen">
            <a href="https://codepen.io/nindyahapsari/" target="_blank" rel="noopener noreferrer" style={{ color: 'whitesmoke'}}><i class="fab fa-codepen"></i></a>
          </div>
          
          <div id="linkedin">
            <a href="https://www.linkedin.com/in/nindya-hapsari-a5000a153/" target="_blank" rel="noopener noreferrer" style={{ color: 'whitesmoke'}}><i class="fab fa-linkedin"></i></a> 
          </div>
          
          <div id="instagram">
            <a href="https://www.instagram.com/butter_scotch/" target="_blank" rel="noopener noreferrer" style={{ color: 'whitesmoke'}}><i class="fab fa-instagram"></i></a>
          </div>
        </div>

  <footer id="copyright-text"><i className="far fa-copyright"></i>2019 Nindya Hapsari All rights reserved</footer>
</div>
        );
    }

}


export default Footer;