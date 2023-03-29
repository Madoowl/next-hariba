function ProductCard({
  props,
}: {
  props: {
    title: string;
    description: string;
    price: number;
    slug: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
}) {
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="/images/samples/flower.jpg"
            alt="product sample"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {props.title}
            </h5>
          </a>
          <div className="flex items-center justify-between mt-6">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {props.price}€
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ajouter au panier
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
