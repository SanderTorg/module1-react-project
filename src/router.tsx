import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./routes/rootRoute";
import { homeRoute } from "./routes/home/homeRoute";
import { productsRoute } from "./routes/products/productsRouter";
import { productDetailsRoute } from "./routes/product-details-route/productDetailsRoute";
import { paginationRoute } from "./routes/pagination/paginationRoute";
import { formRoute } from "./routes/forms/formRoute";
import { fetchingRoute } from "./routes/data/fetchingRoute";

const routeTree = rootRoute.addChildren([
  homeRoute,
  productsRoute,
  productDetailsRoute,
  paginationRoute,
  formRoute,
  fetchingRoute,
]);
export const router = createRouter({ routeTree });
