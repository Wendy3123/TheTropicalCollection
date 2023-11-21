import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ErrorScreen from "./screens/ErrorScreen";
import ProductScreen from "./screens/ProductScreen";
import EachProductScreen from "./screens/EachProductScreen";
import CartScreen from "./screens/CartScreen";

import "./styles/bootstrap.custom.css";
import "./styles/index.css";
import "./styles/cards.css";

function App() {
  return (
    <div className="backgroundimage">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>
          <Route path="/products" element={<ProductScreen />}></Route>
          <Route path="/products/:id" element={<EachProductScreen />}></Route>
          <Route path="*" element={<ErrorScreen />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
