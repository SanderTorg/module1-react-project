import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import TanstackPage from "../../components/pages/tanstack/TanstackPage";

const tanstackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tanstack",
  component: TanstackPage,
});

export { tanstackRoute };
