import { useState, useEffect } from "react";

/* json format of a product (id, title, price, 
                    description, category, image, rating): 

    {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack,
    Fits 15 Laptops","price":109.95,"description":
    "Your perfect pack for everyday use and walks in the 
    forest. Stash your laptop (up to 15 inches) in the padded
    sleeve, your everyday","category":"men's clothing",
    "image":
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating":{"rate":3.9,"count":120}}
*/

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
                response.map((prod) => giveId(prod));
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

// Generate unique ids for a given product.
function giveId(prod) {
  prod.id = crypto.randomUUID();
}