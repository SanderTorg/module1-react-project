import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import PaginationPage from "../../components/pages/pagination/PaginationPage";

const paginationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pagination",
  component: PaginationPage,
});

export { paginationRoute };
