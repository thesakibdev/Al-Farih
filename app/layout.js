import "./globals.css";
import Navbar from "./component/layout/Navbar";
import { Poppins } from "@next/font/google";
import Head from "next/head";
import Footer from "./component/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Farih Life Style",
  description: "Generated by create next app",
};
export const head = {
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
