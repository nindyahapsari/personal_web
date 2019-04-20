import React, { Component } from 'react';
import fcc from '../asset/cert/fcc.png';
import dsc from '../asset/cert/ucsandiego.jpg'
import popc from '../asset/cert/duke.jpg'
import ml from '../asset/cert/standford.jpg'



class Achievement extends Component{
    render(){
        return(


            <div id="container-cert" style={{ backgroundImage: 'url(images/background/cert_bg.png)' }}>

            <h1 data-aos="flip-right"  data-aos-duration="2000" id="cert-head"><i className="fas fa-graduation-cap" style={{fontSize: '2.5vw'}}></i>Achievements</h1>
          
          <div className="cert-holder">
    
            <div data-aos="flip-left" data-aos-duration="2000" className="freecodecamp">
              <figure>
                <a href={fcc} data-lightbox="mygallery">
                  <img className="cert-img" src={fcc} width="370" height="228" alt="front-end-library-certificate"/>
                </a>
              </figure>
            </div>
            <div data-aos="flip-right" data-aos-duration="2000" className="sandiego">
                <figure>
                  <a href={dsc} data-lightbox="mygallery">
                    <img className="cert-img" src={dsc} width="370" height="280" alt="data-structure-certificate" />
                  </a>
                </figure>
              </div>
              <div data-aos="flip-left" data-aos-duration="2000" className="duke">
                  <figure>
                   <a href={popc} data-lightbox="mygallery">
                     <img className="cert-img" src={popc} width="370" height="280" alt="principal-of-programming-cert" />
                    </a>
                  </figure>
                </div>
                <div data-aos="flip-right" data-aos-duration="2000" className="standford">
                    <figure>
                    <a href={ml} data-lightbox="mygallery" >
                      <img className="cert-img" src={ml} width="370" height="280" alt="machine-learning"/>
                    </a>
                    </figure>
                  </div>
                </div>
        </div>

        );
    }
}


export default Achievement;