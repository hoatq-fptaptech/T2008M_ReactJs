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
        id:1,
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:5
    },
    {
        id:2,
        name:"Hiphop paint",
        image:"imgs/product.jpg",
        price: 12,
        star:1
    },
    {
        id:3,
        name:"T Shirt 122",
        image:"imgs/product.jpg",
        price: 12,
        star:2
    },
    {
        id:4,
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        id:5,
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:4.5
    },
    {
        id:6,
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        id:7,
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        id:8,
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        id:9,
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        id:10,
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    }

];
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
                <Route exact path="/detail/:id">
                    <Detail productlist={products}/>
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
