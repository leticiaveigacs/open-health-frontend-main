import { LucideIcon } from "lucide-react";

export interface SidebarLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface SidebarLinks {
  pharmaceutical: SidebarLink[];
  doctor: SidebarLink[];
  client: SidebarLink[];
}

export interface User {
  role: "DOCTOR" | "CLIENT" | "PHARMACEUTICAL";
  id: string;
  name: string;
  resgistration_document?: string;
  specialty?: string;
  phone: string;
  user_id: string;
  prescriptions: PrescriptionListTable[];
  email: string;
  password: string;
}

export interface PrescriptionListTable {
  id: string;
  code: string;
  name_drug: string;
  quantity: number;
  status: "PENDIENTE" | "USADA" | "EXPIRADO";
  created_at: Date;
  expires_at: Date;
}

export interface Prescription extends PrescriptionListTable {
  type: number;
  instructions: string;
}
