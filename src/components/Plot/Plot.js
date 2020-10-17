import React from "react";
import House from "../House/House.js"
import house1 from "../../assets/house1.png"
import grass1 from "../../assets/grass1.png"

function Plot(props) {


    return (
        <div style={{
            display: "inline-block",
            height: "250px",
            width: "250px",
            border: "2px solid black",
            backgroundImage: `url(${grass1})`
        }}>
            <House image={house1}></House>
        </div>
    )
}

export default Plot;