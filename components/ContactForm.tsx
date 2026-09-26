"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  services,
  areas,
  compact = false,
}: {
  services: string[];
  areas: string[];
  compact?: boolean;
}) {
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    area: "",
    urgency: "emergency",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          website: honeypot,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        return;
      }

      setStatus("success");

      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        service: "",
        area: "",
        urgency: "emergency",
        message: "",
      });

      setHoneypot("");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-green-300 bg-green-50 px-5 py-6 text-green-900">
        <div className="mb-2 text-lg font-extrabold">
          ✓ Request received!
        </div>

        <p className="text-sm">
          Thanks for contacting Tupelo Plumber. We&apos;ll get back to you
          shortly.
        </p>

        <p className="mt-3 text-sm">
          For immediate help, call{" "}
          <a
            href="tel:+16623708439"
            className="font-extrabold underline"
          >
            (662) 370-8439
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Contact form"
      className="space-y-4"
    >
      {status === "error" && (
        <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
          Something went wrong sending your request. Please call us directly
          at{" "}
          <a
            href="tel:+16623708439"
            className="font-bold underline"
          >
            (662) 370-8439
          </a>
          .
        </div>
      )}

      {/* Hidden spam protection */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px]"
      />

      {/* Name */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-1 block text-sm font-medium text-ink"
          >
            First Name
          </label>

          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="John"
            autoComplete="given-name"
            value={form.firstName}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-black/15 px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="mb-1 block text-sm font-medium text-ink"
          >
            Last Name
          </label>

          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Smith"
            autoComplete="family-name"
            value={form.lastName}
            onChange={handleChange}
            className="w-full rounded-lg border border-black/15 px-3 py-2"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="mb-1 block text-sm font-medium text-ink"
        >
          Phone Number *
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(662) 370-8439"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-black/15 px-3 py-2"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-ink"
        >
          Email Address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-black/15 px-3 py-2"
        />
      </div>

      {/* Service + Location */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="service"
            className="mb-1 block text-sm font-medium text-ink"
          >
            Service Needed
          </label>

          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-lg border border-black/15 px-3 py-2"
          >
            <option value="">Select a service...</option>

            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="area"
            className="mb-1 block text-sm font-medium text-ink"
          >
            Location
          </label>

          <select
            id="area"
            name="area"
            value={form.area}
            onChange={handleChange}
            className="w-full rounded-lg border border-black/15 px-3 py-2"
          >
            <option value="">Select your area...</option>

            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Urgency */}
      <div>
        <label
          htmlFor="urgency"
          className="mb-1 block text-sm font-medium text-ink"
        >
          How Urgent Is It?
        </label>

        <select
          id="urgency"
          name="urgency"
          value={form.urgency}
          onChange={handleChange}
          className="w-full rounded-lg border border-black/15 px-3 py-2"
        >
          <option value="emergency">🚨 Emergency — Need Help Now</option>
          <option value="24h">Within 24 Hours</option>
          <option value="scheduled">Scheduling / General Request</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-medium text-ink"
        >
          What&apos;s going on?
        </label>

        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          placeholder="Describe what happened..."
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-black/15 px-3 py-2"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-accent px-6 py-3 font-extrabold text-black transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting"
          ? "Sending..."
          : "Request Service →"}
      </button>

      <div className="text-sm text-black/55">
        ✓ We respect your privacy. No spam, ever.
      </div>
    </form>
  );
}