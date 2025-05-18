"use client";
import { useEffect, useRef } from "react";
import * as S from "./styled";

interface DialogRootProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function DialogRoot({
  children,
  isOpen,
  onClose,
}: DialogRootProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }

    const handleCancel = () => onClose();
    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, [isOpen, onClose]);

  // Fechar ao clicar fora (no backdrop)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (dialog && e.target === dialog) {
      onClose();
    }
  };

  return (
    <S.Overlay as="dialog" ref={dialogRef} onClick={handleBackdropClick}>
      {children}
    </S.Overlay>
  );
}
