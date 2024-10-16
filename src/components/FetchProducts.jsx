import { useState, useEffect } from "react";

// Custom hook to fetch and return products from API.
export const useProducts = () => {
    const [products, setProducts] = useState(null);
    // Deleted error state var since we defined ErrorPage.
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let ignore = false;
        fetch('https://fakestoreapi.com/products', { mode: "cors" })
          .then((response) => {
            if (response.status >= 400) {
                throw new Error("server error");
            }
            return response.json();
          })
          .then((response) => {
            if (!ignore) {
                setProducts(response);
            }
        })
          .catch((error) => {
            console.error("Fetch error:", error);
          })
          .finally(() => setLoading(false));
          return () => {
            ignore = true; // Ignore stale responses.
          };
    }, []);

    return { products, loading };
};