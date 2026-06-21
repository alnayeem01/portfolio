"use client";

import { FormEvent, useState } from "react";

const emailAddress = "nayeem2019@hotmail.com";
const formspreeEndpoint = "https://formspree.io/f/mvgozebp";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm text-muted" htmlFor="name">
        Name
        <input
          className="h-12 rounded-md border border-white/10 bg-ink px-4 text-paper outline-none transition focus:border-blueprint"
          id="name"
          name="name"
          placeholder="Your name"
          required
          type="text"
        />
      </label>
      <label className="grid gap-2 text-sm text-muted" htmlFor="email">
        Email
        <input
          className="h-12 rounded-md border border-white/10 bg-ink px-4 text-paper outline-none transition focus:border-blueprint"
          id="email"
          name="email"
          placeholder="you@example.com"
          required
          type="email"
        />
      </label>
      <label className="grid gap-2 text-sm text-muted" htmlFor="message">
        Message
        <textarea
          className="min-h-36 rounded-md border border-white/10 bg-ink px-4 py-3 text-paper outline-none transition focus:border-blueprint"
          id="message"
          name="message"
          placeholder="Tell me what you are building, hiring for, or need help with."
          required
        />
      </label>
      <button
        className="h-12 rounded-md bg-blueprint px-5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(49,120,198,0.22)] transition hover:bg-[#2B6FB6] disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "sent" ? (
        <p className="text-sm leading-6 text-cyan-signal">Thanks. Your message has been sent.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm leading-6 text-sand">
          Something went wrong. Please email{" "}
          <a className="underline underline-offset-4" href={`mailto:${emailAddress}`}>
            {emailAddress}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
