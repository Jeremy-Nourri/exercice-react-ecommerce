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
      <CartContext.Provider value={{cart, setCart}}>

        <header className="App-header">
          <p>Ecommerce</p>
          <button onClick={() => setShowModal(true)}>Panier</button>
        </header>
        
        <main className="App-main">

          {showModal && <Modal setShowModal={setShowModal} />}
        
          <h1>Produits</h1>
        
          {produits.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        
        </main>
        
        <footer className="App-footer">
          <p>Ecommerce - 2024</p>
        </footer>

      </CartContext.Provider>
    </>

  );
}

export default App;
