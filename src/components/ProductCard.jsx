export default function ProductCard ({ product }) {
  return (
    <article className="product">
      <h2>{product.nom}</h2>
      <p>{product.description}</p>
      <p>{product.prix} €</p>
      <button>Ajouter au panier</button>
    </article>
  )
}
