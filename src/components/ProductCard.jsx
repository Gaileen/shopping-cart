import { useContext } from "react";
import { ShopContext } from "./App";
import PropTypes from "prop-types";
import styles from '../styles/Products.module.css';

// json format of a product (id, title, price, 
//     description, category, image, rating): 

export default function ProductCard({ index }) {
    const { products, addToCart } = useContext(ShopContext);

    return (
        <div className={`card ${styles.card}`}>
            <img className={styles.cardImg} src={products[index].image}></img>
            
            <div className={styles.cardText}>
                <p>{products[index].title}</p>
                <p>$
                    {String(products[index].price).length < 5
                    ? products[index].price + "0"
                    : products[index].price}
                </p>
            </div>

            <button onClick={() => addToCart(products[index])}>ADD TO CART</button>
        </div>
    );
}

ProductCard.propTypes = {
    index: PropTypes.number.isRequired,
};