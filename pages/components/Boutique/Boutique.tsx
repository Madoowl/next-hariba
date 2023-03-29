import { fetchAPI } from "@/lib/api-rest";
import ProductCard from "../ProductCard/ProductCard";

function Boutique() {
  const url: string = "/products";

  let products: any = [];

  //get data from api
  fetchAPI(url).then((data) => {
    products = data;
    console.log(products);
  });

  return (
    <>
      <h1 className="place-content-center text-3xl my-8">Boutique</h1>
      <div className="grid grid-cols-4 gap-2 mx-16">
        {products.map((product: any) => (
          <ProductCard key={product.id} props={product.attributes} />
        ))}
      </div>
    </>
  );
}

export default Boutique;
