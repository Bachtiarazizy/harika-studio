// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactConfirmationEmail } from "@/components/emails/ContactConfirmationEmail";
import { AdminNotificationEmail } from "@/components/emails/AdminNotificationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Validate API key
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY is missing");
      return NextResponse.json({ success: false, message: "Email service not configured" }, { status: 500 });
    }

    // Parse request body
    const body = await request.json();
    const { name, email, phone, company, service, budget, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Name, email, and message are required" }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Invalid email format" }, { status: 400 });
    }

    // Get current timestamp
    const submittedAt = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
    });

    console.log("📧 Sending emails...");

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: "Harika Studio <hello@harikastudio.com>",
      to: [email],
      subject: "Thank you for contacting Harika Studio",
      react: ContactConfirmationEmail({
        name,
        email,
        phone,
        company,
        service,
        budget,
        message,
      }),
    });

    if (userEmailResult.error) {
      console.error("❌ User email error:", userEmailResult.error);
    } else {
      console.log("✅ User email sent:", userEmailResult.data);
    }

    // Send notification email to admin (Harika Studio)
    const adminEmailResult = await resend.emails.send({
      from: "Harika Studio <hello@harikastudio.com>",
      to: ["bachtiarazizy@gmail.com"], // Your admin email
      replyTo: email, // Allow direct reply to the client
      subject: `🔔 New Contact: ${name} - ${service || "General Inquiry"}`,
      react: AdminNotificationEmail({
        name,
        email,
        phone,
        company,
        service,
        budget,
        message,
        submittedAt,
      }),
    });

    if (adminEmailResult.error) {
      console.error("❌ Admin email error:", adminEmailResult.error);
    } else {
      console.log("✅ Admin email sent:", adminEmailResult.data);
    }

    // Check if both emails sent successfully
    if (userEmailResult.error || adminEmailResult.error) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send one or more emails",
          errors: {
            user: userEmailResult.error,
            admin: adminEmailResult.error,
          },
        },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
      data: {
        userEmailId: userEmailResult.data?.id,
        adminEmailId: adminEmailResult.data?.id,
      },
    });
  } catch (error: any) {
    console.error("❌ Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while sending your message",
        error: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS (if needed)
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, { status: 200 });
}
