import { Inter as FontInter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone } from "lucide-react";
import { Toaster } from "sonner";

const inter = FontInter({
  subsets: ["latin"]
})

export const metadata = {
  title: "Dr. Serena Blake | Licensed Clinical Psychologist in Los Angeles",
  description: "Compassionate therapy for anxiety, trauma, and relationships.",
   icons: {
    icon: "/tabLogo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" flex flex-col min-h-screen">
          <Toaster/>
          <div className="bg-red-100 border-b border-black">
            <div className="container py-2 px-2 flex items-center mx-auto justify-between text-sm">
              <p className="flex gap-2 items-center text-xs sm:text-sm md:text-base">
                <Phone className="size-4" />
                (323) 555-0192
              </p>
              <p className="flex gap-2 items-center text-xs sm:text-sm md:text-base ">
                <MapPin className="size-4" />
                1287 Maplewood Drive, Los Angeles, CA 90026
              </p>
            </div>
          </div>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
