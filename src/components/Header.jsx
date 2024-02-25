import PropTypes from "prop-types";

export default function Header({ setShowModal, cart }) {

    const totalItems = cart.produits.reduce((acc, element) => {
        return acc + element.quantite;
    }, 0);

  return (
    <header className="bg-primary text-white p-2">
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Ecommerce</a>
        </div>
        <div className="flex-none">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-neutral btn-circle"
                onClick={() => setShowModal(true)}
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{totalItems}</span>
              </div>
            </div>

        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired
};
