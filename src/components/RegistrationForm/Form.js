import React, { Component } from 'react'
import "./Form.css";
import { LinkContainer } from 'react-router-bootstrap';



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: "",
            last_name: "",
            password: "",
            email: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            first_name: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            last_name: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.first_name} ${this.state.last_name} registered successfully!!!!`)
        console.log(this.state);
        this.setState({
            first_name: "",
            last_name: "",
            password: '',
            email: "",
        })
     event.preventDefault()
        
     
     
    }


    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <div className="app-wrapper-form">
                        <input type="text" value={this.state.first_name} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                        <input type="text" value={this.state.last_name} onChange={this.lasthandler} placeholder="LastName..." /><br />
                        <input type="email" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." /><br />
                        <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                     <LinkContainer to="/login">
                        <input type="submit" value="Submit" />
                    </LinkContainer>
                     <h1 className="join-text-form">
                       Get things
                     <span className="accent-text-form">Done.</span>
                     </h1>
                    </div>
                    
                </form>
                
            </div>
            
        )
    }
}

export default Form