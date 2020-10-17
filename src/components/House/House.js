import React from "react";

function House(props) {
    const width = props.width;
    const height = props.height;
    const image = props.image;

    return (
        <div
            style={{
                display: "inline-block",
                height: `${height}px`,
                width: `${width}px`,
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                position: "absolute",
                top: "10px",
            }}
        />
    )
}

export default House;