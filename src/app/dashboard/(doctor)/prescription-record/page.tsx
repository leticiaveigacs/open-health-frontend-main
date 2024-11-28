import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { PrescriptionListTable } from "@/Types/user";
import { PrescriptionList } from "@/components/PrescriptionList";
import { columns, data } from "@/constants/temporaryData";

/* export type Prescription = {
  id: string;
  remedyName: string;
  status: "pending" | "processing" | "success" | "failed";
  code: string;
  qnts: number;
  created_at: Date;
  expires_at: Date;
}; */

// const data: PrescriptionListTable[] = [
//   {
//     id: "ad2040",
//     name_drug: "Tilenol",
//     status: "Pendiente",
//     code: "a102010",
//     quantity: 2010,
//     created_at: new Date(),
//     expires_at: new Date(),
//   },
//   {
//     id: "ad2040",
//     name_drug: "Tilenol",
//     status: "Pendiente",
//     code: "a102010",
//     quantity: 2010,
//     created_at: new Date(),
//     expires_at: new Date(),
//   },
//   {
//     id: "ad2040",
//     name_drug: "Tilenol",
//     status: "Pendiente",
//     code: "a102010",
//     quantity: 2010,
//     created_at: new Date(),
//     expires_at: new Date(),
//   },
//   {
//     id: "ad2040",
//     name_drug: "Tilenol",
//     status: "Pendiente",
//     code: "a102010",
//     quantity: 2010,
//     created_at: new Date(),
//     expires_at: new Date(),
//   },
// ];

// const columns: ColumnDef<PrescriptionListTable>[] = [
//   {
//     accessorKey: "id",
//     header: "Id",
//   },
//   {
//     accessorKey: "name_drug",
//     header: "Remédio",
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//   },
//   {
//     accessorKey: "code",
//     header: "Código",
//   },
//   {
//     accessorKey: "quantity",
//     header: "Quantidade",
//   },
//   {
//     accessorKey: "created_at",
//     header: "Data de Expedição",
//   },
//   {
//     accessorKey: "expires_at",
//     header: "Data de Expiração",
//   },
// ];

export default function PrescriptionRecord() {
  return (
    <section className="flex flex-col justify-start items-start min-h-full">
      <div className="mb-4">
        <h2 className="text-4xl font-semibold text-primary mb-2">
          Receitas Prescritas
        </h2>
        <p className="text-base text-my-dark mb-4">
          Visualize todas as receitas médicas que você prescreveu. Confira os
          detalhes, status e datas de cada prescrição em um formato organizado.
        </p>
      </div>
      <PrescriptionList columns={columns} data={data} />
    </section>
  );
}
