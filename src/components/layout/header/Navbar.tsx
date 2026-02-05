import { Link } from "@tanstack/react-router";
import { homeRoute } from "../../../routes/home/homeRoute";

import { productsRoute } from "../../../routes/products/productsRouter";

export default function Navbar() {
  return (
    <nav>
      <Link to={homeRoute.to}>Home </Link>
      <Link to={productsRoute.to}>Products </Link>
    </nav>
  );
}
