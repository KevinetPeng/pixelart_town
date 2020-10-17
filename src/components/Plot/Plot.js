import React from "react";
import House from "../House/House.js"
import house1 from "../../assets/house1.png"

function Plot(props) {


    return (
        <div style={{
            display: "inline-block",
            height: "300px",
            width: "300px",
            border: "2px solid black",
        }}>
            <House image={house1}></House>
        </div>
    )
}

export default Plot;