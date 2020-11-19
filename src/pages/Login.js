import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {}
        };
    };

    /*
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        });
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post('/login', userData)
            .then(res => {
                localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
                this.setState({
                    loading: false
                });
                this.props.history.push('/dashboard');
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                    loading: false
                });
            });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    */

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.email} onChange={this.handleChange} placeholder="email" name="email"></input>
                    <input type="password" value={this.state.password} onChange={this.handleChange} placeholder="password" name="password"></input>
                    <button type="submit">Login</button>
                </form>
                <Link to="/signup">Signup Here</Link>
            </div>
        );
    };
};

export default Login;