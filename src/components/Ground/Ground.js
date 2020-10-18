import React from "react";
import "konva";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import TileSprite from "../TileSprite/TileSprite";

function Ground(props) {
  const image = props.image;
  const [imageUrl] = useImage(image);

  const GroundImage = () => {
    const [imageUrl] = useImage(image);
    return <Image image={imageUrl} width={300} height={300} />;
  };
  const groundImage = [];
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      groundImage.push(
        <TileSprite x={i * 47} y={j * 46} item="grass1"></TileSprite>
      );
    }
    groundImage.push(
      <TileSprite x={i * 47} y={5 * 46} item="rock1"></TileSprite>
    );
  }

  return groundImage;
  //   return <img src={image} alt="House"></img>;
}

export default Ground;
