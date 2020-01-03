import React, { Component } from 'react';
import { about } from '../../public/strings.json';
import pic from '../../public/pic.jpg';

//TODO: make image and about text side by side 

class About extends Component {
    render() {
        return (
            <div>
                <h2>About</h2>
                <img src={pic} />
                <div>{about}</div>
            </div>
        );
    }
}

export default About;