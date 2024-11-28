"use client";

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
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const { login } = useAuth();
  const router = useRouter(); // like naviagate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setIsLoading(true);
    setError(null);
    // console.log(email, password);

    /* using API */
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err: any) {
      setError("Falha ao fazer login. Verifique suas credenciais.");
      console.error("Error ao fazer o login:", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" text-basePrimary">
      <CardHeader>
        <CardTitle>Bem-vindo(a),</CardTitle>
        <CardDescription className="text-baseDark">
          Faça login para gerenciar sua conta e continuar conectado(a).
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-1">
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                id="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <div className="flex flex-col w-full mt-6">
            <Button type="submit" className="w-full">
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col w-full">
        <CardDescription>
          Não tem uma conta?
          <Link
            href="/auth/register"
            // onClick={onToggle}
          >
            <Button variant="link" className="w-min">
              Cadastre-se
            </Button>
          </Link>
        </CardDescription>
      </CardFooter>
    </div>
  );
};

export default Login;
