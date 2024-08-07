import { Inter } from "next/font/google";
import "./globals.css";
import useServerDarkMode from "@/hooks/use-server-dark-mode";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  //importing hook for dark mode - server
  const theme = useServerDarkMode()

  return (
    <html lang="en" className={theme}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>{children}</body>
    </html>
  );
}
