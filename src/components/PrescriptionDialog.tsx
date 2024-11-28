import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PrescriptionCard from "./PrescriptionCard";

export function PrescriptionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Ver Receita</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <PrescriptionCard />
      </DialogContent>
    </Dialog>
  );
}
