import React, {useState} from 'react'
import {DropdownButton, Dropdown, Form, Button, Tabs, Tab} from 'react-bootstrap'

function KeyRequest() {

    var localStorArr = [];
    var time = new Date();

    const [dropdownValue, setDropdownValue] = useState('');
    const [key, setKey] = useState('');
    const [tabKey, setTabKey] = useState('')

    const handleSelect = (e) => {
        setDropdownValue(e);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        var currStor = localStorage.getItem("keyReqs");

        var timestamp = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();

        var reqParas = {
            "key": key,
            "username": "vanon28",
            "keyType": dropdownValue,
            "timestamp": timestamp
        };

        localStorArr.push(currStor);
        localStorArr.push(JSON.stringify(reqParas));
        localStorage.setItem("keyReqs", localStorArr);
        localStorArr.push(localStorage.getItem("keyReqs"));
    }
    return (
        <div>
            <DropdownButton
                id="dropdown-button-dark-example2"
                variant="secondary"
                menuVariant="dark"
                title="Select Key"
                className="mt-2"
                onSelect={handleSelect}
                style={
                    {
                        position: "fixed",
                        top: "22%",
                        left: "10%"
                    }
                }
            >
                <Dropdown.Item eventKey="dukpt">DUKPT</Dropdown.Item>
                <Dropdown.Item eventKey="mskey">Master - Session Key</Dropdown.Item>
                <Dropdown.Item eventKey="aes">AES</Dropdown.Item>
                <Dropdown.Item eventKey="rsakeys">RSA Keys</Dropdown.Item>
            </DropdownButton>
            {dropdownValue === "dukpt" && (
                <> 
                    <Form style={
                        {
                            position: "fixed", 
                            top: "35%",
                            left: "40%",
                            borderStyle: "solid",
                            borderColor: "white",
                            padding: "5%", 
                            borderRadius: "8px",
                            backgroundColor: "#302727"
                        }
                    } onSubmit={handleSubmit}>
                        <Form.Label style={{color: "white"}}>DUKPT Key</Form.Label>
                        <br /><br />
                        <Tabs
                            id="controlled-tab"
                            activeKey={tabKey}
                            onSelect={(k) => setTabKey(k)}
                            className="mb-3"
                        >
                        <Tab eventKey="ipekip" title="IPEK">
                            <Form.Group className="mb-3" controlId="dukptForm">
                                <Form.Control type="text" placeholder="Enter" value={key} onChange={e => setKey(e.target.value)} /><br />
                                <Button variant="secondary" type="submit">
                                    Request
                                </Button>
                            </Form.Group>
                        </Tab>
                        <Tab eventKey="compip" title="Component">
                            <Form.Group className="mb-3" controlId="dukptForm">
                                <Form.Control type="text" placeholder="Enter" value={key} onChange={e => setKey(e.target.value)} /><br />
                                <Button variant="secondary" type="submit">
                                    Request
                                </Button>
                            </Form.Group>
                        </Tab>
                        </Tabs>
                    </Form>
                </>
            ) 
            }
            {dropdownValue === "mskey" && (
                <>
                    <Form style={
                        {
                            position: "fixed", 
                            top: "35%",
                            left: "40%",
                            borderStyle: "solid",
                            borderColor: "white",
                            padding: "5%", 
                            borderRadius: "8px",
                            backgroundColor: "#302727"
                        }
                    } onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="dukptForm">
                            <Form.Label style={{color: "white"}}>Master Session Key</Form.Label>
                            <Form.Control type="text" placeholder="Enter" value={key} onChange={e => setKey(e.target.value)} />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Request
                        </Button>
                    </Form>
                </>
            ) 
            }
            {dropdownValue === "aes" && (
                <>
                    <Form style={
                        {
                            position: "fixed", 
                            top: "35%",
                            left: "40%",
                            borderStyle: "solid",
                            borderColor: "white",
                            padding: "5%", 
                            borderRadius: "8px",
                            backgroundColor: "#302727"
                        }
                    } onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="dukptForm">
                            <Form.Label style={{color: "white"}}>AES Key</Form.Label>
                            <Form.Control type="text" placeholder="Enter" value={key} onChange={e => setKey(e.target.value)} />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Request
                        </Button>
                    </Form>
                </>
            ) 
            }
            {dropdownValue === "rsakeys" && (
                <>
                    <Form style={
                        {
                            position: "fixed", 
                            top: "35%",
                            left: "40%",
                            borderStyle: "solid",
                            borderColor: "white",
                            padding: "5%", 
                            borderRadius: "8px",
                            backgroundColor: "#302727"
                        }
                    } onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="dukptForm">
                            <Form.Label style={{color: "white"}}>RSA Key</Form.Label>
                            <Form.Control type="text" placeholder="Enter" value={key} onChange={e => setKey(e.target.value)} />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Request
                        </Button>
                    </Form>
                </>
            ) 
            }
        </div>
    )
}

export default KeyRequest;