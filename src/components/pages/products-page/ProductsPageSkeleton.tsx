import Card from "../../card/Card";
import Navbar from "../../layout/header/Navbar";

export default function ProductsPageSkeleton() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Produktliste</h1>
      <p>(Side: )</p>
      <p>Søkefilter: Ingen</p>
      <Card>
        <ul>
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div key={id}>Loading...</div>
          ))}
        </ul>
      </Card>
    </div>
  );
}
