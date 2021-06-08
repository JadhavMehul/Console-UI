import { Button, Typography } from '@material-ui/core'
import React from 'react'

export default function Download() {
    return (
        <div className="pl-4 pt-2 pb-5">
            <h3>Download</h3>
            <Typography variant="h5">Download Console UI to get the compiled CSS and JavaScript source code.</Typography>

            <h4>Compiled Files</h4>
            <Typography variant="Paragraph" className="subParagraph">Download ready to use compiled code files of <b>Console-UI</b> to easily use it into your projects, which includes:</Typography>
            <ol>
                <li>Compiled files of CSS</li>
                <li>Compiled files of JavaScript plugins</li>
            </ol>
        
            <Button className="px-4 mb-3" style={{backgroundColor: "#1e88e5", color: "white"}}>Download</Button><br />
        
            <Typography variant="Paragraph" className="subParagraph">This dosent include documentation source filed.</Typography>

            <h4>CDN</h4>
            <Typography variant="Paragraph" className="subParagraph">If you dont want to download then you can also use Console UI with help of CDN.</Typography>

            <div className="code_section">
                <pre>
                    CDN Comming Soon....
                </pre>
            </div>
        
        </div>
    )
}
