"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 900);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3" noValidate>
      <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-4 focus-within:border-brand-green-500/60">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@company.com"
          className="w-full bg-transparent text-sm text-white placeholder:text-ink-500 focus:outline-none"
          aria-invalid={status === "error"}
          aria-describedby="newsletter-status"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-full bg-brand-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-green-500 disabled:opacity-60"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </div>
      <p id="newsletter-status" role="status" className="mt-2 h-4 text-xs">
        {status === "error" && (
          <span className="text-red-400">Enter a valid email address.</span>
        )}
        {status === "success" && (
          <span className="text-brand-green-400">
            You&apos;re on the list — welcome aboard.
          </span>
        )}
      </p>
    </form>
  );
}
