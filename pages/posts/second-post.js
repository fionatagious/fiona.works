import Link from "next/link";
import Head from "next/head";
import LayoutSecondPost from "../../components/layout-second";

export default function SecondPost() {
  return (
    <LayoutSecondPost>
      <Head>
        <title>Second Post</title>
      </Head>
      <h1>Second Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </LayoutSecondPost>
  );
}
