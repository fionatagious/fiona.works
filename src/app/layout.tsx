import "../../styles/globals.css";

export const metadata = {
  title: "Fiona Tang",
  description: "Fiona Tang's site",
};

export default function Layout({
  children,
  excludeHeader = false,
  excludeFooter = false,
}) {
  console.log(excludeHeader, excludeFooter);
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
