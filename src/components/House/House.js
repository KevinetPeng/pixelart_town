import React from "react";
import "konva";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";

function House(props) {
  const image = props.image;

  const HouseImage = () => {
    const [imageUrl] = useImage(image);
    return <Image image={imageUrl} />;
  };

  return <HouseImage />;
  //   return <img src={image} alt="House"></img>;
}

export default House;
