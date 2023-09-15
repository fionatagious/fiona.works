import Link from "next/link";
// Link component enables client-side navigation between two pages in the same Next.js app
import Image from "next/image";
import Head from "next/head";
// import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <h1>First Post</h1>
      <p>This is a love story about Ben and Fiona.</p>
      <Image
        src="/images/profile.jpg"
        height={300}
        width={400}
        alt="Costa Rica"
      ></Image>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
