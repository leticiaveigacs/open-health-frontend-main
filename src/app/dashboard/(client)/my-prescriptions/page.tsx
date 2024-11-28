import { PrescriptionList } from "@/components/PrescriptionList";
import { columns, data } from "@/constants/temporaryData";
import React from "react";

export default function MyPrescriptions() {
  return (
    <section className="flex flex-col justify-start items-start min-h-full">
      <div className="mb-4">
        <h2 className="text-4xl font-semibold text-primary mb-2">
          Minhas Receitas Médicas
        </h2>
        <p className="text-base text-my-dark mb-4">
          Consulte aqui todas as suas receitas médicas, com detalhes como
          status, validade e instruções de uso. Acompanhe suas prescrições de
          forma simples e organizada.
        </p>
      </div>
      {/* tabela */}
      <PrescriptionList columns={columns} data={data} />
    </section>
  );
}
