import FormPrescription from "@/components/FormPrescription";
import React from "react";

export default function NewPrescription() {
  return (
    <section className="flex flex-col justify-start items-start min-h-full">
      <div>
        <h2 className="text-4xl font-semibold text-primary mb-2">
          Criar Nova Receita Médica
        </h2>
        <p className="text-base text-my-dark mb-4">
          Preencha os dados necessários no formulário abaixo para prescrever uma
          nova receita médica de forma rápida e segura.
        </p>
      </div>
      <FormPrescription />
    </section>
  );
}
