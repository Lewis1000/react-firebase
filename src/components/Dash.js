import { React, Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Folder from '@material-ui/icons/Folder';
import Equalizer from '@material-ui/icons/Equalizer';

class Dash extends Component {

    constructor() {
        super();
        this.state = {};
    };
    
    render() {
        let totalProjects = this.props.data ? (this.props.data.length) : (null);
        return (
            <div>
                <div style={styles.Container}>
                    <Paper style={styles.PaperMain} variant="outlined">
                        <Typography variant="button">Total Projects</Typography>
                        <div style={styles.PaperContainer}>
                            <Typography variant="h4">{totalProjects}</Typography>
                            <div style={styles.PaperIcon}>
                                <Avatar style={styles.Avatar} color="primary">
                                    <Folder />
                                </Avatar>
                            </div>
                        </div>
                    </Paper>
                    <Paper style={styles.PaperMain} variant="outlined">
                        <Typography variant="button">Custom Data</Typography>
                        <div style={styles.PaperContainer}>
                            <Typography variant="h4">100</Typography>
                            <div style={styles.PaperIcon}>
                                <Avatar style={styles.Avatar} color="primary">
                                    <Equalizer />
                                </Avatar>
                            </div>
                        </div>
                    </Paper>
                    <Paper style={styles.PaperMain} variant="outlined">
                        <Typography variant="button">Custom Data</Typography>
                        <div style={styles.PaperContainer}>
                            <Typography variant="h4">100</Typography>
                            <div style={styles.PaperIcon}>
                                <Avatar style={styles.Avatar} color="primary">
                                    <Equalizer />
                                </Avatar>
                            </div>
                        </div>
                    </Paper>
                    <Paper style={styles.PaperMain} variant="outlined">
                        <Typography variant="button">Custom Data</Typography>
                        <div style={styles.PaperContainer}>
                            <Typography variant="h4">100</Typography>
                            <div style={styles.PaperIcon}>
                                <Avatar style={styles.Avatar} color="primary">
                                    <Equalizer />
                                </Avatar>
                            </div>
                        </div>
                    </Paper>
                </div>
                <div style={styles.Container}>
                    <Paper style={styles.test} variant="outlined">
                        graph
                    </Paper>
                    <Paper style={styles.side} variant="outlined">
                        pie chart
                    </Paper>
                </div>
                <div style={styles.Container}>
                    <Paper style={styles.side} variant="outlined">
                        members
                    </Paper>
                    <Paper style={styles.test} variant="outlined">
                        recent projects
                    </Paper>
                </div>
            </div>
        );
    }
};

const styles = {
    Container: {
        width: "100%",
        display: "flex"
    },
    PaperMain: {
        width: "100%",
        margin: "10px",
        padding: "20px"
    },
    PaperContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center"
    },
    PaperIcon: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end"
    },
    Avatar: {
        padding: "2px",
        backgroundColor: "#5f27cd"
    },
    test: {
        height: "200px",
        margin: "10px",
        width: `calc(75% - 20px)`
    },
    side: {
        height: "200px",
        margin: "10px",
        width: "calc(25% - 20px)"
    }
};

export default Dash;