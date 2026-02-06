import { createRootRoute } from "@tanstack/react-router";
import Layout from "../components/layout/Layout";

export const rootRoute = createRootRoute({
  component: Layout,
});
