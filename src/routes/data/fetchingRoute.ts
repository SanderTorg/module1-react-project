import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import DataPage from "../../components/pages/data/DataPage";

const fetchingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/data",
  component: DataPage,
});

export { fetchingRoute };
