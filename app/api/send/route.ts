// api/send/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is missing. Set it in .env.local");
    }

    const { data, error } = await resend.emails.send({
      from: "Harika Studio <hello@harikastudio.com>",
      to: ["bachtiarazizy@gmail.com"],
      subject: "Test Email from Harika Studio",
      react: EmailTemplate({ firstName: "Bachtiar" }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    console.log("Resend API success:", data);
    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Route error:", err);
    return NextResponse.json(
      {
        success: false,
        message: err?.message || "Unknown error",
        stack: err?.stack || null,
      },
      { status: 500 }
    );
  }
}
