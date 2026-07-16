import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata={
  title: "LoremStockApp",
  description: "Future Kigali's Marketplace"
}
export default function RootLayout({
  children,
}:{children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar/>
        <main className="flex-1">
          {children}
            <Toaster position="top-right" richColors />
        </main>
        <Footer/>
      </body>
    </html>
  )
}
