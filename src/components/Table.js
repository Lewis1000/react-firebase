import React from 'react';

import Paper from '@material-ui/core/Paper';

function Table() {
    return (
        <div>
            <div style={styles.Container}>
                <Paper style={styles.test} variant="outlined">
                    <h1 style={styles.h1}>Table</h1>
                </Paper>
            </div>
        </div>
    );
};

const styles = {
    Container: {

    },
    test: {
        width: "100%"
    }
};

export default Table;