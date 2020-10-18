import React from "react";
import House from "../House/House.js";
import Ground from "../Ground/Ground.js";
import house1 from "../../assets/house1.png";
import grass1 from "../../assets/grass1.png";
import { Stage, Layer, Rect, Image, Group } from "react-konva";

function Plot(props) {
  return (
    // <div style={{
    //     display: "inline-block",
    //     height: "250px",
    //     width: "250px",
    //     border: "2px solid black",
    //     backgroundImage: `url(${grass1})`
    // }}>
    //     <House image={house1}></House>
    // </div>
    <Layer>
      <Rect x={0} y={0} width={300} height={300} fill="green" stroke="black" />
      <Ground image={grass1}></Ground>
      <House image={house1}></House>
    </Layer>
  );
}

export default Plot;
