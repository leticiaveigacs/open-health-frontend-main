import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const FormPrescription = () => {
  return (
    <div className=" text-basePrimary">
      <CardHeader>
        <CardTitle>Doutor(a),</CardTitle>
        <CardDescription className="text-baseDark">
          Faça a nova receita!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="text">Nome do Remedio</Label>
              <Input type="text" id="remedio" placeholder="Nome do Remédio" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="number">Quantidade</Label>
              <Input type="number" id="quantidade" placeholder="Quantidade" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="text">Tipo do Remedio</Label>
              <Input type="text" id="remedio" placeholder="Tipo do Remédio" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="text">Instrucoes</Label>
              <Input type="text" id="instrucaoes" placeholder="Instrucoes" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="text">Status do Remedio</Label>
              <Input type="text" id="status" placeholder="Status do Remédio" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="date">Data de Expiração</Label>
              <Input type="date" id="data" placeholder="Data de Expiração" />
            </div>
          </div>
          <Button type="submit" className="w-full mt-5">
            Gerar Receita
          </Button>
        </form>
      </CardContent>
    </div>
  );
};

export default FormPrescription;
