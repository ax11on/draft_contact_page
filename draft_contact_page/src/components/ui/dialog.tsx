import React, { useEffect, useMemo } from "react";

type DialogProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

type DialogContentProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

type DialogTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

type DialogDescriptionProps = React.HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
};

const DialogContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

export function Dialog({ open = false, onOpenChange, children }: DialogProps) {
  const setOpen = useMemo(
    () => (next: boolean) => {
      onOpenChange?.(next);
    },
    [onOpenChange]
  );

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogContent({ className = "", children, ...rest }: DialogContentProps) {
  const ctx = React.useContext(DialogContext);
  if (!ctx?.open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3"
      onMouseDown={(e) => {
        // backdrop click closes
        if (e.target === e.currentTarget) ctx.setOpen(false);
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className={`relative z-10 ${className}`}
        {...rest}
      >
        {children}
      </div>
      <EscapeToClose />
    </div>
  );
}

function EscapeToClose() {
  const ctx = React.useContext(DialogContext);
  useEffect(() => {
    if (!ctx?.open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") ctx.setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [ctx]);
  return null;
}

export function DialogHeader({ className = "", children, ...rest }: DialogHeaderProps) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

export function DialogTitle({ className = "", children, ...rest }: DialogTitleProps) {
  return (
    <h2 className={className} {...rest}>
      {children}
    </h2>
  );
}

export function DialogDescription({ className = "", children, ...rest }: DialogDescriptionProps) {
  return (
    <p className={className} {...rest}>
      {children}
    </p>
  );
}
