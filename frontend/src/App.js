import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ErrorScreen from "./screens/ErrorScreen";
import ProductScreen from "./screens/ProductScreen";
import EachProductScreen from "./screens/EachProductScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import SignUpScreen from "./screens/SignUpScreen.jsx";
import CurrentUserProvider from "./contexts/CurrentUser.js";
import CartScreen from "./screens/CartScreen.jsx";
import AddNew from "./components/AddNew";
import AdminScreen from "./screens/AdminScreen";
import "./styles/bootstrap.custom.css";
import "./styles/index.css";
import "./styles/cards.css";
import "./styles/addnew.css";
import EditProduct from "./components/EditProduct.jsx";

//all components now have access to shopContextProvider
function App() {
  return (
    <div className="backgroundimage">
      <CurrentUserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/cart" element={<CartScreen />}></Route>
            <Route path="/products" element={<ProductScreen />}></Route>
            <Route path="/products/:id" element={<EachProductScreen />}></Route>
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route path="/signup" element={<SignUpScreen />}></Route>
            <Route path="/admin" element={<AdminScreen />} />
            <Route path="/products/new" element={<AddNew />} />
            <Route path="/product/:id/edit" element={<EditProduct />}></Route>
            <Route path="*" element={<ErrorScreen />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
