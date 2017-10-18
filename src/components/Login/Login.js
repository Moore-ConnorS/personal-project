import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Login.css';
import Navbar from './../navbar/Navbar';

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            user: null,
            showRegister: null,
            message: null
        };

        this.getMessage = this.getMessage.bind( this );
        this.register = this.register.bind( this );
        this.login = this.login.bind( this );
        this.logout = this.logout.bind( this );
    }

        getMessage = error => error.res
        ? error.res.data
            ? error.res.data.message
            : JSON.stringify(error.res.data, null, 2)
        : error.message;


        register() {
            this.setState({message: null});
            const username = this.refs.username.value;
            const password = this.refs.password.value;
            axios.post('/register', {
                username, 
                password
            }).then(res => {
                this.setState({ user: res.data})
            }).catch(error => {
                this.setState({ message: 'Something went wrong: ' + this.getMessage(error) })
            })
        }

        login() {
            this.setState({ message: null });
            const username = this.refs.username.value;
            const password = this.refs.password.value;
            axios.post('/login', {
                username,
                password
            }).then(res => {
                this.setState({ user: res.data })
            }).catch(error => {
                this.setState({ message: 'Something went wrong: ' + this.getMessage(error) })
            })
            
        }

        logout() {
            axios.post('/logout').then( res => {
                this.setState({ user:null });
            }).catch(error => {
                this.setState({ message: 'Something went wrong: ' + this.getMessage(error) });
            })
        }
    render(){
        console.log(res.data)
        const { user, showRegister, message } = this.state;
        const inputField = <div>
            Username: <input ref='username' />
            <br/>
            Password: <input ref='password' />
        </div>


        return(
            <div>
                <Navbar />
                {!user && <div>
                    <a onClick={() => this.setState({ showRegister: false })}>Login</a>
                    <a onClick={() => this.setState({ showRegister: true })}>Register</a>
                    <div>
                        {showRegister && <div>
                            <h2>Register</h2>
                            {inputField}
                            <Link to='/'>
                            <button onClick={this.register}>Register</button>
                            </Link>
                            </div>}
                        {!showRegister && <div>
                            <h2>Login</h2>
                            {inputField}
                            <button onClick={this.login}>Login</button>
                            </div>}
                            {message}
                    </div>
                    <Link to='/'>
                    <button onClick={this.logout}>Logout</button>
                    </Link>
                    </div>}

            </div>
        )
    }
}