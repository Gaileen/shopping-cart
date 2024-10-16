import { App } from "./components/App";
import Home from "./components/Home";
import Products from './components/Products';
import Cart from './components/Cart';
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,   
        children: [
            { index: true, element: <Home /> },
            { path: "/products", element: <Products /> },
            { path: "/cart", element: <Cart /> },
        ],
    },
];

export default routes;