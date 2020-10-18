import React from "react";
import "./App.css";
import Plot from "./components/Plot/Plot";
import { render } from "react-dom";
import { Stage, Layer, Rect, Image } from "react-konva";

const WIDTH = 300;
const HEIGHT = 300;

const grid = [
  ["red", "yellow"],
  ["green", "blue"],
];

const gridComponents = [];
gridComponents.push(<Plot></Plot>);

function App() {
  return (
    <div>
      <Stage
        x={0}
        y={0}
        width={window.innerWidth}
        height={window.innerHeight}
        // width={500}
        // height={500}
        draggable
      >
        {gridComponents}
      </Stage>
    </div>
  );
}

export default App;
