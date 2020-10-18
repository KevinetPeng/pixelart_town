import React from "react";
import "konva";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";

function Gound(props) {
  const image = props.image;

  const GroundImage = () => {
    const [imageUrl] = GroundImage(image);
    return <Image image={imageUrl} />;
  };

  return <GroundImage />;
  //   return <img src={image} alt="House"></img>;
}

export default Ground;
