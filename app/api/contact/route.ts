import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      phone,
      email,
      service,
      area,
      urgency,
      message,
      website,
    } = body;

    // Honeypot spam protection
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!firstName || !phone) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide your name and phone number.",
        },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName || ""}`.trim();

    await transporter.sendMail({
      from: `"Tupelo Plumber Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email || process.env.GMAIL_USER,
      subject: `New Service Request: ${service || "General"} — ${fullName}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Service Request — Tupelo Plumber</h2>

          <hr />

          <h3>Customer Information</h3>

          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${
            email ? escapeHtml(email) : "Not provided"
          }</p>

          <h3>Service Information</h3>

          <p><strong>Service:</strong> ${
            escapeHtml(service || "Not specified")
          }</p>

          <p><strong>Location:</strong> ${
            escapeHtml(area || "Not specified")
          }</p>

          <p><strong>Urgency:</strong> ${
            escapeHtml(urgency || "Not specified")
          }</p>

          <h3>Customer Message</h3>

          <p>${
            escapeHtml(message || "No message provided.")
          }</p>

          <hr />

          <p style="color:#666;font-size:13px;">
            Submitted through the Tupelo Plumber website.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Gmail error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to send your request. Please call us directly.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}