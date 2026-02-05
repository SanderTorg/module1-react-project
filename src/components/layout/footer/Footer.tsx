import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small className={styles.text}>
        &copy; {new Date().getFullYear()} Mitt React-Nettsted. Alle rettigheter
        forbeholdt.
      </small>
    </footer>
  );
}
