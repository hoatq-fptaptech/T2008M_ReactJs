import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Detail from "./Detail";
import Category from "./Category";
import Login from "./Login";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products:[]
        }
    }
    componentDidMount() {
        // lay du lieu tu api roi cho vao products
        fetch("https://foodgroup.herokuapp.com/api/today-special")
            .then(rs=>rs.json())
            .then(rs=> {
                this.setState({
                    products:rs.data
                })
            })
    }
    render() {
        const products = this.state.products;
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

}

export default App;
