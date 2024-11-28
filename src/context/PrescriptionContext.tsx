"use client";

import { Prescription } from "@/Types/user";
import { createContext, ReactNode, useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { data } from "@/constants/temporaryData";
import { API, API_ENDPOINTS } from "@/services/api";

interface PrescriptionContextType {
  prescriptions: Prescription[];
  getAllPrescriptions: () => Promise<Prescription[] | null | undefined>;
  addNewPrescription: (prescription: Prescription) => void;
  getOnePrescription: (id: string) => Prescription | undefined;
  addNewPrescriptionFrontendId: (
    prescription: Omit<Prescription, "id">
  ) => Promise<void>;
}

export const PrescriptionContext = createContext<
  PrescriptionContextType | undefined
>(undefined);

export const PrescriptionProvider = ({ children }: { children: ReactNode }) => {
  const [prescriptions, setPrescriptions] =
    useState<Prescription[]>(data); /* [] */

  const { user } = useContext(AuthContext) ?? { user: null };
  // const userRole = user?.role || null;

  const getAllPrescriptions = async () => {
    try {
      const response = await API.get(API_ENDPOINTS.GET_PRESCRIPTIONS);
      const PrescriptionsData: Prescription[] = response.data;
      setPrescriptions(PrescriptionsData);
      return PrescriptionsData;
    } catch (error) {
      console.error(
        "Error ao tentar obter dados de todas as prescripcoes no PrescriptionContext:",
        error
      );
    }
  };

  const addNewPrescription = async (prescription: Omit<Prescription, "id">) => {
    // const id = (new Date()).toDateString();/* onde é gerado o id? */
    try {
      const response = await API.post(API_ENDPOINTS.ADD_PRESCRIPTION, {
        prescription,
      });
      const newPrescription: Prescription = response.data;
      setPrescriptions((prev) => [...prev, newPrescription]);

      console.log("Nova receita creada:", response.status, newPrescription);
    } catch (error) {
      console.log("Erro ao crear nova receita", error);
    }
  };

  const addNewPrescriptionFrontendId = async (
    prescription: Omit<Prescription, "id">
  ) => {
    const id = new Date().toISOString(); /* onde é gerado o id? */
    try {
      const response = await API.post(API_ENDPOINTS.ADD_PRESCRIPTION, {
        ...prescription,
        id,
      });
      const newPrescription: Prescription = response.data;
      setPrescriptions((prev) => [...prev, newPrescription]);

      console.log(
        "Nova receita creada(sem backend):",
        response.status,
        newPrescription
      );
    } catch (error) {
      console.log("Erro ao crear nova receita", error);
    }
  };

  const getOnePrescription = (id: string) => {
    return prescriptions.find((item) => item.id === id);
  };

  return (
    <PrescriptionContext.Provider
      value={{
        prescriptions,
        getAllPrescriptions,
        addNewPrescription,
        getOnePrescription,
        addNewPrescriptionFrontendId,
      }}
    >
      {children}
    </PrescriptionContext.Provider>
  );
};
