import HeadInfo from "../components/Head";
import ProductList from "../components/ProductList";
import { getProductsInCollection } from "../lib/shopify";

export default function Shop({ products }) {
  return (
    <>
      <HeadInfo title="Shop Categories | InJestic" />
      <ProductList products={products} />
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
    revalidate: 1,
  };
}
