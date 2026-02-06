import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import ProductDetailsPage from "../../components/pages/product-details/DetailsPage";
import type { Product } from "../../types/dummy-products/productTypes";

const productDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/$productId",
  component: ProductDetailsPage,
  loader: async ({ params }) => await fetchProductId(params.productId),
});

export { productDetailsRoute };

async function fetchProductId(productId: string | number): Promise<Product> {
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await response.json();
    console.log("Product details loader called", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to fetch product details:", error.message);
      throw error;
    } else {
      console.error(
        "An unexpected error occurred while fetching product details.",
        error,
      );
      throw new Error(
        "An unknown error occurred while fetching product details.",
      );
    }
  }
}
