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
    <article className="card card-compact w-64 bg-base-100 shadow-xl m-2">

        <figure className="h-[430px]">
          <img
            src={item.image}
            alt={item.nom}
            className="w-full h-full object-cover object-center"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.nom}
          </h2>
          <div className="badge badge-secondary">{item.categorie}</div>
          <p>{item.description}</p>
          <div className="card-actions justify-end font-semibold">
            Prix: {item.prix} €
          </div>
          <button className="btn btn-outline" onClick={addProductInCart}>Ajouter au panier</button>
        </div>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
