import HeadInfo from "../components/Head";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import { getProductsInCollection } from "../lib/shopify";

export default function Home({ products }) {
  return (
    <>
      <HeadInfo title="Shop the Best Selection of Clothes on InJestic - Powered by Injestic" />
      <Hero />
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
