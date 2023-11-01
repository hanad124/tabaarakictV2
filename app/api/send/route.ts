import { EmailTemplate } from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

console.log(process.env.RESEND_API_KEY);

// resend.domains.create({ name: 'mail.tabaarakict.dev' });

export async function POST(resquest: Request) {
  try {
    const body = await resquest.json();
    console.log(body);
    const { name, email, subject, company, message } = body;
    const data = await resend.sendEmail({
      from: "onboarding@resend.dev",
      to: ["hanaddaahir124@gmail.com"],
      subject: subject,
      react: EmailTemplate({
        name: name,
        message: message,
        company: company,
        email: email,
        subject: subject,
      }) as React.ReactElement,
    });

    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
