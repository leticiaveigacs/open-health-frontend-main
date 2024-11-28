import { Prescription } from "@/Types/user";

export const data: Prescription[] = [
  {
    id: "rx001",
    code: "A101",
    name_drug: "Paracetamol",
    quantity: 20,
    status: "PENDIENTE",
    created_at: new Date("2024-11-01"),
    expires_at: new Date("2025-01-01"),
    type: 1,
    instructions: "Tomar a cada 8 horas",
  },
  {
    id: "rx002",
    code: "B202",
    name_drug: "Ibuprofeno",
    quantity: 15,
    status: "USADA",
    created_at: new Date("2024-10-15"),
    expires_at: new Date("2024-12-15"),
    type: 2,
    instructions: "Tomar após as refeições",
  },
  {
    id: "rx003",
    code: "C303",
    name_drug: "Amoxicilina",
    quantity: 10,
    status: "PENDIENTE",
    created_at: new Date("2024-11-05"),
    expires_at: new Date("2025-02-01"),
    type: 1,
    instructions: "Tomar com água a cada 12 horas",
  },
  {
    id: "rx004",
    code: "D404",
    name_drug: "Metformina",
    quantity: 30,
    status: "EXPIRADO",
    created_at: new Date("2023-05-20"),
    expires_at: new Date("2024-05-20"),
    type: 3,
    instructions: "Tomar uma vez ao dia antes do café da manhã",
  },
  {
    id: "rx005",
    code: "E505",
    name_drug: "Losartana",
    quantity: 15,
    status: "PENDIENTE",
    created_at: new Date("2024-10-01"),
    expires_at: new Date("2025-01-01"),
    type: 1,
    instructions: "Tomar uma vez ao dia antes de dormir",
  },
  {
    id: "rx006",
    code: "F606",
    name_drug: "Omeprazol",
    quantity: 10,
    status: "PENDIENTE",
    created_at: new Date("2024-09-10"),
    expires_at: new Date("2024-12-10"),
    type: 1,
    instructions: "Tomar em jejum pela manhã",
  },
  {
    id: "rx007",
    code: "G707",
    name_drug: "Diclofenaco",
    quantity: 5,
    status: "USADA",
    created_at: new Date("2024-08-01"),
    expires_at: new Date("2024-09-01"),
    type: 2,
    instructions: "Tomar após as refeições, se necessário",
  },
  {
    id: "rx008",
    code: "H808",
    name_drug: "Clonazepam",
    quantity: 25,
    status: "PENDIENTE",
    created_at: new Date("2024-11-10"),
    expires_at: new Date("2025-02-10"),
    type: 1,
    instructions: "Tomar antes de dormir para insônia",
  },
  {
    id: "rx009",
    code: "I909",
    name_drug: "Vitamina D",
    quantity: 60,
    status: "EXPIRADO",
    created_at: new Date("2023-06-01"),
    expires_at: new Date("2024-06-01"),
    type: 3,
    instructions: "Tomar uma cápsula ao dia",
  },
  {
    id: "rx010",
    code: "J010",
    name_drug: "Azitromicina",
    quantity: 3,
    status: "USADA",
    created_at: new Date("2024-07-01"),
    expires_at: new Date("2024-08-01"),
    type: 2,
    instructions: "Tomar uma vez ao dia por três dias",
  },
  {
    id: "rx011",
    code: "K111",
    name_drug: "Cetirizina",
    quantity: 10,
    status: "PENDIENTE",
    created_at: new Date("2024-11-05"),
    expires_at: new Date("2025-01-05"),
    type: 1,
    instructions: "Tomar uma vez ao dia para alergias",
  },
  {
    id: "rx012",
    code: "L212",
    name_drug: "Lorazepam",
    quantity: 20,
    status: "USADA",
    created_at: new Date("2024-09-01"),
    expires_at: new Date("2024-10-01"),
    type: 2,
    instructions: "Tomar apenas sob orientação médica",
  },
  {
    id: "rx013",
    code: "M313",
    name_drug: "Enalapril",
    quantity: 30,
    status: "EXPIRADO",
    created_at: new Date("2023-03-10"),
    expires_at: new Date("2024-03-10"),
    type: 3,
    instructions: "Tomar duas vezes ao dia",
  },
  {
    id: "rx014",
    code: "N414",
    name_drug: "Simvastatina",
    quantity: 30,
    status: "PENDIENTE",
    created_at: new Date("2024-11-05"),
    expires_at: new Date("2025-03-05"),
    type: 1,
    instructions: "Tomar à noite para colesterol",
  },
  {
    id: "rx015",
    code: "O515",
    name_drug: "Prednisona",
    quantity: 12,
    status: "PENDIENTE",
    created_at: new Date("2024-12-01"),
    expires_at: new Date("2025-01-01"),
    type: 1,
    instructions: "Tomar com alimentos para evitar náusea",
  },
  {
    id: "rx016",
    code: "P616",
    name_drug: "Hidroxicloroquina",
    quantity: 15,
    status: "USADA",
    created_at: new Date("2024-06-01"),
    expires_at: new Date("2024-07-01"),
    type: 2,
    instructions: "Tomar conforme prescrição médica",
  },
  {
    id: "rx017",
    code: "Q717",
    name_drug: "Insulina",
    quantity: 50,
    status: "PENDIENTE",
    created_at: new Date("2024-11-15"),
    expires_at: new Date("2025-01-15"),
    type: 1,
    instructions: "Injetar antes das refeições",
  },
  {
    id: "rx018",
    code: "R818",
    name_drug: "Cloroquina",
    quantity: 20,
    status: "EXPIRADO",
    created_at: new Date("2023-01-10"),
    expires_at: new Date("2024-01-10"),
    type: 3,
    instructions: "Usar apenas sob orientação médica",
  },
  {
    id: "rx019",
    code: "S919",
    name_drug: "Dipirona",
    quantity: 10,
    status: "PENDIENTE",
    created_at: new Date("2024-12-01"),
    expires_at: new Date("2025-02-01"),
    type: 1,
    instructions: "Tomar para dores leves",
  },
  {
    id: "rx020",
    code: "T020",
    name_drug: "Captopril",
    quantity: 20,
    status: "USADA",
    created_at: new Date("2024-05-01"),
    expires_at: new Date("2024-06-01"),
    type: 2,
    instructions: "Tomar 30 minutos antes de comer",
  },
];
