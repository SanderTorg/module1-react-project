import { useEffect, useState } from "react";
import type { Product } from "../../types/dummy-products/productTypes";

function FetchProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://dummyjson.com/products`);
      const data = await res.json();
      console.log(data);
      setProducts(data.products);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchProducts;
