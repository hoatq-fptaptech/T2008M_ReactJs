import React from "react";
export default function Detail(props) {
    const detail = props.product;
    return (
        <h1>{detail.name}</h1>
    );
}