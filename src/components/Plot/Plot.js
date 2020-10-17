import React from "react";
import House from "../House/House.js"
import house1 from "../../assets/house1.png"

function Plot(props) {


    return (
        <House image={house1} width={300} height={300}></House>
    )
}

export default Plot;