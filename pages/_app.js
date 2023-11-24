import "../styles/globals.css";
import GlobalStyles from "../styles/globalStyles";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
