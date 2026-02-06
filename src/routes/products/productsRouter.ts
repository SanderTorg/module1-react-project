import { createRoute } from "@tanstack/react-router";
import ProductListPage from "../../components/pages/products-page/ProductsPage";
import { rootRoute } from "../rootRoute";
import ProductsPageError from "../../components/pages/products-page/ProductsPageError";
import ProductsPageSkeleton from "../../components/pages/products-page/ProductsPageSkeleton";
import type { ProductsResponse } from "../../types/dummy-products/productTypes";

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductListPage,
  loader: () => fetchProducts(),
  pendingComponent: ProductsPageSkeleton,
  errorComponent: ProductsPageError,

  validateSearch: (searchParams) => {
    // searchParams is the raw object, e.g., { query: 'ski', page: '1' }
    // Return an object with validated/typed parameters
    return {
      // Ensure 'query' is a string or undefined if not present
      query: searchParams?.query ? String(searchParams.query) : undefined,
      // Ensure 'page' is a number, default to 1 if invalid/missing
      page: Number(searchParams?.page) || 1,
    };
  },
});

export { productsRoute };

async function fetchProducts(): Promise<ProductsResponse> {
  try {
    const response = await fetch(`https://dummyjson.com/products`);
    const data = await response.json();
    console.log("Products loader called", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to fetch products:", error.message);
      throw error;
    } else {
      console.error(
        "An unexpected error occurred while fetching products.",
        error,
      );
      throw new Error("An unknown error occurred while fetching products.");
    }
  }
}
