import { atom } from "jotai";

export type NotifyPayload = {
  type: "success" | "info" | "warning" | "error";
  message: string;
  description?: string;
};

export const notificationAtom = atom<NotifyPayload | null>(null);
