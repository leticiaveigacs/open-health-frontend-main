"use client";

import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarLinks } from "@/Types/user";
import { useParams } from "next/navigation";
import { SidebarLink } from "@/Types/user";
import {
  LucideCross,
  LucideFileSearch,
  LucideFileText,
  LucidePencilLine,
  Pill,
} from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { user } = useAuth();

  // Data coming from backend? - exemplo
  const user = {
    role: "pharmaceutical", // Dynamic (pharmaceutical, doctor, client)
    name: "Carlos Silva",
  };
  console.log(user);

  const sidebarLinks: SidebarLinks = {
    pharmaceutical: [
      {
        href: `/dashboard/history`,
        label: "Histórico de Receitas",
        icon: LucideCross,
      },
      {
        href: `/dashboard/prescription-search`,
        label: "Buscar Receita",
        icon: LucideFileSearch,
      },
    ],
    doctor: [
      {
        href: `/dashboard/prescription-record`,
        label: "Histórico de Receitas",
        icon: LucideFileText,
      },
      {
        href: `/dashboard/new-prescription`,
        label: "New Prescription",
        icon: LucidePencilLine,
      },
    ],
    client: [
      {
        href: `/dashboard/my-prescriptions`,
        label: "Minhas Receitas",
        icon: Pill,
      },
    ],
  };

  // Filter sidebar links based on user role
  let userSidebarLinks: SidebarLink[] = [];

  if (user?.role?.toLowerCase() === "pharmaceutical") {
    userSidebarLinks = sidebarLinks.pharmaceutical;
  } else if (user?.role?.toLowerCase() === "doctor") {
    userSidebarLinks = sidebarLinks.doctor;
  } else if (user?.role?.toLowerCase() === "client") {
    userSidebarLinks = sidebarLinks.client;
  }
  return (
    <SidebarProvider>
      <AppSidebar sidebarLinks={userSidebarLinks} />
      <SidebarInset className="bg-my-base">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 ">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          {/* <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> */}
          <div className="ml-auto px-3 flex gap-3 items-center">
            <div className="border border-my-primary rounded-full">
              <Image
                alt="Imagen de usuario"
                src="/images/user-default.png"
                width={30}
                height={30}
              />
            </div>
            <span>{user?.name}</span>
          </div>
        </header>
        <main className="bg-my-base flex flex-1 flex-col gap-4 p-4">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

// {/* <div>
//     {/* Main content */}
//     <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-gray-200 p-4 shadow">
//           <h1 className="text-xl">Dashboard - {user.role.charAt(0).toUpperCase() + user.role.slice(1)}</h1>
//         </header>
//         {/* Page content */}
//         <main className="p-4">{children}</main>
//       </div>
//     </div> */}
