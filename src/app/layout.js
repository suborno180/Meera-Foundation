import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  
  title: "Meera foundation",
  description: " Struggling with poverty, disability, or medical bills? Meera Foundation offers a caring hand. We support education, healthcare, and financial stability for those in need.  Join our true community and make a difference.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
     <body className={`${inter.className} overflow-x-hidden`}>
       <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
