import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "./App";
import styles from '../styles/Heading.module.css';

function Links() {
    const { cart } = useContext(ShopContext);

    return (
        <nav>
            <ul>
                <li>
                    <Link to={`/`}>
                        <h2>Home</h2>
                    </Link>
                </li>
                <li>
                    <Link to={`products`}>
                        <h2>Products</h2>
                    </Link>
                </li>
                <li>
                    <Link to={`cart`}>
                        <h2>Cart ({cart.length})</h2>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default function Heading() {
    return (
        <header className={styles}>
            <h1>Small Shop</h1>
            <div className="logo"></div>
            <Links />
        </header>
    );
}