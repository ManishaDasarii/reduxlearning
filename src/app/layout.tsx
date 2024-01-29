import { Providers } from "../../Redux/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Providers></Providers> */}
        {children}
      </body>
    </html>
  );
}
