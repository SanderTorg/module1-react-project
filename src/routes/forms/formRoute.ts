import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import FormPage from "../../components/pages/forms/FormPage";

const formRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/form",
  component: FormPage,
});

export { formRoute };
