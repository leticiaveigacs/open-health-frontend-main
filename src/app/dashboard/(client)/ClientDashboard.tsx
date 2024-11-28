import React from "react";
import { useAuth } from "@/hooks/useAuth";
import DashboardHeader from "@/components/DashboardHeader";

export default function ClientDashboard() {
  // const { user } = useAuth();
  const user = {
    role: "pharmaceutical", // Dynamic (pharmaceutical, doctor, client)
    name: "Carlos Silva",
  };

  const userName = user?.name || "Usuário";
  return (
    <section>
      <DashboardHeader
        userName={userName}
        description="Aqui você pode acompanhar suas receitas médicas, verificar suas
    consultas e acessar informações importantes sobre sua saúde."
      />
      {/* conteudo*/}
    </section>
  );
}
