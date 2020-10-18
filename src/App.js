import React from "react";
import "./App.css";
import Plot from "./components/Plot/Plot";
import House from "./components/House/House";
import { render } from "react-dom";
import { Stage, Layer, Rect, Image } from "react-konva";

const WIDTH = 300;
const HEIGHT = 300;

const gridComponents = [];

function App() {
  for (var i = 0; i < 400; i += WIDTH) {
    gridComponents.push(<Plot id={i} x={i} y={0}></Plot>);
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
