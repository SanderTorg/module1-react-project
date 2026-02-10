import { Link } from "@tanstack/react-router";
import { homeRoute } from "../../../routes/home/homeRoute";
import { productsRoute } from "../../../routes/products/productsRouter";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to={homeRoute.to} className={styles.navLink}>
        Home
      </Link>
      <Link to={productsRoute.to} className={styles.navLink}>
        Products
      </Link>
    </nav>
  );
}
