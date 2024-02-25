import { createPortal } from "react-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import PropTypes from "prop-types";

export default function Modal({ setShowModal }) {
  const { cart, setCart } = useContext(CartContext);

  const closeModal = () => {
    setShowModal(false);
  };

  const clearCart = () => {
    setCart({
      produits: [],
      total: 0,
    });
    setShowModal(false);
  };

  const deleProductInCard = (id) => {
    const newProducts = cart.produits.filter((element) => element.id !== id);

    const productToDelete = cart.produits.find((element) => element.id === id);

    const totalToRemove = productToDelete.item.prix * productToDelete.quantite;

    const total = (cart.total - totalToRemove).toFixed(2);
    setCart({
      produits: newProducts,
      total: total,
    });
  };

  const handleChangeQuantity = (e) => {
    const newProducts = cart.produits.map((element) => {
      if (element.id === parseInt(e.target.id)) {
        return {
          id: element.id,
          item: element.item,
          quantite: parseInt(e.target.value),
        };
      }
      return element;
    });
    const total = newProducts
      .reduce((acc, element) => {
        return acc + element.item.prix * element.quantite;
      }, 0)
      .toFixed(2);

    setCart({
      produits: newProducts,
      total: total,
    });
  };

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="text-center bg-white p-4 w-1/2 h-96 overflow-y-auto">
        <div className="text-right">
          <button
            className="btn-circle btn-secondary btn text-right"
            onClick={closeModal}
          >
            X
          </button>
        </div>

        <table className="table-sm w-full text-sm">
            <caption className="font-bold text-center my-2 p-2 bg-gray-200">Panier</caption>
          <thead >
            <tr className="">
              <th>Article</th>
              <th>Quantité</th>
              <th></th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {cart.produits.map((product) => (
              <tr key={product.id}>
                <td>{product.item.nom}</td>
                <td>
                  <input
                    className="w-10 text-center border border-gray-500"
                    type="number"
                    value={product.quantite}
                    onChange={handleChangeQuantity}
                    id={product.id}
                    min={0}
                    max={10}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-outline btn-xs"
                    onClick={() => deleProductInCard(product.id)}
                  >
                    x
                  </button>
                </td>
                <td>{product.item.prix} €</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className=" bg-gray-200 font-bold">
                <td>Total</td>
                <td></td>
                <td></td>
                <td>{cart.total} €</td>
            </tr>
          </tfoot>
        </table>

        <button className="block btn btn-sm btn-secondary mt-3 mx-auto">Passer commande</button>

        <button className="block btn btn-sm bg-gray-200 mt-3 mx-auto" onClick={clearCart}>Vider le panier</button>
      </div>
    </div>,
    document.body
  );
}

Modal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};
