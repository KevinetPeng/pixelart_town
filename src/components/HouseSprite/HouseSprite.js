import React from "react";
import "konva";
import { Stage, Layer, Image, Sprite } from "react-konva";
import useImage from "use-image";
import houseSprite from "../../assets/house_sprite.png";

function HouseSprite(props) {
  const house = props.house;
  const posX = props.x;
  const posY = props.y;
  const [imageUrl] = useImage(houseSprite);

  return (
    <Sprite
      image={imageUrl}
      x={posX}
      y={posY}
      animations={{
        house1: [0, 16, 99, 80],
        house2: [112, 0, 144, 96],
        house3: [274, 15, 92, 129],
        house4: [370, 24, 108, 104],
        house5: [494, 6, 84, 74],
        house6: [592, 10, 64, 70],
        house7: [672, 9, 208, 87],
        house8: [900, 1, 105, 191],
        house9: [531, 105, 62, 71],
        house10: [598, 121, 60, 55],
        house11: [670, 102, 84, 74],
        house12: [768, 99, 112, 77],
        house13: [16, 101, 64, 75],
        house14: [96, 98, 64, 78],
        house15: [162, 115, 60, 61],
        house16: [212, 348, 104, 68],
        house17: [320, 297, 80, 119],
        house18: [408, 324, 64, 76],
        house19: [562, 339, 61, 61],
        house20: [517, 515, 116, 77],
        house21: [778, 477, 93, 163],
        house22: [771, 648, 60, 72],
        house23: [832, 646, 64, 74],
        house24: [306, 779, 64, 71],
        house25: [848, 805, 160, 187],
      }}
      animation={"house" + house}
      frameRate={6}
      frameIndex={0}
      ref={(node) => {
        if (node && !node.isRunning()) node.start();
      }}
    />
  );
}

export default HouseSprite;
