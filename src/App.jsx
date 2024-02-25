import { CartContext } from "./context/CartContext";
import { useState } from "react";
/// DATA
import { produits } from "./data/produits";
import { panier } from "./data/panier";
/// COMPONENTS
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal/Modal";
/// CSS
import "./App.css";


function App() {

  const [cart, setCart] = useState(panier);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <Header setShowModal={setShowModal} cart={cart} />

        <main className="px-2">
          
          <h1 className="text-center my-3 font-bold text-xl">Nos produits</h1>

          <div className="flex flex-wrap justify-center">
            {showModal && (<Modal setShowModal={setShowModal} />)}

            {produits.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>

        <footer className="App-footer">
          <p>Ecommerce - 2024</p>
        </footer>
      </CartContext.Provider>
    </>
  );
}

export default App;
