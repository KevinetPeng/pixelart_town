import React from "react";

function House(props) {
    const image = props.image;

    return (
        <img src={image} alt="House"></img>
    )
}

export default House;