import { Link } from "@tanstack/react-router";
import { homeRoute } from "../../../routes/home/homeRoute";
import { productsRoute } from "../../../routes/products/productsRouter";
import styles from "./Navbar.module.css";
import { paginationRoute } from "../../../routes/pagination/paginationRoute";
import { formRoute } from "../../../routes/forms/formRoute";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to={homeRoute.to} className={styles.navLink}>
        Home
      </Link>
      <Link to={productsRoute.to} className={styles.navLink}>
        Products
      </Link>
      <Link to={paginationRoute.to} className={styles.navLink}>
        Pagination
      </Link>

      <Link to={formRoute.to} className={styles.navLink}>
        Form
      </Link>
    </nav>
  );
}
