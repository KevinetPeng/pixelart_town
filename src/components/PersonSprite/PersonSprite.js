import React from "react";
import "konva";
import { Stage, Layer, Image, Sprite } from "react-konva";
import useImage from "use-image";
import characterSpriteSheet from "../../assets/character_spritesheet.png";

function PersonSprite(props) {
  const [imageUrl] = useImage(characterSpriteSheet);
  return (
    <Sprite
      image={imageUrl}
      animations={{
        standing: [0, 0, 80, 94],
        walking: [40, 460, 44, 51],
      }}
      animation={"walking"}
      frameRate={6}
      frameIndex={0}
      ref={(node) => {
        if (node && !node.isRunning()) node.start();
      }}
      draggable
    />
  );
}

export default PersonSprite;
