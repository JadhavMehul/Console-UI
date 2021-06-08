import { Typography } from '@material-ui/core'
import React from 'react'
import CZ from '../snippets/CZ'
import EQ from '../snippets/EQ'
import OP from '../snippets/OP'
import IC from '../snippets/IC'
import CZS from '../snippets/CZS'

export default function Installation() {
    return (
        <div className="pl-4 pt-2 pb-5">
            <h3>Installation</h3>
            <Typography variant="h5">Get Started with Console-UI, by installing it to your website and web application.</Typography>

            <h4>Quick start</h4>
            <Typography variant="Paragraph" className="subParagraph">Want to quickly start adding Console-UI to your projects? Just use our free cdn or get started by downloading our files and connecting it to your projects.</Typography>
        
            <h4>Starter template</h4>
            <Typography variant="Paragraph" className="subParagraph">For getting start with coding paste the link of cdn or downloaded files in your HTML/HTML5 files. To understand it more correctly checkout example shown below. </Typography>
        
            <div className="code_section">
                <pre>
                    <OP /><span className="tag_name">!doctype html</span><CZ /><br />
                    <OP /><span className="tag_name">html</span><CZ /><br />
                    &nbsp;<OP /><span className="tag_name">head</span><CZ /><br /> 
                    &nbsp;&nbsp;<OP /><span className="tag_name">meta </span><span className="class_name">charset</span><EQ /><IC /><span className="class">utf-8</span><IC /><CZ /><br /> 
                    &nbsp;&nbsp;<OP /><span className="tag_name">meta </span><span className="class_name">name</span><EQ /><IC /><span className="class">viewport </span><span className="class_name">content</span><EQ /><IC /><span className="class">width=device-width, initial-scale=1, shrink-to-fit=no</span><IC /><CZ /><br /> <br />
                    &nbsp;&nbsp;<OP /><span className="cmnt">!---------- Console ui CSS ----------</span><CZ /><br />
                    &nbsp;&nbsp;<OP /><span className="tag_name">link </span><span className="class_name">rel</span><EQ /><IC /><span className="class">stylesheet </span><span className="class_name">href</span><EQ /><IC /><span className="class">./styles/console-ui.css</span><IC /><CZ /><br /><br />
                    &nbsp;&nbsp;<OP /><span className="tag_name">title</span><CZ />Hello, World!<OP /><CZS /><span className="tag_name">title</span><CZ /><br /><br />
                    &nbsp;<OP /><CZS /><span className="tag_name">head</span><CZ /><br /> 
                    &nbsp;<OP /><span className="tag_name">body</span><CZ /><br /><br />
                    &nbsp;<OP /><span className="tag_name">h1</span><CZ />Console UI<OP /><CZS /><span className="tag_name">h1</span><CZ /><br /><br />
                    &nbsp;<OP /><CZS /><span className="tag_name">body</span><CZ /><br /> 
                    <OP /><CZS /><span className="tag_name">html</span><CZ /><br />
                </pre>
            </div>

            <Typography variant="Paragraph" className="subParagraph">That’s all you need for overall page requirements.</Typography>
        

        </div>
    )
}
