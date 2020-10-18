import React from "react";
import "konva";
import { Stage, Layer, Image, Sprite } from "react-konva";
import useImage from "use-image";

var animations = {
  standing: [0, 0, 80, 94],
};

function PersonSprite(props) {
  const [imageUrl] = useImage(
    "https://opengameart.org/sites/default/files/hero_spritesheet_0.png"
  );

  return (
    <Sprite
      image={imageUrl}
      animations={{
        standing: [0, 0, 80, 94],
        walking: [
          0,
          94,
          80,
          94,
          80,
          94,
          80,
          94,
          160,
          94,
          80,
          94,
          240,
          94,
          80,
          94,
          320,
          94,
          80,
          94,
          400,
          94,
          80,
          94,
        ],
      }}
      animation={"walking"}
      frameRate={6}
      frameIndex={0}
      ref={(node) => {
        if (node && !node.isRunning()) node.start();
      }}
    />
  );
}

export default PersonSprite;
