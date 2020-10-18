import React from "react";
import "konva";
import { Stage, Layer, Image, Sprite } from "react-konva";
import useImage from "use-image";
import characterSpriteSheet from "../../assets/huge_spritesheet.png";

function TileSprite(props) {
  const item = props.item;
  const posX = props.x;
  const posY = props.y;
  const [imageUrl] = useImage(characterSpriteSheet);
  return (
    <Sprite
      image={imageUrl}
      animations={{
        tree1: [517, 277, 54, 107],
        tree2: [40, 460, 44, 51],
        grass1: [512, 801, 47, 46],
        rock1: [512, 1220, 47, 58],
      }}
      x={posX}
      y={posY}
      animation={item}
      frameRate={6}
      frameIndex={0}
      ref={(node) => {
        if (node && !node.isRunning()) node.start();
      }}
    />
  );
}

export default TileSprite;
