"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PrescriptionDetails from "@/components/PrescriptionDetails";
import { usePrescriptions } from "@/hooks/usePrescription";

export default function PrescriptionSearch() {
  const [searchCode, setSearchCode] = useState<string>("");
  const [selectedPrescriptionId, setSelectedPrescriptionId] = useState<
    string | null
  >(null);

  const { getPrescription, userRole } = usePrescriptions();

  const handleSearch = () => {
    console.log("Buscando código:", searchCode);
    const prescription = getPrescription(searchCode);
    console.log("Resultado:", prescription);
    setSelectedPrescriptionId(prescription?.id ?? null);
  };

  return (
    <section className="flex flex-col items-center gap-4">
      <div className="flex justify-between items-center gap-10">
        <div>
          <h2 className="text-4xl">Buscar Receita Médica</h2>
          <p className="text-base text-my-dark mb-4">
            Insira o código da receita médica para localizar os detalhes
            rapidamente.
          </p>
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="search"
            placeholder="Ingrese o código"
            value={searchCode}
            onChange={(e) => setSearchCode(e.target.value)}
          />
          <Button type="button" onClick={handleSearch}>
            Consultar
          </Button>
        </div>
      </div>

      {selectedPrescriptionId ? (
        <PrescriptionDetails id={selectedPrescriptionId} userRole={userRole} />
      ) : searchCode ? (
        <p className="text-muted-foreground mt-4">
          Nenhuma receita encontrada para o código "{searchCode}".
        </p>
      ) : (
        <p className="text-muted-foreground mt-4">
          Insira um código para buscar.
        </p>
      )}
    </section>
  );
}
