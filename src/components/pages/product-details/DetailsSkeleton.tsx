import styles from "./DetailsSkeleton.module.css";

function DetailsSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.backLink}></div>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageSkeleton}></div>
        </div>

        <div className={styles.info}>
          <div className={styles.title}></div>

          <div className={styles.priceTag}>
            <div className={styles.price}></div>
            <div className={styles.originalPrice}></div>
            <div className={styles.discount}></div>
          </div>

          <div className={styles.rating}></div>

          <div className={styles.description}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.lineShort}></div>
          </div>

          <div className={styles.stock}></div>

          <div className={styles.details}>
            <div className={styles.detailRow}></div>
            <div className={styles.detailRow}></div>
            <div className={styles.detailRow}></div>
          </div>

          <div className={styles.addToCart}></div>
        </div>
      </div>
    </div>
  );
}

export default DetailsSkeleton;
