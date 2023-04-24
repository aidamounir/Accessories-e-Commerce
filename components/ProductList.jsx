import ProductCard from "./ProductCard";
import { isEmpty } from "lodash";

const ProductList = ({ products }) => {
  if (isEmpty(products)) return null;
  return (
    <div className="bg-white md:mx-10 my-5 py-5">
      <div className="  px-5 m-auto sm:px-6 lg:max-w-7xl ">
        <div className="grid grid-cols-1 	 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
