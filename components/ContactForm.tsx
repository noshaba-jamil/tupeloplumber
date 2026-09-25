"use client";

import { useState } from "react";

export default function ContactForm({
  services,
  areas,
  compact = false,
}: {
  services: string[];
  areas: string[];
  compact?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // VERIFY: wire this up to a real form-handling endpoint (email service, CRM, etc.)
    // before launch. This currently only shows a confirmation message.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-green-300 bg-green-50 px-4 py-4 text-green-900">
        Thanks — your request has been received.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "grid gap-4 sm:grid-cols-2" : ""}>
        <div>
          <label className="mb-1 block text-sm font-medium text-ink" htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className="w-full rounded-lg border border-black/15 px-3 py-2" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-ink" htmlFor="phone">
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" required className="w-full rounded-lg border border-black/15 px-3 py-2" />
        </div>
      </div>

      {!compact && (
        <div>
          <label className="mb-1 block text-sm font-medium text-ink" htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" className="w-full rounded-lg border border-black/15 px-3 py-2" />
        </div>
      )}

      <div className={compact ? "grid gap-4 sm:grid-cols-2" : ""}>
        <div>
          <label className="mb-1 block text-sm font-medium text-ink" htmlFor="service">
            Service Needed
          </label>
          <select id="service" name="service" className="w-full rounded-lg border border-black/15 px-3 py-2">
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-ink" htmlFor="area">
            Location
          </label>
          <select id="area" name="area" className="w-full rounded-lg border border-black/15 px-3 py-2">
            {areas.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-ink" htmlFor="message">
          {compact ? "What's going on?" : "Message"}
        </label>
        <textarea id="message" name="message" rows={compact ? 3 : 4} className="w-full rounded-lg border border-black/15 px-3 py-2" />
      </div>

      <button type="submit" className="w-full rounded-full bg-accent px-6 py-3 font-extrabold text-black transition hover:brightness-95 sm:w-auto">
        Request Service
      </button>
    </form>
  );
}
