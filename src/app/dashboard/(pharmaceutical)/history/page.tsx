import { DataTableList } from "@/components/DataTableList";
import { data } from "@/constants/temporaryData";
import React from "react";
import { columnsTable } from "@/components/HeaderColumnsTable";

export default function History() {
  return (
    <section className="flex flex-col mx-auto min-h-full">
      <div className="mb-4">
        <h2 className="text-4xl font-semibold text-primary mb-2">
          Histórico de Receitas Médicas
        </h2>
        <p className="text-base text-my-dark mb-4">
          Aqui você pode consultar o histórico completo de receitas médicas,
          verificando os detalhes e status de cada prescrição.
        </p>
      </div>
      {/* <PrescriptionList columns={columns} data={data} /> */}
      <DataTableList columns={columnsTable} data={data} />
    </section>
  );
}
