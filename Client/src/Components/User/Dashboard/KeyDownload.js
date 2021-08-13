import React from 'react'
import {Button} from 'react-bootstrap'

function KeyDownload() {

    const handleClick = (e) => {
        console.log(e);
    }

    return (
        <div>
            <h1 style={{position: "fixed", top: "32.5%", left: "40%", textDecoration:"underline", textDecorationColor:"white"}}>Key Download</h1>
            <Button variant="secondary" size="lg" active onClick={handleClick} style={
                {
                    position: "fixed", 
                    top: "45%", 
                    left: "45%"
                }
            }>
                Download
            </Button>
        </div>
    )
}

export default KeyDownload
