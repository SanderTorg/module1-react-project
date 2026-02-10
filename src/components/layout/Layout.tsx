import { Outlet } from "@tanstack/react-router";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";
import Aside from "./aside/Aside";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <aside className={styles.aside}>
        <Aside />
      </aside>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
