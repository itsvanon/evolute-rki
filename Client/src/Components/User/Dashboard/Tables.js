import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'

function Tables() {

    const [tableData, setTableData] = useState('');

    useEffect(() => {
        setTableData(JSON.parse(localStorage.getItem("keyReqs")));
        }, [])
    
    console.log(tableData.length);

    return (
        <div>
            <Table striped bordered hover variant="dark" style={{position: "fixed", top: "25%", left: "25%", marginLeft: "auto", marginRight: "auto", width: "50%"}}>
            <thead>
                <tr>
                <th>Request Type</th>
                <th>Request Status</th>
                <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{tableData.keyType}</td>
                    <td>Active</td>
                    <td>{tableData.timestamp}</td>
                </tr>
            </tbody>
            </Table>
        </div>
    )
}

export default Tables;