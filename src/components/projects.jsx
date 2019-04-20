import React, { Component } from 'react';
import weather from '../asset/weather_first.png';
import todo from '../asset/todo_tab_first.png';
import plantapp from '../asset/plant_tf_e.png';
import rqm from '../asset/Screenshot-rqm.png';
import bubtea from '../asset/pict_1.png';
import landing from '../asset/landingpageScreenshot.png';
import drum from '../asset/drum_machine.png';



class Projects extends Component{

    render(){

        return(


        <div className="container-work" id="container-work" style={{backgroundImage: 'url(images/background/project_bg.png)'}}>

            <h1  id="project-head"><i className="fa fa-laptop-code" style={{fontSize: '3vw'}}></i>Projects</h1>

            <div  className="card-wrapper" id="card-wrapper">
                
                
                <div className="project-card weather" >
                    <a href="https://github.com/nindyahapsari/WeatherApp_Sunshine" target="_blank" rel="noopener noreferrer">
                        <img className="project-img" id="weatherapp" src={weather} alt="weather app screenshot" style={{width: 200, height: 400}} />
                        </a>
                        <span className="project-text" id="weatherapptext" >Weather App <br/> Android </span>
                </div>



                <div className="project-card todo" >
                    <span className="project-text todotxt" id="todoapptext">To-do App <br/> Android</span>
                    <a href="https://github.com/nindyahapsari/Todo_List" target="_blank" rel="noopener noreferrer">
                    <img className="project-img" id="todoapp" src={todo} alt="todo app screenshot" style={{width: 300, height: 400}}/>
                        
                        </a>
                        
                </div>
            
            
                <div className="project-card plant">
                    <a href="https://github.com/nindyahapsari/plants-id" target="_blank" rel="noopener noreferrer">
                        <img className="project-img" id="plantapp" src={plantapp} style={{width: 400, height: 400}}  alt="plant detector app screenshot"/>
                        <span className="project-text plant" id="plantdetectapptext">Plant Detector App <br/> Android</span>
                        </a>
                </div>
            
                <div className="project-card">
                    <a href="https://github.com/nindyahapsari/personal_website" target="_blank" rel="noopener noreferrer">
                        <img className="project-img" id="website" src={landing} style={{width: 600, height: 400}} alt="personal website screenshot"/>
                        <div className="project-text personal" id="personalwebtext">Personal Website <br/> HTML CSS JS</div>
                        </a>
                </div>

            
                <div className="project-card">
                    <a href="https://github.com/nindyahapsari/BubTeaApp" target="_blank" rel="noopener noreferrer">
                        <img className="project-img" id="bubbleteaapp" src={bubtea} style={{width: 240, height: 400}} alt="bubbletea app screenshot"/>
                        <div className="project-text bubtea" id="bubteaapptext">Ordering Bubble Tea App <br/> Android</div>
                        </a>
                </div>
            
            
                <div className="project-card">
                    <a href="https://github.com/nindyahapsari/random_quote_machine" target="_blank" rel="noopener noreferrer">
                        <img className="project-img" id="rqm" src={rqm} style={{width: 600, height: 350}} alt="random quote machine screenshot"/>
                        <div className="project-text " id="rqmtext">Random Quote Machine <br/> HTML CSS JS</div>
                        </a> 
                </div>

                <div className="project-card">
                    <a href="https://codepen.io/nindyahapsari/full/xewbzr" target="_blank" rel="noopener noreferrer" >
                        <img className="project-img" id="drum_machine" src={drum} style={{width: 500, height: 300}} alt="personal website screenshot"/>
                        <div className="project-text" id="dmtext">Drum Machine<br/> HTML CSS JS </div>
                        </a>
                </div>

            </div>

            </div>


            
            

            


           
        );
    }
}



export default Projects;