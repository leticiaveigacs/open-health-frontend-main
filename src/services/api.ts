import axios from "axios";

export const API = axios.create({
  baseURL: "https://e6c3-2804-7f0-aa05-742-9d0c-2293-59a6-989d.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export const API_ENDPOINTS = {
  GET_PRESCRIPTIONS: "/prescriptions",
  ADD_PRESCRIPTION: "/prescriptions",
};
