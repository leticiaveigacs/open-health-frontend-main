import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="text-basePrimary">
      <CardHeader>
        <CardTitle>Criar Conta</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex gap-2">
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="name">Nome</Label>
                <Input type="text" id="name" placeholder="Name" />
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="lastName">Sobrenome</Label>
                <Input type="text" id="lastName" placeholder="Last Name" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="telefone">Telefone</Label>
                <Input type="text" id="name" placeholder="Name" />
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="cpf">CPF</Label>
                <Input type="text" id="lastName" placeholder="Last Name" />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <Button type="submit" className="w-full mt-5">
            Sign up
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col w-full">
        <CardDescription className="">
          Já tem uma conta?
          <Link href="/auth/login">
            <Button variant="link" className="w-min">
              Faça Login
            </Button>
          </Link>
        </CardDescription>
      </CardFooter>
    </div>
    /* telefone, cPF */
  );
};

export default Register;
