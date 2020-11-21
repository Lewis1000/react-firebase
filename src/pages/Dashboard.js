import React, { Component } from 'react';
//import axios from 'axios';
//import { Redirect } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            data: null
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
            <div style={styles.Dashboard}>
                <AppBar position="absolute">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap>
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <div>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                        <List>{mainListItems}</List>
                    <Divider />
                    <List>{secondaryListItems}</List>
                </Drawer>
            </div>
        );
    };
};

const styles = {
    Dashboard: {

    }
};

export default Dashboard;