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
import "./styles/addnew.css";
import "./styles/admin.css";
import "./styles/cart.css";
import "./styles/edit.css";
import "./styles/creditcard.css";


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
            <Route path="/checkout/:id" element={<CheckoutAddress />}></Route>
            <Route path="/products/edit" element={<EditProduct />}></Route>
            <Route path="*" element={<ErrorScreen />}></Route>
            <Route path="/payment" element={<CreditCard />}></Route>
            <Route path="/invoice" element={<InvoiceScreen />}> </Route>
              {" "}
            
          </Routes>
          <Footer />
        </BrowserRouter>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
