// import { Button } from "@/components/ui/button";
import React from "react";
// import Link from "next/link";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flexCenter min-h-screen">
      <section className="flex rounded-md bg-my-light shadow-md w-11/12 md:w-2/3 max-w-2xl bg- min-h-[620px]">
        {/* <article className="flex w-full min-h-[570px]"> */}
        <div className="flex w-full">
          <div className="w-2/5 lg:px-6 text-baseLight bg-my-primary hidden sm:flexCenter sm:flex-col rounded-md text-my-base">
            <CardHeader className="text-center">
              <CardTitle className="pb-2">+Saude Digital</CardTitle>
              <hr className="w-10 border border-inherit mx-auto mb-2" />
              <CardDescription className="text-inherit text-center">
                Acesse sua conta ou registre-se para aproveitar uma solução
                digital que simplifica a prescrição médica e a gestão de
                receitas. Tudo em um só lugar, de forma segura e eficiente.
              </CardDescription>
            </CardHeader>
          </div>
          <main className="w-full sm:w-3/5 p-2 md:p-5 my-auto">{children}</main>
        </div>
        {/* </article> */}
      </section>
    </div>
  );
};

export default AuthLayout;
