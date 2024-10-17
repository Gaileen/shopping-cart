import { useContext } from "react";
import { ShopContext } from "./App";
import QuantityButton from "./QuantityButton";
import styles from "../styles/Cart.module.css";

export default function Cart() {
    const { cart, getTotal } = useContext(ShopContext);

    if (cart.length === 0) {
        return (<p>Your cart is empty.</p>);
    }

    return (
        <div className="cartPage">
            <h2>Cart Summary</h2>

            <div className="cartList">
                <div className={styles.cartItem}>
                    <p className={styles.itemTitle}>Item</p>
                    <p>Price</p>
                    <p>Quantity</p>
                </div>
                {cart.map((prod) => (
                    <div key={prod.id} className={styles.cartItem}>
                        <img className={styles.itemImg} src={prod.image}></img>
                        <p className={styles.itemTitle}>{prod.title}</p>
                        <p className={styles.itemPrice}>$
                            {String(prod.price).length < 5
                            ? prod.price + "0"
                            : prod.price}
                        </p>
                        <p>
                            <QuantityButton init_quantity={prod.quantity} prod={prod}/>
                        </p>
                    </div>
                ))}
            </div>

            <div>
                <p className={styles.priceTotal}>Total: ${getTotal()}</p>
            </div>
        </div>
    );
}