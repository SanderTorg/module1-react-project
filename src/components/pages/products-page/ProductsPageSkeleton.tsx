import Card from "../../ui/card/Card";

export default function ProductsPageSkeleton() {
  return (
    <div>
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
