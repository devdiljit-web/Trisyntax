"use client";

import { useId, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SharedProps = {
  label: string;
  error?: string;
};

type InputProps = SharedProps &
  InputHTMLAttributes<HTMLInputElement> & { as?: "input" };

type TextareaProps = SharedProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

export function FloatingLabelInput(props: InputProps | TextareaProps) {
  const autoId = useId();
  const { label, error, className, as = "input", id: providedId, ...rest } = props;
  const id = providedId ?? autoId;

  const fieldClasses = cn(
    "peer w-full rounded-2xl border bg-white/60 px-4 pb-2.5 pt-6 text-[0.9375rem] text-ink-900 outline-none transition-all duration-300 placeholder:text-transparent",
    "focus:bg-white focus:shadow-[0_0_0_4px_var(--color-brand-blue-100)]",
    error
      ? "border-red-300 focus:border-red-400"
      : "border-white/70 focus:border-brand-blue-400",
    className
  );

  return (
    <div className="relative">
      {as === "textarea" ? (
        <textarea
          id={id}
          placeholder=" "
          className={cn(fieldClasses, "resize-none")}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          placeholder=" "
          className={fieldClasses}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-4 text-[0.9375rem] text-ink-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-[0.9375rem] peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-brand-blue-600 peer-not-placeholder-shown:top-2.5 peer-not-placeholder-shown:text-xs"
      >
        {label}
      </label>
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-1.5 text-xs font-medium text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
