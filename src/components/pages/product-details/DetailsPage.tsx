import { productDetailsRoute } from "../../../routes/product-details-route/productDetailsRoute";

function ProductDetailsPage() {
  const data = productDetailsRoute.useLoaderData();
  return (
    <div>
      <h1>Product Details Page</h1>
      <p>Product ID: {data.id}</p>
      <p>Title: {data.title}</p>
      <p>Description: {data.description}</p>
      <p>Price: ${data.price}</p>
    </div>
  );
}

export default ProductDetailsPage;
