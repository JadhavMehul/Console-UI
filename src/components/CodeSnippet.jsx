import React from 'react'
import CZ from './snippets/CZ'
import EQ from './snippets/EQ'
import OP from './snippets/OP'
import IC from './snippets/IC'
import CS from './snippets/CS'
import CZS from './snippets/CZS'

export default function CodeSnippet() {
    return (
        <div className="code_section">
            <pre>
                <OP /><span className="tag_name">div </span><CS /><EQ /><IC /><span className="class">dvdvfd</span><IC /><CZ /> 
                <OP /><CZS /><CZ /> 
                
            </pre>
        </div>
    )
}
