"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SidebarLinks } from "@/Types/user";

interface NavMainProps {
  items: SidebarLinks;
}

export function NavMain({ items }: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {Object.keys(items).map((role) => (
          <div key={role}>
            {items[role as keyof SidebarLinks].map((item) => (
              <SidebarMenuItem key={item.href}>
                <a href={item.href}>{item.label}</a>
              </SidebarMenuItem>
            ))}
          </div>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
