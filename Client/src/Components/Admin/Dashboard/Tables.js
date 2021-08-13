import React from 'react'
import Table from 'react-bootstrap/Table';

function Tables() {
    return (
        <div>
            <Table striped bordered hover variant="dark" style={{position: "fixed", top: "25%", left: "25%", marginLeft: "auto", marginRight: "auto", width: "50%"}}>
            <thead>
                <tr>
                <th>Sl. No:</th>
                <th>Requested By</th>
                <th>Request Type</th>
                <th>Request Status</th>
                <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Pending</td>
                    <td>28/06/2021 18:54:33</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Completed</td>
                    <td>28/06/2021 18:54:33</td>
                </tr>
            </tbody>
            </Table>
        </div>
    )
}

export default Tables;