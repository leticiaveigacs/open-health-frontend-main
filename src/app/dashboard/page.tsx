// import { useAuth } from "@/hooks/useAuth";
import React from "react";
import ClientDashboard from "./(client)/ClientDashboard";
import DoctorDashboard from "./(doctor)/DoctorDashboard";
import PharmaceuticalDashboard from "./(pharmaceutical)/PharmaceuticalDashboard";
import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
  // const { user } = useAuth();
  const user = {
    role: "pharmaceutical", // Dynamic (pharmaceutical, doctor, client)
    name: "Carlos Silva",
  };

  if (!user) {
    return <p>Carregando...</p>;
  }

  switch (user.role.toLowerCase()) {
    case "client":
      return <ClientDashboard />;
    case "doctor":
      return <DoctorDashboard />;
    case "pharmaceutical":
      return <PharmaceuticalDashboard />;
    default:
      return <p>Role não reconhecido</p>;
  }
}
