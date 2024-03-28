import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

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
        <div className="flex flex-col min-h-screen">
          <Header></Header>
          <main className="flex-grow">
            <Suspense fallback={<Loading></Loading>}>{children}</Suspense>
          </main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
