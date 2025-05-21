"use client";
import { forwardRef, useEffect, useRef } from "react";
import * as S from "./styled";

interface DialogRootProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DialogRoot = forwardRef<HTMLDialogElement, DialogRootProps>(
  ({ isOpen, onClose, children }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    console.log("Fui renderizado!");

    const combineRefs = (node: HTMLDialogElement) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      dialogRef.current = node;
    };

    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      if (isOpen && !dialog.open) {
        dialog.showModal();
      } else if (!isOpen && dialog.open) {
        dialog.close();
      }
    }, [isOpen]);

    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      const handleCancel = () =>  onClose();
      const handleClose = () =>  onClose();

      dialog.addEventListener("cancel", handleCancel);
      dialog.addEventListener("close", handleClose);

      return () => {
        dialog.removeEventListener("cancel", handleCancel);
        dialog.removeEventListener("close", handleClose);
      };
    }, [onClose]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
      if (
        dialogRef.current &&
        contentRef.current &&
        !contentRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    return (
      <S.Dialog
        ref={combineRefs}
        onClick={handleBackdropClick}
        onClose={onClose}
      >
        <S.Container ref={contentRef}>{children}</S.Container>
      </S.Dialog>
    );
  }
);

DialogRoot.displayName = "DialogRoot";

export default DialogRoot;
