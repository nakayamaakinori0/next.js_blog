import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto bg-slate-700 text-slate-50">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
