import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Signup extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {}
        };
    };

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
                window.location.href = "/dashboard";
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

    render() {
        return(
            <Container component="main" maxWidth="xs">
                <Typography component="h1" variant="h4">Sign up</Typography>
                <p></p>
                <form onSubmit={this.handleSubmit}>
                    <TextField autoComplete="email" fullWidth required variant="outlined" label="Username" type="text" value={this.state.email} onChange={this.handleChange} placeholder="email" name="email"></TextField>
                    <TextField autoComplete="current-password" fullWidth required variant="outlined" label="Password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="password" name="password"></TextField>
                    <Button fullWidth variant="contained" color="primary" type="submit">Sign up</Button>
                </form>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </Container>
        );
    };
};

export default Signup;