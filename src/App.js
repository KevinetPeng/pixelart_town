import React from "react";
import "./App.css";
import Plot from "./components/Plot/Plot";
import House from "./components/House/House";
import { render } from "react-dom";
import { Stage, Layer, Rect, Image } from "react-konva";

const WIDTH = 47 * 5;
const HEIGHT = 46 * 5;

const gridComponents = [];

function App() {
  for (var i = 0; i < 3; i++) {
    var num = 13 + i;
    gridComponents.push(<Plot id={i} x={i * WIDTH} y={0} house={num}></Plot>);
  }

  console.log(gridComponents);
  return (
    <div>
      <Stage
        x={0}
        y={0}
        width={window.innerWidth}
        height={window.innerHeight}
        draggable
      >
        {gridComponents}
      </Stage>
    </div>
  );
}

export default App;
