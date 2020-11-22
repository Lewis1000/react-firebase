import React from 'react';

import Paper from '@material-ui/core/Paper';

function Dash() {
    return (
        <div>
            <div style={styles.Container}>
                <Paper style={styles.test} variant="outlined">
                    
                </Paper>
                <Paper style={styles.test} variant="outlined">
                    
                </Paper>
                <Paper style={styles.test} variant="outlined">
                    
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
        width: "100%",
        height: "150px",
        margin: "10px"
    }
};

export default Dash;