import PropTypes from 'prop-types';

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

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        nom: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        prix: PropTypes.number.isRequired,
        categorie: PropTypes.string.isRequired
    }).isRequired
}

