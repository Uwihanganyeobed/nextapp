import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata={
  title: "LoremStockApp",
  description: "Future Kigali's Marketplace"
}
export default function RootLayout({
  children,
}:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar/>
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
