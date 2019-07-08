import React, { Component } from 'react';
import Login from "../auth/login";
import loginImg from "../../../static/assets/images/auth/login.jpg"

export default class extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/");
    }

    handleUnsuccessfulAuth() {
        this.props.handleUnsuccessfulLogin() 
    }

    render() {
        return (
            <div className="atuh-page-wrapper">
                <div className="left-column" 
                    style={{
                        backgroundImage: `url(${loginImg})`
                    }}
                />

                <div classname="right-column">
                    <Login
                        handleSuccessfulAuth={this.handleSuccessfulAuth}
                        handleUnsuccessfulAuth={this.handleUnsuccessfulLogin}
                    />
                </div>
            </div>
        )
    }
}