import "../../styles/globals.css";

export const metadata = {
  title: "Fiona Tang",
  description: "Fiona Tang's site",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
