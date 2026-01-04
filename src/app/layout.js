import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Divine Dous",
  description: "Celebrate Love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          {children}         
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
