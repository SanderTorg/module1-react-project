import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./routes/rootRoute";
import { homeRoute } from "./routes/home/homeRoute";
import { productsRoute } from "./routes/products/productsRouter";

const routeTree = rootRoute.addChildren([homeRoute, productsRoute]);
export const router = createRouter({ routeTree });
