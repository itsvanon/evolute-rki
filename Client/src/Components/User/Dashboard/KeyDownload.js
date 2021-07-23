import React from 'react'
import {Button} from 'react-bootstrap'

function KeyDownload() {

    const handleClick = (e) => {
        console.log(e);
    }

    return (
        <div>
            <h1>Key Download</h1>
            <Button variant="secondary" size="lg" active onClick={handleClick}>
                Download
            </Button>
        </div>
    )
}

export default KeyDownload
