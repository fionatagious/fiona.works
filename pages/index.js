import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Fiona Tang's site</title>
          <link rel="icon" href="/favicon.ico" sizes="any"/>
        </Head>

        <main>
          <h1 class="font-2xl" className={styles.title}>
            Hello I'm Fiona.
          </h1>
          <p className={styles.description}>
            I'm a software engineer and community organizer based in Chicago.</p>
          <p>Click <a href="/resume">here</a> to learn more.</p>

          <div className={styles.grid}>
            {/* <a href="/posts" className={styles.card}>
              <h3>&#x270E; stuff I write</h3>
              <p></p>
            </a>
            <a
              href="/apps"
              className={styles.card}
            >
              <h3>&#x1F4BB; stuff I code</h3>
              <p></p>
            </a>
            <a
              href="/recipes"
              className={styles.card}
            >
              <h3>&#x1F373; stuff I cook</h3>
              <p>
              </p>
            </a> */}
          </div>
        </main>

        <footer>
        </footer>

        <style jsx>{`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer img {
            margin-left: 0.5rem;
          }
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: inherit;
          }
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </>
  );
}

// import Head from 'next/head';
// import Layout, { siteTitle } from '../components/layout';
// import utilStyles from '../styles/utils.module.css';

// export default function Home() {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>[Your Self Introduction]</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//     </Layout>
//   );
// }
