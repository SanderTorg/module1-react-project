import { Link, useNavigate } from "@tanstack/react-router";
import Card from "../../ui/card/Card";
import { productsRoute } from "../../../routes/products/productsRouter";
import type { Product } from "../../../types/dummy-products/productTypes";

export default function ProductListPage() {
  // Get the validated search parameters for this route
  // The hook knows 'query' is string|undefined and 'page' is number
  const { query, page } = productsRoute.useSearch();
  const navigate = useNavigate();
  const { products }: { products: Product[] } = productsRoute.useLoaderData();

  // Filter products based on the validated query
  const filteredProducts = query
    ? products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()),
      )
    : products;

  // (Pagination logic would use the 'page' parameter here)

  return (
    <div>
      <h1>Produktliste</h1>
      <p>(Side: {page})</p>
      <p>Søkefilter: {query ? `"${query}"` : "Ingen"}</p>

      <section>
        <input
          type="text"
          onChange={(e) => {
            console.log("value", e.target.value);
            navigate({
              to: productsRoute.to,
              search: {
                query: e.target.value,
              },
            });
          }}
        />
      </section>

      <ul>
        {filteredProducts.map((product: Product) => (
          <div key={product.id}>
            <Link
              to="/products/$productId"
              params={{
                productId: product.id,
              }}
            >
              <Card title={product.title}>{product.price}</Card>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
