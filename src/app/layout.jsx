import NavComponent from "./component/NavComponent";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Sidebar } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/app/component/ui/sidebar";
import { AppSidebar } from "@/app/component/app-sidebar";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-[#ffffff] min-h-full  text-gray-300 flex h-screen">
            <SidebarProvider>
            <AppSidebar />
              <SidebarTrigger />
              <div className="flex flex-col w-full h-screen">
                <NavComponent/>
                {children}
              </div>
            </SidebarProvider>
      </body>
    </html>
  );
}