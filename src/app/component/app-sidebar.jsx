"use client"

import * as React from "react"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/app/component/ui/sidebar"
import { GalleryVerticalEndIcon } from "lucide-react"

// This is sample data.
const data = {
  navMain: [
    {
      title: "MAIN MENU",
      url: "#",
      items: [
        {
          title: "Products",
          url: "/products",
        },
        {
          title: "Customer",
          url: "/customers",
          isActive: true,
        },
        {
          title: "Categories",
          url: "/categories",
        },
        {
          title: "Setting",
          url: "/setting",
        },
        
       
      ],
    },
  ],
}
export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<Link href="/" />}>
              <div
                className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground ">
                <GalleryVerticalEndIcon className="size-4 " />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <div className="font-bold flex gap-0.5">
                  <p className="text-blue-500">HRD</p>
                  <p className="text-blue-900">SHOP</p>
                </div>
                
                <span className="font-bold text-gray-500 text-[8px]">ADMIN V2.0</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2 ">
            {data.navMain.map((item) => (
              <SidebarMenuItem  key={item.title}>
                <SidebarMenuButton render={<a href={item.url} className="font-medium " />}>
                  {item.title}
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton isActive={item.isActive} render={<Link href={item.url} />}>
                          {item.title}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))} 
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
