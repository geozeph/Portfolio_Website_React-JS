import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Cert Computer Science" where="Wake Tech" from="2019" to="Present"/>
            <Widecard title="BFA Graphic Design" where="Eastern Illinois University" from="July 2013" to="May 2016"/>
            <Widecard title="Associates in Graphic Design" where="Lake Land collage" from="2011" to="2013"/>
            </div>
            )
        }
    }
    
export default Education
    