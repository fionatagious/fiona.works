import "../../styles/globals.css";

export const metadata = {
  title: "Fiona Tang",
  description: "Fiona Tang's site",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
