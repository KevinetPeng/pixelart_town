import React from "react";
import "konva";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";

function Ground(props) {
  const image = props.image;

  const GroundImage = () => {
    const [imageUrl] = useImage(image);
    return <Image image={imageUrl} width={300} height={300} />;
  };

  return <GroundImage />;
  //   return <img src={image} alt="House"></img>;
}

export default Ground;
