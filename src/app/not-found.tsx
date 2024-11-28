import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flexCenter flex-col mx-8 gap-5">
      <div className="relative w-full max-w-[500px] aspect-[4/3]">
        <Image
          src="/images/404-image.svg"
          alt="Página Não Encontrada"
          fill
          className="object-contain"
        />
      </div>
      <span className="text-lg text-my-dark sm:text-xl max-w-2xl mt-4 text-center">
        Oops... Página Não Encontrada
      </span>
      <Link href="/">
        <Button variant="secondary">Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
