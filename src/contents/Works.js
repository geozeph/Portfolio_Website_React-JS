import React, { Component } from 'react';
import expic from '../img/ex.jpg';
import expic1 from '../img/ex1.jpg';
import expic2 from '../img/ex2.jpg';
import expic3 from '../img/ex3.jpg';





class Works extends Component {
    render() {
        return (
            <div className="condiv works">
            <h1>A few of my Landscape paintings</h1>
            <div className="row">
            <div className="column">
            <img src={expic} alt="landscape0" className="expic"></img>
            
            </div>
            <div className="column">
            <img src={expic1} alt="landscape1" className="expic"></img>
            
            </div>
            <div className="column">
            <img src={expic2} alt="landscape2" className="expic"></img>
            
            </div>
            <div className="column">
            <img src={expic3} alt="landscape3" className="expic"></img>
            
            </div>
            </div>
            
            
            
            </div>
            
            )
        }
    }
    
    
    export default Works
    