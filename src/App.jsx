import { CartContext } from "./context/CartContext";
import { useState } from "react";
/// DATA
import { produits } from "./data/produits";
import { panier } from "./data/panier";
/// COMPONENTS
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
        <header className="App-header">
          <p>Ecommerce</p>
          <button onClick={() => setShowModal(true)}>Panier</button>
        </header>

        <main>
          <h1>Produits</h1>
          <div className="flex flex-wrap">
            {showModal && <Modal setShowModal={setShowModal} />}

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
