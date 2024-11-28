import { PrescriptionContext } from "@/context/PrescriptionContext";
import { useContext } from "react";

export const usePrescriptions = () => {
  const context = useContext(PrescriptionContext);
  if (!context) {
    throw new Error(
      "usePrescriptions deve ser usado como provider PrescriptionProvider"
    );
  }
  return context;
};
