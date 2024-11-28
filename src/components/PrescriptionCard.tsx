import { Prescription } from "@/Types/user";
import { Button } from "./ui/button";

interface PrescriptionCardProps {
  prescription: Prescription;
  isPharmacist: boolean;
}

function PrescriptionCard(/* {
  prescription,
  isPharmacist,
}: PrescriptionCardProps */) {
  return (
    <div className="p-4 border rounded-lg shadow-sm flex flex-col gap-2 bg-gray-50">
      esto es una prescription card
      {/* <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{prescription.name_drug}</h3>
        <span
          className={`text-sm font-semibold ${
            prescription.status === "PENDIENTE"
              ? "text-yellow-600"
              : prescription.status === "USADA"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {prescription.status}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">
        Código: {prescription.code}
      </p>
      <p className="text-sm text-muted-foreground">
        Quantidade: {prescription.quantity} comprimido(s)
      </p>
      <p className="text-sm text-muted-foreground">
        Instruções: {prescription.instructions}
      </p>
      <p className="text-sm text-muted-foreground">
        Expira em: {prescription.expires_at.toLocaleDateString("pt-BR")}
      </p> */}
      {/* Conditional */}
      {/* {isPharmacist && (
        <div className="flex gap-2 mt-4">
          <Button variant="secondary">Entregue</Button>
          <Button>Cancelar</Button>
        </div>
      )} */}
    </div>
  );
}

export default PrescriptionCard;
