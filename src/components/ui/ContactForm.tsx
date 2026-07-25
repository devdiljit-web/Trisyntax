"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/Button";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";

const budgets = ["Under ₹5L", "₹5L – ₹15L", "₹15L – ₹40L", "₹40L+"];

type FieldValues = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
};

type Errors = Partial<Record<keyof FieldValues, string>>;

const initialValues: FieldValues = {
  name: "",
  email: "",
  company: "",
  budget: "",
  message: "",
};

function validate(values: FieldValues): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Tell us a little about your project.";
  return errors;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [values, setValues] = useState<FieldValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [shake, setShake] = useState(0);

  function setField<K extends keyof FieldValues>(key: K, value: FieldValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setShake((s) => s + 1);
      return;
    }

    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 1000);
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-brand-green-200/60 bg-brand-green-50/70 p-10 text-center backdrop-blur-sm"
      >
        <div className="relative flex size-16 items-center justify-center rounded-full bg-brand-green-600 text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1.4, 1] }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute inset-0 rounded-full border-2 border-brand-green-300"
          />
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <motion.path
              d="M5 13l5 5L19 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-2xl font-medium text-ink-900">
          Thanks — we&apos;ll be in touch shortly.
        </h3>
        <p className="mt-2 max-w-sm text-ink-600">
          A member of our team will respond within one business day with next steps.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
      animate={shake ? { x: [0, -8, 8, -6, 6, 0] } : {}}
      transition={{ duration: 0.4 }}
      key={shake}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <FloatingLabelInput
          label="Full name"
          name="name"
          value={values.name}
          onChange={(e) => setField("name", e.target.value)}
          error={errors.name}
        />
        <FloatingLabelInput
          label="Work email"
          name="email"
          type="email"
          value={values.email}
          onChange={(e) => setField("email", e.target.value)}
          error={errors.email}
        />
      </div>

      <FloatingLabelInput
        label="Company"
        name="company"
        value={values.company}
        onChange={(e) => setField("company", e.target.value)}
      />

      <fieldset>
        <legend className="text-sm font-medium text-ink-700">Estimated budget</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {budgets.map((budget) => (
            <label
              key={budget}
              className="cursor-pointer rounded-full border border-white/70 bg-white/40 px-4 py-2 text-sm text-ink-600 transition-colors has-[:checked]:border-brand-blue-500 has-[:checked]:bg-brand-blue-50 has-[:checked]:text-brand-blue-700"
            >
              <input
                type="radio"
                name="budget"
                value={budget}
                className="sr-only"
                checked={values.budget === budget}
                onChange={() => setField("budget", budget)}
              />
              {budget}
            </label>
          ))}
        </div>
      </fieldset>

      <FloatingLabelInput
        as="textarea"
        label="Project details"
        name="message"
        rows={4}
        value={values.message}
        onChange={(e) => setField("message", e.target.value)}
        error={errors.message}
      />

      <MagneticButton type="submit" variant="gradient" size="lg" className="w-full">
        {status === "loading" ? "Sending..." : "Send Message"}
      </MagneticButton>
    </motion.form>
  );
}
