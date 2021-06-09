import React from 'react'
import CZ from '../snippets/CZ'
import CZS from '../snippets/CZS'
import EQ from '../snippets/EQ'
import IC from '../snippets/IC'
import OP from '../snippets/OP'

export default function SubCard() {
    return (
        <>
            <h5>Image Card</h5>
            <div className="image_card">
                <div className="ui">
                    <div className="card" style={{width: "287px"}}>
                        <img src="https://picsum.photos/287/200" className="card-top-img" alt="..." />
                    </div>
                </div>
                <div className="code_section">
                    <pre>
                        <OP/><span className="tag_name">div </span><span className="class_name">class</span><EQ/><IC/><span className="class">card</span><IC/> <span className="class_name">style</span><EQ/><IC/><span className="class">width: 287px</span><IC/><CZ/><br/>
                        &nbsp;<OP/><span className="tag_name">img </span><span className="class_name">src</span><EQ/><IC/><span className="class">...</span><IC/> <span className="class_name">class</span><EQ/><IC/><span className="class">card-top-img</span><IC/> <span className="class_name">alt</span><EQ/><IC/><span className="class">...</span><IC/> <CZS/><CZ/><br/>
                        <OP/><CZS/><span className="tag_name">div</span><CZ/>
                    </pre>
                </div>
            </div>

            <h5>Normal Card</h5>
            <div className="normal_card">
                <div className="ui">
                    <div className="card" style={{width: "287px"}}>
                        <img src="https://picsum.photos/287/200" className="card-top-img" alt="..." />
                        <div class="card-body">
                            <h2 class="card-title">Card Title</h2>
                        </div>
                    </div>
                </div>
                <div className="code_section">
                    <pre>
                        <OP/><span className="tag_name">div </span><span className="class_name">class</span><EQ/><IC/><span className="class">card</span><IC/> <span className="class_name">style</span><EQ/><IC/><span className="class">width: 287px</span><IC/><CZ/><br/>
                        &nbsp;<OP/><span className="tag_name">img </span><span className="class_name">src</span><EQ/><IC/><span className="class">...</span><IC/> <span className="class_name">class</span><EQ/><IC/><span className="class">card-top-img</span><IC/> <span className="class_name">alt</span><EQ/><IC/><span className="class">...</span><IC/> <CZS/><CZ/><br/>
                        &nbsp;&nbsp;<OP/><span className="tag_name">div </span><span className="class_name">class</span><EQ/><IC/><span className="class">card-body</span><IC/><CZ/><br/>
                        &nbsp;&nbsp;&nbsp;<OP/><span className="tag_name">h2 </span><span className="class_name">class</span><EQ/><IC/><span className="class">card-title</span><IC/><CZ/>Card Title<OP/><CZS/><span className="tag_name">h2</span><CZ/><br/>
                        &nbsp;&nbsp;<OP/><CZS/><span className="tag_name">div</span><CZ/><br/>
                        <OP/><CZS/><span className="tag_name">div</span><CZ/>
                    </pre>
                </div>
            </div>
        </>
    )
}
