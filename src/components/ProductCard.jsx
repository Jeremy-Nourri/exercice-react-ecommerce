import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductCard ({ product }) {

    const value = useContext(CartContext);

    const { cart, setCart } = value;

    const addProductinCart = () => {
        setCart({
            produits: [...cart.produits, product],
            total: cart.total + product.prix
        })
        console.log(cart);
    }

  return (
    <article className="product">
      <h2>{product.nom}</h2>
      <p>{product.description}</p>
      <p>{product.prix} €</p>
      <button onClick={addProductinCart}>Ajouter au panier</button>
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

