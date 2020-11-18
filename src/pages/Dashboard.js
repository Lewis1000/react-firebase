import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            redirect: this.props.authenticated,
            data: null
        };
    };

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
    };

    render() {
    let dataNodes = this.state.data ? (this.state.data.map(data => <p key={data.dataID}>{data.title}</p>)) : (<p>Loading...</p>);
        return (
            <div>
                {this.state.redirect ? (<Redirect to='/login' />) : (<div />)}
                <h1>Dashboard</h1>
                {dataNodes}
            </div>
        );
    };
};

export default Dashboard;