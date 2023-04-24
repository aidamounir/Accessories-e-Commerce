import Head from "next/head";

function HeadInfo({ title }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default HeadInfo;
