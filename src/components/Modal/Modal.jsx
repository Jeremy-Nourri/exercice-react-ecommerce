import { createPortal } from "react-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import PropTypes from 'prop-types';

export default function Modal({ setShowModal }) {

  const { cart, setCart } = useContext(CartContext);

    const closeModal = () => {
        setShowModal(false);
    }

    const clearCart = () => {
        setCart({
            produits: [],
            total: 0
        })
        setShowModal(false);
    }

    const deleProductInCard = (id) => {
        const newProducts = cart.produits.filter((element) => element.id !== id);
      
        const productToDelete = cart.produits.find((element) => element.id === id);
      
        const totalToRemove = productToDelete.item.prix * productToDelete.quantite;
      
        const total = (cart.total - totalToRemove).toFixed(2);
        setCart({
            produits: newProducts,
            total: total
        })
    }

    const handleChangeQuantity = (e) => {
        const newProducts = cart.produits.map((element) => {
            if (element.id === parseInt(e.target.id)) {
                return {
                    id: element.id,
                    item: element.item,
                    quantite: parseInt(e.target.value)
                }
            }
            return element;
        })
        const total = newProducts.reduce((acc, element) => {
            return acc + (element.item.prix * element.quantite);
        }, 0).toFixed(2);

        setCart({
            produits: newProducts,
            total: total
        })
    }

    return createPortal(
        <div className="modal">

            <button onClick={closeModal}>Fermer</button>
            
            <h1>Panier</h1>

            <ul>
                {cart.produits.map((product) => (
                    <li key={product.id}>
                        <p>{product.item.nom}</p>
                        <p>Prix : {product.item.prix} €</p>
                        <label htmlFor={product.id}>Quantité : </label>
                        <input 
                            type="number" 
                            value={product.quantite} 
                            onChange={handleChangeQuantity} 
                            id={product.id}
                            min={0}
                            max={10}
                        />
                        <button onClick={() => deleProductInCard(product.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>

            <p>Total : {cart.total} €</p>
            <button onClick={clearCart}>Vider le panier</button>

        </div>,
        document.body
    )

}

Modal.propTypes = {
    setShowModal: PropTypes.func.isRequired
}
    