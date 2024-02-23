import { useState } from 'react'
import { produits } from "./data/produits"
import ProductCard from './components/ProductCard'
import './App.css'

function App() {

  return (
    <>
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

    </>
  )
}

export default App
