// import { EmailTemplate } from "@/components/EmailTemplate";
import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// export async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const { name, email, subject, company, message } = req.body;
//   const { SMTP, SMTP_EMAIL } = process.env;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, // use TLS
//     auth: {
//       user: SMTP_EMAIL,
//       pass: SMTP,
//     },
//   });

//   try {
//     const testResult = await transporter.verify();
//     console.log(testResult);
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(500)
//       .json({ message: "Error occurred while verifying the transporter." });
//   }

//   try {
//     const sendResult = await transporter.sendMail({
//       from: SMTP_EMAIL,
//       to: SMTP_EMAIL,
//       subject,
//       html: EmailTemplate({
//         name: name,
//         message: message,
//         company: company,
//         email: email,
//         subject: subject,
//       }),
//     });

//     console.log(sendResult);
//     return res.status(200).json({ message: "Email sent successfully." });
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(500)
//       .json({ message: "Error occurred while sending the email." });
//   }
// }

export async function POST(resquest: Request) {
  try {
    const body = await resquest.json();
    console.log(body);
    const { name, email, subject, company, message } = body;
    const { SMTP, SMTP_EMAIL } = process.env;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use TLS
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP,
      },
    });

    try {
      const testResult = await transporter.verify();
      console.log(testResult);
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        message: "Error occurred while verifying the transporter.",
      });
    }

    try {
      const sendResult = await transporter.sendMail({
        from: SMTP_EMAIL,
        to: SMTP_EMAIL,
        subject,
        // react: EmailTemplate({
        //   name: name,
        //   message: message,
        //   company: company,
        //   email: email,
        //   subject: subject,
        // }) as React.ReactElement,
      });

      console.log(sendResult);
      return NextResponse.json({ message: "Email sent successfully." });
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        message: "Error occurred while sending the email.",
      });
    }
  } catch (error) {
    return NextResponse.json({ error });
  }
}
