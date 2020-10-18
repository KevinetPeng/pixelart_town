import React from "react";
import "konva";
import { Stage, Layer, Image, Text } from "react-konva";
import useImage from "use-image";

function PlotName(props) {
  const text = props.text;
  const posX = props.x;
  const posY = props.y;

  return <Text text={text} fontSize={15} x={posX} y={posY}></Text>;
}

export default PlotName;
