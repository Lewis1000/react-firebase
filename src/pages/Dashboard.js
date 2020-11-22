import React, { Component } from 'react';
//import axios from 'axios';
//import { Redirect } from 'react-router-dom';

import Dash from '../components/Dash';
import Table from '../components/Table';
import Inbox from '../components/Inbox';
import Profile from '../components/Profile';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ExitToApp from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import Storage from '@material-ui/icons/Storage';
import MoveToInbox from '@material-ui/icons/MoveToInbox';
import Person from '@material-ui/icons/Person';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            drawer: true,
            show: 'dashboard',
            data: null
        };
    };

    componentDidMount() {
        /*
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
        */
    };

    handleLogout = () => {
        localStorage.removeItem('FBIdToken');
        window.location.href = "/login";
    };

    showComponent = () => {
        switch(this.state.show) {
            case "table":
                return(<Table />);
            case "inbox":
                return(<Inbox />);
            case "profile":
                return(<Profile />);
            default:
                return(<Dash />);
        };
    };

    changeComponent = (e) => {
        console.log(e);
    };

    render() {
        return (
            <div style={styles.Dashboard}>
                <AppBar style={styles.AppBar} position="fixed">
                    <Toolbar>
                        <IconButton color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <div style={styles.ToolBarIcon}>
                            <IconButton color="inherit" onClick={this.handleLogout}>
                                <ExitToApp />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer style={styles.Drawer} variant="permanent" anchor="left">
                    <Toolbar style={styles.DrawerBar}>
                        <IconButton>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List style={styles.List}>
                        <ListItem button onClick={this.changeComponent}>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText>Dashboard</ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.changeComponent}>
                            <ListItemIcon>
                                <Storage />
                            </ListItemIcon>
                            <ListItemText>Data</ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                    <List style={styles.List}>
                        <ListItem button onClick={this.changeComponent}>
                            <ListItemIcon>
                                <MoveToInbox />
                            </ListItemIcon>
                            <ListItemText>Inbox</ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.changeComponent}>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText>Profile</ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                    <List style={styles.List}>
                        <ListItem button onClick={this.handleLogout}>
                            <ListItemIcon>
                                <ExitToApp />
                            </ListItemIcon>
                            <ListItemText>Logout</ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
                <Toolbar />
                <div style={styles.Main}>
                    {this.showComponent()}
                </div>
            </div>
        );
    };
};

const drawerWidth = 240;

const styles = {
    Dashboard: {
        height: "100vh",
        width: "100%"
    },
    AppBar: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        backgroundColor: "#5f27cd"
    },
    ToolBar: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`
    },
    ToolBarIcon: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    Drawer: {
        flexShrink: 0,
    },
    DrawerBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    drawerOpen: {   

    },
    drawerClosed: {
        
    },
    List: {
        width: drawerWidth
    },
    Main: {
        padding: "20px",
        marginLeft: drawerWidth
    }
};

export default Dashboard;