import React, { Component } from 'react';
//import axios from 'axios';
//import { Redirect } from 'react-router-dom';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            
        };
    };

    /*
    componentDidMount() {
        if (this.props.authenticated) {
            axios.get('/getdata', {headers: {Bearer: this.props.token}})
            .then(res => {
                this.setState({
                    data: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
        } else {
            this.setState({redirect: true});
        }
    }; */

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <div>
                    <p>{this.props.token}</p>
                </div>
            </div>
        );
    };
};

export default Dashboard;