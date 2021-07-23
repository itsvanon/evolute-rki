import React, {useState} from 'react'
import {DropdownButton, Dropdown} from 'react-bootstrap'

function KeyRequest() {

    const [dropdownValue, setDropdownValue] = useState('');
    const handleSelect = (e) => {
        setDropdownValue(e);
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
            >
                <Dropdown.Item eventKey="dukpt">DUKPT</Dropdown.Item>
                <Dropdown.Item eventKey="mskey">Master - Session Key</Dropdown.Item>
                <Dropdown.Item eventKey="aes">AES</Dropdown.Item>
                <Dropdown.Item eventKey="rsakeys">RSA Keys</Dropdown.Item>
            </DropdownButton>
            {dropdownValue === "dukpt" && (
                <> 
                    <br />
                    <br />
                    <h3>Dukpt Form</h3>
                </>
            ) 
            }
            {dropdownValue === "mskey" && (
                <>
                    <br />
                    <br />
                    <h3>Master Session Key</h3>
                </>
            ) 
            }
            {dropdownValue === "aes" && (
                <>
                    <br />
                    <br />
                    <h3>AES</h3>
                </>
            ) 
            }
            {dropdownValue === "rsakeys" && (
                <>
                    <br />
                    <br />
                    <h3>RSA Keys</h3>
                </>
            ) 
            }
        </div>
    )
}

export default KeyRequest;