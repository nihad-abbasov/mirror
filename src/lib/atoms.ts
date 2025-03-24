import { atom } from "jotai";

export const isBurgerMenuOpenAtom = atom(false);

export interface ModalState {
  open: boolean;
  title?: string;
  content: React.ReactNode;
  type?: "center" | "bottom";
  modalType?: "default" | "info" | "image" | "form" | "confirm";
  autoCloseAfter?: number;
}

export const modalAtom = atom<ModalState>({
  open: false,
  title: "",
  content: null,
  type: "center",
});
