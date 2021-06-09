import React from 'react'
import CZ from '../snippets/CZ'
import CZS from '../snippets/CZS'
import EQ from '../snippets/EQ'
import IC from '../snippets/IC'
import OP from '../snippets/OP'

export default function SubPlate() {
    return (
        <>
            <h5>Text Plate</h5>
            <div className="text_plate">
                <div className="ui">
                    <h1>This is a text <span class="plate plate-stone">Plate</span></h1>
                    <h2>This is a text <span class="plate plate-stone">Plate</span></h2>
                    <h3>This is a text <span class="plate plate-stone">Plate</span></h3>
                    <h4>This is a text <span class="plate plate-stone">Plate</span></h4>
                    <h5>This is a text <span class="plate plate-stone">Plate</span></h5>
                    <h6>This is a text <span class="plate plate-stone">Plate</span></h6>
                </div>
                <div className="code_section">
                    <pre>
                        <OP /><span className="tag_name">h1</span><CZ />This is a text <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-stone</span><IC/><CZ /> Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><OP/><CZS/><span className="tag_name">h1</span><CZ/><br/>
                        <OP /><span className="tag_name">h2</span><CZ />This is a text <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-stone</span><IC/><CZ /> Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><OP/><CZS/><span className="tag_name">h2</span><CZ/><br/>
                        <OP /><span className="tag_name">h3</span><CZ />This is a text <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-stone</span><IC/><CZ /> Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><OP/><CZS/><span className="tag_name">h3</span><CZ/><br/>
                        <OP /><span className="tag_name">h4</span><CZ />This is a text <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-stone</span><IC/><CZ /> Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><OP/><CZS/><span className="tag_name">h4</span><CZ/><br/>
                        <OP /><span className="tag_name">h5</span><CZ />This is a text <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-stone</span><IC/><CZ /> Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><OP/><CZS/><span className="tag_name">h5</span><CZ/><br/>
                        <OP /><span className="tag_name">h6</span><CZ />This is a text <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-stone</span><IC/><CZ /> Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><OP/><CZS/><span className="tag_name">h6</span><CZ/><br/>
                    </pre>
                </div>
            </div>

            <h5>Normal Plate</h5>
            <div className="normal_plate">
                <div className="ui">
                    <span class="plate plate-sky">Sky Plate</span>
                    <span class="plate plate-stone">Stone Plate</span>
                    <span class="plate plate-grass">Grass Plate</span>
                    <span class="plate plate-stop">Stop Plate</span>
                    <span class="plate plate-warning">Warning Plate</span>
                    <span class="plate plate-orange">Orange Plate</span>
                    <span class="plate plate-info">Info Plate</span>
                    <span class="plate plate-light">Light Plate</span>
                    <span class="plate plate-dark">Dark Plate</span>
                </div>
                <div className="code_section">
                    <pre>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-sky</span><IC/><CZ /> Sky Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-stone</span><IC/><CZ /> Stone Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-grass</span><IC/><CZ /> Grass Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-stop</span><IC/><CZ /> Stop Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-warning</span><IC/><CZ /> Warning Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-orange</span><IC/><CZ /> Orange Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-info</span><IC/><CZ /> Info Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-light</span><IC/><CZ /> Light Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-dark</span><IC/><CZ /> Dark Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                    </pre>
                </div>
            </div>

            <h5>Notification Plate</h5>
            <div className="notification_plate">
                <div className="ui">
                    <span class="plate plate-notification plate-sky">Sky Plate</span>
                    <span class="plate plate-notification plate-stone">Stone Plate</span>
                    <span class="plate plate-notification plate-grass">Grass Plate</span>
                    <span class="plate plate-notification plate-stop">Stop Plate</span>
                    <span class="plate plate-notification plate-warning">Warning Plate</span>
                    <span class="plate plate-notification plate-orange">Orange Plate</span>
                    <span class="plate plate-notification plate-info">Info Plate</span>
                    <span class="plate plate-notification plate-light">Light Plate</span>
                    <span class="plate plate-notification plate-dark">Dark Plate</span>
                </div>
                <div className="code_section">
                    <pre>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-notification plate-sky</span><IC/><CZ /> Sky Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-notification plate-stone</span><IC/><CZ /> Stone Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-notification plate-grass</span><IC/><CZ /> Grass Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-notification plate-stop</span><IC/><CZ /> Stop Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-notification plate-warning</span><IC/><CZ /> Warning Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-notification plate-orange</span><IC/><CZ /> Orange Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-notification plate-info</span><IC/><CZ /> Info Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-notification plate-light</span><IC/><CZ /> Light Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                        <OP/><span className="tag_name">span </span><span className="class_name">class</span><EQ/><IC/><span className="class">plate plate-notification plate-dark</span><IC/><CZ /> Dark Plate <OP/><CZS/><span className="tag_name">span</span><CZ/><br/>
                    </pre>
                </div>
            </div>
        </>
    )
}
