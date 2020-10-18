import React from "react";
import "konva";
import { Stage, Layer, Image, Text } from "react-konva";
import useImage from "use-image";

function PlotName(props) {
  const text = props.text;

  return <Text text={text} fontSize={15}></Text>;
  //   return <img src={image} alt="House"></img>;
}

export default PlotName;
