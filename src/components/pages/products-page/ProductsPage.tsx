import { Link, useNavigate } from "@tanstack/react-router";
import { productsRoute } from "../../../routes/products/productsRouter";

export default function ProductListPage() {
  // Get the validated search parameters for this route
  // The hook knows 'query' is string|undefined and 'page' is number
  const { query, page } = productsRoute.useSearch();
  const allProducts = productsRoute.useLoaderData();

  // Filter products based on the validated query
  const filteredProducts = query
    ? allProducts.filter((p: { id: number; name: string }) =>
        p.name.toLowerCase().includes(query.toLowerCase()),
      )
    : allProducts;

  const navigate = useNavigate();
  // (Pagination logic would use the 'page' parameter here)

  return (
    <div>
      <h1>Produktliste</h1>
      <p>(Side: {page})</p>
      <p>Søkefilter: {query ? `"${query}"` : "Ingen"}</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={query || ""}
          onChange={(e) => {
            navigate({
              to: ".",
              search: (prev: { query?: string; page?: number }) => ({
                ...prev,
                query: e.target.value,
              }),
              replace: true,
            });
          }}
        />
      </form>

      {/* Display filtered products */}
      <ul>
        {filteredProducts.map((product: { id: number; name: string }) => (
          <div key={product.id}>
            <Link
              to="."
              search={{
                query: product.name,
              }}
            >
              {product.name}
            </Link>
          </div>
        ))}
      </ul>

      {/* Input/Links to change search params would go here (see next section) */}
    </div>
  );
}
