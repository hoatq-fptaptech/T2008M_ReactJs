import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Detail from "./Detail";
import Category from "./Category";
import Login from "./Login";
const products=[
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:1
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:2
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:4.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    }

];
const detailProduct = {
    name:"San pham gioi thieu",
    image: "imgs/product.jpg"
}
function App() {
  return (
  <BrowserRouter>
    <div className="App">
            <Header/>
            <Nav/>
            <Switch>
                <Route exact path="/">
                    <Main productlist={products}/>
                </Route>
                <Route exact path="/detail">
                    <Detail product={detailProduct}/>
                </Route>
                <Route exact path="/category">
                    <Category/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
            </Switch>
        </div>
  </BrowserRouter>
  );
}

export default App;
