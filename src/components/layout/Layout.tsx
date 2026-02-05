import { Outlet } from "@tanstack/react-router";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";

function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Layout;
