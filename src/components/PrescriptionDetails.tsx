"use client";

import { usePrescriptions } from "@/hooks/usePrescription";

interface PrescriptionDetailsProps {
  id: string;
  userRole: string | null;
}

export default function PrescriptionDetails({
  id,
  userRole,
}: PrescriptionDetailsProps) {
  const { getPrescription } = usePrescriptions();
  const prescription = getPrescription(id);

  if (!prescription) {
    return <p className="text-muted-foreground">Receita não encontrada.</p>;
  }

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{prescription.name_drug}</h3>
      <p>
        <strong>Instruções:</strong> {prescription.instructions}
      </p>
      <p>
        <strong>Status:</strong> {prescription.status}
      </p>
      <p>
        <strong>Quantidade:</strong> {prescription.quantity}
      </p>
      <p>
        <strong>Criada em:</strong>{" "}
        {prescription.created_at.toLocaleDateString()}
      </p>
      <p>
        <strong>Expira em:</strong>{" "}
        {prescription.expires_at.toLocaleDateString()}
      </p>

      {/* Conditional */}
      {userRole === "farmacêutico" && (
        <div className="mt-4 flex gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Entregar
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Marcar como entregue
          </button>
        </div>
      )}
    </div>
  );
}
