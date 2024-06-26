import "./globals.css";
import { StoreWrapper } from "@/provider";
import Header from "@/components/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center">
        <Header />
        <StoreWrapper>{children}</StoreWrapper>
      </body>
    </html>
  );
}
