import React, { Component } from 'react';
import axios from 'axios';


//https://blog.mailtrap.io/react-contact-form/

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            googleURL: 'https://script.google.com/macros/s/AKfycbyc8HskOgdFHOeTHjWK6-iPwe_Pocvv3bm7KR-vZEACbzsiTZ3X/exec'
        }

        this.sendEmail = this.sendEmail.bind(this)
    }
    sendEmail() {
        const { name, email, message, googleURL } = this.state
        const settings = {
            method: 'POST',
            body: JSON.stringify({
                email: 'georgema689@gmail.com', //im pretty sure this is not safe?
                subject: 'reply to: ' + email + ' ' + name,
                body: message
            })
        }
        fetch(googleURL, settings)
            .then((response) => {
                console.log('success: ' + response)
            }).catch((error) => {
                console.log('error: ' + error)
            })
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log('sending ' + this.state)
        this.sendEmail()
        /**
        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
        */

    }


    render() {
        return (
            <div>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
}

export default Contact;