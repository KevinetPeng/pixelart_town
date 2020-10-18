import React from "react";
import House from "../House/House.js";
import Ground from "../Ground/Ground.js";
import PlotName from "../PlotName/PlotName.js";
import house1 from "../../assets/house1.png";
import grass1 from "../../assets/grass1.png";
import useImage from "use-image";
import { Stage, Layer, Rect, Image, Group, Sprite } from "react-konva";
import PersonSprite from "../PersonSprite/PersonSprite.js";

function Plot(props) {
  const posX = props.x;
  const posY = props.y;
  const id = props.id;

  return (
    <Layer id={id} x={posX} y={posY}>
      <Ground image={grass1}></Ground>
      <House image={house1}></House>
      <PlotName text="My Cool House" x={200} y={200}></PlotName>
      {/* <HouseSprite></HouseSprite> */}
      <PersonSprite></PersonSprite>
    </Layer>
  );
}

export default Plot;
