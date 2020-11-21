import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Storage from '@material-ui/icons/Storage';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        return (
            <Container style={styles.Container} component="main" maxWidth="xs">
                <Avatar style={styles.Avatar} color="primary">
                     <Storage />
                </Avatar>
                 <form onSubmit={this.handleSubmit}>
                    <TextField style={styles.TextField} autoComplete="email" fullWidth required variant="outlined" label="Email" type="text" value={this.state.email} onChange={this.handleChange} placeholder="email" name="email"></TextField>
                    <TextField style={styles.TextField} autoComplete="current-password" fullWidth required variant="outlined" label="Password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="password" name="password"></TextField>
                    <Button style={styles.Button} fullWidth size="large" variant="contained" color="primary" type="submit">Login</Button>
                </form>
                <Typography style={styles.Typography} component="p" variant="body1">Don't have an account? <Link style={styles.Link} to="/signup">Sign up</Link></Typography>
            </Container>
        );
    };
};

const styles = {
    Container: {
        textAlign: "center",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
    },
    Avatar: {
        padding: "2px",
        margin: "10px",
        backgroundColor: "#5f27cd"
    },
    TextField: {
        marginTop: 10,
        marginBottom: 10
    },
    Button: {
        marginTop: 10,
        marginBottom: 10,
        paddingTop: "12px",
        paddingBottom: "12px",
        backgroundColor: "#5f27cd"
    },
    Typography: {
        paddingTop: "12px",
        paddingBottom: "12px"
    },
    Link: {
        color: "#5f27cd",
        textDecoration: "none"
    }
};

export default Login;