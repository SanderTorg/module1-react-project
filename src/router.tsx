import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./routes/rootRoute";
import { homeRoute } from "./routes/home/homeRoute";
import { productsRoute } from "./routes/products/productsRouter";
import { productDetailsRoute } from "./routes/product-details-route/productDetailsRoute";
import { paginationRoute } from "./routes/pagination/paginationRoute";

const routeTree = rootRoute.addChildren([
  homeRoute,
  productsRoute,
  productDetailsRoute,
  paginationRoute,
]);
export const router = createRouter({ routeTree });
