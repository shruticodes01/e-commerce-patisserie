import type React from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  children,
  open,
  className,
}: {
  children: React.ReactNode;
  open: boolean;
  className?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modal = dialogRef.current;
    if (open) {
      //if open is true
      modal?.showModal();
    }

    return () => modal?.close();
  }, [open]);

  return createPortal(
    <dialog
      ref={dialogRef}
      className={`w-full border border-transparent rounded-md shadow-[0_0_0.625rem_rgba(0,0,0,0.5)] animate-slide-in-from-top ${className}`}
    >
      {children}
    </dialog>,
    document.getElementById("modal") as Element,
  );
}
