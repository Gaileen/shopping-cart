import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "./App";
import styles from "../styles/Cart.module.css";

export default function QuantityButton({ init_quantity, prod }) {
    const { addToCart, delFromCart, changeQty } = useContext(ShopContext);

    // Handle case when user changes qty with input box.
    const handleInputChange = (e) => {
        let usr_input = parseInt(e.target.value);
        if (!usr_input) {
            usr_input = 0;
        }
        changeQty(prod, usr_input);
    };

    return (
        <>
            {/* arrow syntax so btn only calls when clicked
                (else onClick will call on render) */}
            <button onClick={() => delFromCart(prod)}>-</button>
            <input 
                type="text" 
                value={init_quantity}
                onChange={handleInputChange}
                min="0" 
                className={styles.qtyInput}
            />
            <button onClick={() => addToCart(prod)}>+</button>
        </>
    );
}

QuantityButton.propTypes = {
    init_quantity: PropTypes.number.isRequired,
    prod: PropTypes.object.isRequired,
};