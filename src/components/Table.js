import { React, Component } from 'react';

import { DataGrid } from '@material-ui/data-grid';

class Table extends Component {

    constructor() {
        super();
        this.state = {};
    };
    
    render() {
        const DataColumns= [{field: "id", headerName: "ID"},
                            {field: "Title", headerName: "Title"},
                            {field: "Desc", headerName: "Desc"},
                            {field: "Complete", headerName: "Complete"}];
        const DataRows = [{id: 1, Title: "Test", Desc: "This is a description", Complete: "true"},
                        {id: 2, Title: "Test", Desc: "This is a description", Complete: "true"},
                        {id: 3, Title: "Test", Desc: "This is a description", Complete: "true"},
                        {id: 4, Title: "Test", Desc: "This is a description", Complete: "true"},];
        return (
            <div>
                <div style={styles.Container}>
                    <div style={styles.DataGrid}>
                        <DataGrid BackgroundColor="white" rows={DataRows} columns={DataColumns} pageSize={10} autoHeight checkboxSelection />
                    </div>
                </div>
            </div>
        );
    };
};

const styles = {
    Container: {
        width: "100%",
        display: "flex"
    },
    DataGrid: {
        width: "100%",
        height: "650px",
        margin: "10px",
        backgroundColor: "#fff",
        borderRadius: "4px"
    }
};

export default Table;