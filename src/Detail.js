import React from "react";
import {useParams} from 'react-router-dom';
export default function Detail(props) {
    const products = props.productlist;
    // lay tham so id tren url
    let {id} = useParams();
    var p = null;
    for(let i=0;i<products.length;i++){
        if(products[i].id == id){
            p = products[i];
            break;
        }
    }
    if(p===null)
        return (<h1>Ko tim thay san pham</h1>);
    return (
        <div>
        <h1>{p.name}</h1>
        <h2>{p.price}</h2>
        <h2>{p.star}</h2>
        </div>
    );
}