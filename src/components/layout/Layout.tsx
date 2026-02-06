import { Outlet } from "@tanstack/react-router";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";

function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
