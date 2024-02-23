import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const value = useContext(CartContext);

  const { cart, setCart } = value;

  const { id, item } = product;

  const addProductInCart = () => {

    const newProducts = cart.produits.map((element) => {
      if (element.id === id) {
        return {
          id: id,
          item: item,
          quantite: element.quantite + 1,
        };
      } else {
        return element;
      }
    });

    const isProductInCart = cart.produits.find((element) => element.id === id);
    if (!isProductInCart) {
      newProducts.push({
        id: id,
        item: item,
        quantite: 1,
      });
    }

    const newTotal = (cart.total + item.prix).toFixed(2);

    setCart({
      produits: newProducts,
      total: Number(newTotal),
    });

    console.log(cart);
  };

  return (
    <article className="product">
      <img src={item.image} alt={item.nom} />
      <h2>{item.nom}</h2>
      <p>{item.categorie}</p>
      <p>{item.description}</p>
      <p>{item.prix} €</p>

      <button onClick={addProductInCart}>Ajouter au panier</button>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
