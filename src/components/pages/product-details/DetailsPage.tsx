import { Link } from "@tanstack/react-router";
import { productDetailsRoute } from "../../../routes/product-details-route/productDetailsRoute";
import styles from "./DetailsPage.module.css";

function ProductDetailsPage() {
  const data = productDetailsRoute.useLoaderData();
  const discountedPrice = data.discountPercentage
    ? (data.price * (1 - data.discountPercentage / 100)).toFixed(2)
    : null;

  return (
    <div className={styles.container}>
      <Link to="/products" className={styles.backLink}>
        ← Back to Products
      </Link>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img src={data.thumbnail} alt={data.title} className={styles.image} />
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>

          <div className={styles.priceTag}>
            <span className={styles.price}>
              ${discountedPrice || data.price}
            </span>
            {discountedPrice && (
              <>
                <span className={styles.originalPrice}>${data.price}</span>
                <span className={styles.discount}>
                  -{Math.round(data.discountPercentage)}%
                </span>
              </>
            )}
          </div>

          <div className={styles.rating}>
            {"★".repeat(Math.round(data.rating))}
            {"☆".repeat(5 - Math.round(data.rating))}
            <span className={styles.ratingValue}>
              {data.rating?.toFixed(1)}
            </span>
          </div>

          <p className={styles.description}>{data.description}</p>

          <div
            className={`${styles.stock} ${data.stock > 0 ? styles.inStock : styles.outOfStock}`}
          >
            {data.stock > 0 ? `✓ In Stock (${data.stock})` : "✗ Out of Stock"}
          </div>

          <div className={styles.details}>
            <div className={styles.detailRow}>
              <span className={styles.label}>Brand</span>
              <span className={styles.value}>{data.brand || "N/A"}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.label}>Category</span>
              <span className={styles.value}>{data.category}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.label}>SKU</span>
              <span className={styles.value}>{data.sku}</span>
            </div>
          </div>

          <button className={styles.addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
