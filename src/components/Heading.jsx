import { Link } from "react-router-dom";
import styles from '../styles/Heading.module.css';

function Links() {
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
                        <h2>Cart</h2>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default function Heading() {
    return (
        <header className={styles}>
            {/* <div className="logoContainer"> */}
                <h1>Small Shop</h1>
                <div className="logo"></div>
            {/* </div> */}
            <Links />
        </header>
    );
}