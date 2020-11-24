import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function Profile() {
    return (
        <div>
            <div style={styles.Container}>
                <Paper style={styles.test} variant="outlined">
                    <Typography variant="button">Currently under construction</Typography>
                </Paper>
            </div>
        </div>
    );
};

const styles = {
    Container: {
        width: "100%",
        display: "flex"
    },
    test: {
        width: "100%",
        margin: "10px",
        padding: "20px"
    }
};

export default Profile;