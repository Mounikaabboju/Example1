import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
//import ProductList from "./Components/ProductList/ProductList";
//import ProductDetails from "./Components/ProductDetails/ProductDetails";
//import Cart from "./Components/Cart/Cart";

ReactDOM.render(
  //<Provider store={store}>
  <Router>
    <Route path="/" component={App} />
  </Router>,
  //</Provider>
  document.getElementById("root")
);
