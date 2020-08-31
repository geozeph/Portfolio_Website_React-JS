import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/self.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="My face" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Geozeph Ewida','A full stack developer']} speed={60} eraseDelay={600}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    