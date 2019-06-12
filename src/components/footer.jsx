import React, { Component } from "react";
import "../css/footer.css";

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="footer-contact">
        <h3 id="footer-header">Email me at:</h3>
        <p id="footer-email">nindyahapsariiljas@yahoo.com</p>
        <div className="socialmedia-container" />

        <footer id="copyright-text">
          <i className="far fa-copyright" />
          2019 Nindya Hapsari All rights reserved
        </footer>
      </div>
    );
  }
}

export default Footer;
