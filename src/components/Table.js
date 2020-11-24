import { React, Component } from 'react';

import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

class Table extends Component {

    constructor() {
        super();
        this.state = {};
    };

    getDataRows = () => {
        let DataArray = [];
        let DataId = 1;
        this.props.data.forEach(element => {
            let NewData = {id: DataId, Title: element.title, Desc: element.desc, Complete: element.complete};
            DataId++;
            DataArray.push(NewData);
        });
        return (DataArray);
    };
    
    render() {
        const DataColumns= [{field: "id", headerName: "ID"},
                            {field: "Title", headerName: "Title"},
                            {field: "Complete", headerName: "Complete"},
                            {field: "Desc", headerName: "Desc"}];
        let DataRows = this.props.data ? (this.getDataRows()) : (null);

        return (
            <div>
                <div style={styles.Container}>
                     <div style={styles.DataGridButtons}>
                        <Button style={styles.Button} size="large" variant="contained" color="primary">Add Data</Button>
                        <Button style={styles.Button} size="large" variant="contained" color="primary">Edit Data</Button>
                        <Button style={styles.Button} size="large" variant="contained" color="primary">Remove Data</Button>
                    </div>
                    <div style={styles.DataGrid}>
                        <DataGrid autoHeight rows={DataRows} columns={DataColumns} pageSize={10} checkboxSelection />
                    </div>
                </div>
            </div>
        );
    };
};

const styles = {
    Container: {
        width: "100%"
    },
    DataGrid: {
        width: `calc(100% - 20px)`,
        margin: "10px"
    },
    DataGridButtons: {
        width: "100%"
    },
    Button: {
        margin: 10,
        paddingTop: "12px",
        paddingBottom: "12px",
        backgroundColor: "#5f27cd"
    }
};

export default Table;