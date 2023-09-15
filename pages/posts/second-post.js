import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import LayoutSecondPost from "../../components/layout-second";

export default function SecondPost() {
  return (
    <LayoutSecondPost>
      <Head>
        <title>Second Post</title>
      </Head>
      <h1>Second Post</h1>
      <p>This is a sex story about Ben and Fiona.</p>
      <Image
        src="/images/profile.jpg"
        height={300}
        width={400}
        alt="Costa Rica"
      ></Image>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </LayoutSecondPost>
  );
}
