"use client";

import { FormEvent } from "react";

const emailAddress = "nayeem2019@hotmail.com";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
    );

    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
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
        className="h-12 rounded-md bg-blueprint px-5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(49,120,198,0.22)] transition hover:bg-[#2B6FB6]"
        type="submit"
      >
        Send Message
      </button>
      <p className="text-xs leading-5 text-muted">
        This opens your email app with the message prefilled. Nothing is sent until you press send.
      </p>
    </form>
  );
}
