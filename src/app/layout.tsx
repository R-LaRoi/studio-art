import type { Metadata } from "next";
import localFont from "next/font/local";
import titilliumFont from "next/font/local"
import "./globals.css";


const ManRope = localFont({
  src: "./fonts/ManRope.ttf",
  variable: "--font-ManRope",
  weight: "100 900",
});


const titillium = titilliumFont
  ({
    src: "./fonts/TitilliumWeb-Bold.ttf",
    variable: "--font-Titillium",
    weight: "700",
  });


export const metadata: Metadata = {
  title: "STROY",
  description: "Rachel Stroy's practice stems from deep, steady gazes into the invisible spaces of urban and rural African-Americana. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ManRope.variable} ${titillium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
