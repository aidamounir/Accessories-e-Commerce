export default function About({ shopify_store_domain }) {
  return (
    <div className="px-20 py-20 leading-loose text-lg container mx-auto">
      Hello and welcome to{" "}
      <span className="font-semibold px-1">{shopify_store_domain}</span>, the
      place to find the best Jewelry for every taste and occasion. We thoroughly
      check the quality of our goods, working only with reliable suppliers so
      that you only receive the best quality product. We at{" "}
      <span className="font-semibold px-1">{shopify_store_domain}</span> believe
      in high quality and exceptional customer service. But most importantly, we
      believe shopping is a right, not a luxury, so we strive to deliver the
      best products at the most affordable prices, and ship them to you
      regardless of where you are located.
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      shopify_store_domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
    },
  };
}
