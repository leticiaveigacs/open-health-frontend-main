import { Button } from "@/components/ui/button";
// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-container flexCenter flex-col p-4 min-h-screen bg-my-light">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="mt-5 text-7xl font-extrabold leading-[1.15] text-my-primary sm:text-8xl mx-auto">
          Receita fácil
        </h1>
        <span className="mt-5 text-5xl font-extrabold leading-[1.15] text-basePrimary sm:text-6xl text_gradient text-center my-2 py-3">
          Sua solução definitiva para gestão de receitas
        </span>
        <p className="text-lg text-my-dark sm:text-xl max-w-2xl mt-4 text-center mx-auto">
          Simplifique o processo de prescrição e foque no que realmente importa—
          conectar-se com seus pacientes. De consultas a farmácias, temos tudo o
          que você precisa!
        </p>
        <div className="mx-auto gap-3 mt-8">
          <Link href="/auth/login">
            <Button className="text-lg w-52">Entrar</Button>
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a> */}{" "}
        footer home
      </footer>
    </div>
  );
}
