import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <Link
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            href="/"
          >
            Posts
          </Link>
          <Link
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            href="/createnewpost"
          >
            Create New Post
          </Link>
        </nav>
        <div className="min-h-screen p-10 bg-neutral-400">{children}</div>
      </body>
    </html>
  );
}
