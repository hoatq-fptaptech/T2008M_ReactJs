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
        <section className="section">
            <div className="container">
                <h1>{p.name}</h1>
                <img src={p.image}/>
                <p>{p.price}</p>
            </div>
        </section>
    );
}