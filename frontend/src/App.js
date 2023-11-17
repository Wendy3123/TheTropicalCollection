import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <>
      <main className="py-3">
        <Container>
          <h1>Welcome to The Tropical Collection</h1>
        </Container>
      </main>
      <ProductScreen />
      <Footer />
    </>
  );
}

export default App;
