import React from 'react';

import Paper from '@material-ui/core/Paper';

function Profile() {
    return (
        <div>
            <div style={styles.Container}>
                <Paper style={styles.side} variant="outlined">
                    
                </Paper>
                <Paper style={styles.test} variant="outlined">

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

export default Profile;