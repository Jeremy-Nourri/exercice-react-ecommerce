import { CartContext } from "./context/CartContext";
import { useState } from "react";
import { produits } from "./data/produits";
import { panier } from "./data/panier";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [cart, setCart] = useState(panier);

  return (
    <>
      <CartContext.Provider value={{cart, setCart}}>

        <header className="App-header">
          <p>Ecommerce</p>
          <button>Panier</button>
        </header>
        
        <main className="App-main">
        
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
