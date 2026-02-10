import { Link, useNavigate } from "@tanstack/react-router";
import { productsRoute } from "../../../routes/products/productsRouter";
import type { Product } from "../../../types/dummy-products/productTypes";
import styles from "./ProductsPage.module.css";

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

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { text: "Out of Stock", class: styles.outOfStock };
    if (stock <= 10)
      return { text: `Only ${stock} left`, class: styles.lowStock };
    return { text: "In Stock", class: styles.inStock };
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Products</h1>
        <p className={styles.subtitle}>
          Page {page} • {filteredProducts.length} products
          {query && ` matching "${query}"`}
        </p>
      </header>

      <section className={styles.searchSection}>
        <input
          type="text"
          placeholder="Search products..."
          className={styles.searchInput}
          value={query || ""}
          onChange={(e) => {
            navigate({
              to: productsRoute.to,
              search: {
                query: e.target.value || undefined,
                page: 1,
              },
            });
          }}
        />
      </section>

      <div className={styles.productGrid}>
        {filteredProducts.length === 0 ? (
          <p className={styles.noResults}>No products found</p>
        ) : (
          filteredProducts.map((product: Product) => {
            const discountedPrice = product.discountPercentage
              ? (
                  product.price *
                  (1 - product.discountPercentage / 100)
                ).toFixed(2)
              : null;
            const stockStatus = getStockStatus(product.stock);

            return (
              <article key={product.id} className={styles.productCard}>
                <Link
                  to="/products/$productId"
                  params={{ productId: String(product.id) }}
                  className={styles.productLink}
                >
                  <div className={styles.imageWrapper}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className={styles.productImage}
                    />
                    {product.discountPercentage > 0 && (
                      <span className={styles.discountBadge}>
                        -{Math.round(product.discountPercentage)}%
                      </span>
                    )}
                  </div>

                  <div className={styles.cardContent}>
                    <h2 className={styles.productTitle}>{product.title}</h2>

                    <div className={styles.priceRow}>
                      <span className={styles.price}>
                        ${discountedPrice || product.price}
                      </span>
                      {discountedPrice && (
                        <span className={styles.originalPrice}>
                          ${product.price}
                        </span>
                      )}
                    </div>

                    <div className={styles.ratingRow}>
                      <span className={styles.stars}>
                        {"★".repeat(Math.round(product.rating))}
                        {"☆".repeat(5 - Math.round(product.rating))}
                      </span>
                      <span className={styles.ratingValue}>
                        {product.rating?.toFixed(1)}
                      </span>
                    </div>

                    <span
                      className={`${styles.stockBadge} ${stockStatus.class}`}
                    >
                      {stockStatus.text}
                    </span>
                  </div>
                </Link>

                <div className={styles.cardContent}>
                  <button className={styles.addToCartBtn}>Add to Cart</button>
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
