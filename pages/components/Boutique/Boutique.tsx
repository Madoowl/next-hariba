import ProductCard from "../ProductCard/ProductCard";

function Boutique() {
  return (
    <>
      <h1 className="place-content-center text-3xl my-8">Boutique</h1>
      <div className="grid grid-cols-4 gap-2 mx-16">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}

export default Boutique;
