"use client";

import { Modal } from "antd";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { modalAtom } from "@/lib/atoms";

export const CModal = () => {
  const [modalState, setModalState] = useAtom(modalAtom);

  // Auto-close logic
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (modalState.open && modalState.autoCloseAfter) {
      timeout = setTimeout(() => {
        setModalState((prev) => ({ ...prev, open: false }));
      }, modalState.autoCloseAfter);
    }
    return () => clearTimeout(timeout);
  }, [modalState.open, modalState.autoCloseAfter, setModalState]);

  return (
    <Modal
      open={modalState.open}
      onCancel={() => setModalState((prev) => ({ ...prev, open: false }))}
      footer={null}
      centered={modalState.type !== "bottom"}
      title={modalState.title}
    >
      {modalState.modalType === "image" &&
      typeof modalState.content === "string" ? (
        <img
          src={modalState.content}
          alt="Modal image"
          className="w-full h-auto rounded-md"
        />
      ) : (
        modalState.content
      )}
    </Modal>
  );
};
