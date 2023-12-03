import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EditProduct from "./components/EditProduct.jsx";
import HomeScreen from "./screens/HomeScreen";
import ErrorScreen from "./screens/ErrorScreen";
import ProductScreen from "./screens/ProductScreen";
import EachProductScreen from "./screens/EachProductScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import SignUpScreen from "./screens/SignUpScreen.jsx";
import CheckoutAddress from "./screens/CheckoutAddress.jsx";
import CurrentUserProvider from "./contexts/CurrentUser.js";
import CartScreen from "./screens/CartScreen.jsx";
import AddNew from "./components/AddNew";
import AdminScreen from "./screens/AdminScreen";
import CreditCard from "./screens/CreditCard";
import InvoiceScreen from "./screens/InvoiceScreen.jsx";
import "./styles/bootstrap.custom.css";
import "./styles/index.css";
import "./styles/cards.css";
// import "./styles/addnew.css";
import "./styles/admin.css";
import "./styles/cart.css";
import "./styles/edit.css";
import "./styles/creditcard.css";

//PLEASE DONT DELETE THE BASE_URL LINE 29 ITS FOR DEPLOYMENT USE ON RENDER.COM SO LEAVE IT UNCOMMENTED IF NOT USING
// export const BASE_URL = "https://the-tropical-collection-be.onrender.com";
export const BASE_URL = "http://localhost:5001";

//all components now have access to shopContextProvider
function App() {
  return (
    <div className="backgroundimage">
      <CurrentUserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/products" element={<ProductScreen />} />
            <Route path="/products/:id" element={<EachProductScreen />} />
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route path="/signup" element={<SignUpScreen />}></Route>
            <Route path="/admin" element={<AdminScreen />} />
            <Route path="/products/new" element={<AddNew />} />
            <Route path="/checkout/:id" element={<CheckoutAddress />} />
            <Route path="/products/edit/:id" element={<EditProduct />} />
            <Route path="*" element={<ErrorScreen />}></Route>
            <Route path="/payment" element={<CreditCard />} />
            <Route path="/invoice" element={<InvoiceScreen />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
