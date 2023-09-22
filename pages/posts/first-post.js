import Link from "next/link";
// Link component enables client-side navigation between two pages in the same Next.js app
import Head from "next/head";
// import Script from "next/script";
import Layout from "../../components/layout";

export default function WrittenWorks() {
  return (
    <Layout>
      <Head>
        <title>Written Works</title>
      </Head>
      <h1>Written Works</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
