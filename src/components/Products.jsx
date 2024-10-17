import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ShopContext } from "./App";
import styles from '../styles/Products.module.css';

export default function Products() {
    const { products } = useContext(ShopContext);

    if (!products || products.length === 0) {
        return (
            <div className="prodsContainer">
                <p>No prodcuts available.</p>
            </div>
        );
    } 

    return (
        <div className={`prodsContainer ${styles.prodsContainer}`}>
            <h2 className={styles.h2}>Our Products</h2>

            <div className={`prodsGrid ${styles.prodsGrid}`}>
                {products.map((prod, index) => (
                    <ProductCard key={prod.id} index={index}/>
                ))}
            </div>
        </div>  
    );
}