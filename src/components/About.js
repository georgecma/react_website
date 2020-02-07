import React, { Component } from 'react';
import pic from '../../public/about_pic.jpg';
import Flexbox from 'flexbox-react'

class About extends Component {
    constructor(props) {
        super(props)
        this.state={
            about : "I learned to code in an intro to CS course in freshman year. \
                    I thought it was pretty interesting and now I am graduating as a CS major. \
                    I learned a lot of theoretical stuff, like algorithms and operating systems. \
                    Now, I want to put it to practice, so I made some stuff that may help you. ",
            outerstyle: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'nowrap'
            },
            innerstyle: {
                margin: 20
            }

        }
    }


    render() {
        const {outerstyle, innerstyle, about} = this.state
        return (
            <div>
                <h2>About</h2>
                <Flexbox style={outerstyle}>
                    <Flexbox style={innerstyle}>
                        <img src={pic} />
                    </Flexbox> 
                    <Flexbox style={innerstyle}>
                        <div>{about}</div>
                    </Flexbox>
                </Flexbox>
            </div>
        );
    }
}

export default About;