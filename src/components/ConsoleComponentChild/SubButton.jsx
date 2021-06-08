import { Typography } from '@material-ui/core'
import React from 'react'
import CZ from '../snippets/CZ'
import CZS from '../snippets/CZS'
import EQ from '../snippets/EQ'
import IC from '../snippets/IC'
import OP from '../snippets/OP'

export default function SubButton() {
    return (
        <>
            <h5>Simple Buttons</h5>
            <div id="simple_button">
                <div className="ui">
                    <button className="btn btn-sky">Sky Button</button>
                    <button className="btn btn-stone">Stone Button</button>
                    <button className="btn btn-grass">Grass Button</button>
                    <button className="btn btn-stop">Stop Button</button>
                    <button className="btn btn-warning">Warning Button</button>
                    <button className="btn btn-orange">Orange Button</button>
                    <button className="btn btn-info">Info Button</button>
                    <button className="btn btn-light">Light Button</button>
                    <button className="btn btn-dark">Dark Button</button>
                </div>
                <div className="code_section">
                    <pre>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-sky</span><IC/><CZ /> SKY BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-stone</span><IC/><CZ /> STONE BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-grass</span><IC/><CZ /> GRASS BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-stop</span><IC/><CZ /> STOP BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-warning</span><IC/><CZ /> WARNING BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-orange</span><IC/><CZ /> ORANGE BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-info</span><IC/><CZ /> INFO BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-light</span><IC/><CZ /> LIGHT BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-dark</span><IC/><CZ /> DARK BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                    </pre>
                </div>
            </div>  

            <h5>Simple Transparent Buttons</h5>
            <div id="simple_transparent_button">
                <div className="ui">
                    <button class="btn btn-transparent-sky">Sky Button</button>
                    <button class="btn btn-transparent-stone">Stone Button</button>
                    <button class="btn btn-transparent-grass">Grass Button</button>
                    <button class="btn btn-transparent-stop">Stop Button</button>
                    <button class="btn btn-transparent-warning">Warning Button</button>
                    <button class="btn btn-transparent-orange">Orange Button</button>
                    <button class="btn btn-transparent-info">Info Button</button>
                    <button class="btn btn-transparent-light">Light Button</button>
                    <button class="btn btn-transparent-dark">Dark Button</button>
                </div>
                <div className="code_section">
                    <pre>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-transparent-sky</span><IC/><CZ /> SKY BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-transparent-stone</span><IC/><CZ /> STONE BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-transparent-grass</span><IC/><CZ /> GRASS BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-transparent-stop</span><IC/><CZ /> STOP BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-transparent-warning</span><IC/><CZ /> WARNING BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-transparent-orange</span><IC/><CZ /> ORANGE BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-transparent-info</span><IC/><CZ /> INFO BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-transparent-light</span><IC/><CZ /> LIGHT BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                        <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-transparent-dark</span><IC/><CZ /> DARK BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                    </pre>
                </div>
            </div>

            <h5>Small Buttons</h5>
            <Typography variant="Paragraph">For small buttons you just need to add class <b>btn-small</b> it works with all kind of buttons</Typography>
            <div id="small_buttons">
                <div className="ui pt-3">
                    <button class="btn btn-sky btn-small">Sky Button</button>
                    <button class="btn btn-stone btn-small">Stone Button</button>
                    <button class="btn btn-grass btn-small">Grass Button</button>
                    <button class="btn btn-stop btn-small">Stop Button</button>
                    <button class="btn btn-warning btn-small">Warning Button</button>
                </div>
                <div className="code_section">
                    <pre>
                    <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-sky btn-small</span><IC/><CZ /> SKY BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                    <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-stone btn-small</span><IC/><CZ /> STONE BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                    <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-grass btn-small</span><IC/><CZ /> GRASS BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                    <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-stop btn-small</span><IC/><CZ /> STOP BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                    <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-warning btn-small</span><IC/><CZ /> WARNING BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                    </pre>
                </div>
            </div>

            <h5>Large Button</h5>
            <Typography variant="Paragraph">For Large buttons you just need to add class <b>btn-large</b> it works with all kind of buttons</Typography>
            <div id="large_buttons">
                <div className="ui pt-3">
                    <button class="btn btn-sky btn-large">Sky Button</button>
                    <button class="btn btn-stone btn-large">Stone Button</button>
                    <button class="btn btn-grass btn-large">Grass Button</button>
                    <button class="btn btn-stop btn-large">Stop Button</button>
                </div>
                <div className="code_section">
                    <pre>
                    <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-sky btn-large</span><IC/><CZ /> SKY BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                    <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-stone btn-large</span><IC/><CZ /> STONE BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                    <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-grass btn-large</span><IC/><CZ /> GRASS BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                    <OP /><span className="tag_name">button </span><span className="class_name">class</span><EQ/><IC/><span className="class">btn btn-stop btn-large</span><IC/><CZ /> STOP BUTTON <OP/><CZS/><span className="tag_name">button</span><CZ/><br/>
                    </pre>
                </div>
            </div>

            





        </>
    )
}
