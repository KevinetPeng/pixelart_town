import React from "react";
import Ground from "../Ground/Ground.js";
import PlotName from "../PlotName/PlotName.js";
import HouseSprite from "../HouseSprite/HouseSprite.js";
import TileSprite from "../TileSprite/TileSprite.js";
import grass1 from "../../assets/grass1.png";
import { Stage, Layer, Rect, Image, Group, Sprite } from "react-konva";
import PersonSprite from "../PersonSprite/PersonSprite.js";

function Plot(props) {
  const posX = props.x;
  const posY = props.y;
  const id = props.id;
  const house = props.house;

  return (
    <Layer id={id} x={posX} y={posY}>
      <Ground image={grass1}></Ground>
      <PlotName text="My Cool House" y={46 * 6 + 15}></PlotName>
      {/* <HouseSprite></HouseSprite> */}
      <PersonSprite x={200}></PersonSprite>
      <TileSprite x={170} y={20} item={"tree1"}></TileSprite>
      <HouseSprite house={house} x={20} y={100}></HouseSprite>
      <HouseSprite house={house - 10} x={100} y={100}></HouseSprite>
    </Layer>
  );
}

export default Plot;
