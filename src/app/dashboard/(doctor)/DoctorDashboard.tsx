import React from "react";
import { useAuth } from "@/hooks/useAuth";
import DashboardHeader from "@/components/DashboardHeader";
import AnalysisGraph from "@/components/AnalysisGraph";
import { PrescriptionList } from "@/components/PrescriptionList";
import { data, columns } from "@/constants/temporaryData";

export default function DoctorDashboard() {
  // const { user } = useAuth();

  const user = {
    role: "pharmaceutical", // Dynamic (pharmaceutical, doctor, client)
    name: "Carlos Silva",
  };

  const userName = user ? `Dr. ${user.name}` : "Usuário";

  const limitedData = data.slice(0, 3);
  return (
    <section className=" h-full">
      <DashboardHeader
        userName={userName}
        description="Aqui você pode gerenciar suas prescrições médicas e acessar informações relevantes para o acompanhamento de seus pacientes."
      />
      {/* conteudo */}
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-my-light"></div>
        <div className="aspect-video rounded-xl bg-my-light"></div>
        <div className="aspect-video rounded-xl bg-my-my-light p-2">
          <AnalysisGraph />
        </div>
        <div></div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-my-light md:min-h-min p-2">
        <PrescriptionList data={limitedData} columns={columns} />
      </div>
    </section>
  );
}
