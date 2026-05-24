import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Shubham Yadav <hello@y1shubham.in>",
    to: "shubham.yadav.inbox@gmail.com",
    replyTo: email,
    subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] Message from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0B0F19;color:#F9FAFB;padding:32px;border-radius:12px;">
        <h2 style="color:#60A5FA;margin-bottom:4px;">New Portfolio Message</h2>
        <p style="color:#9CA3AF;font-size:13px;margin-top:0;">Submitted via your portfolio contact form</p>
        <hr style="border-color:#1F2937;margin:20px 0;" />
        <table style="width:100%;font-size:14px;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#9CA3AF;width:80px;">Name</td><td style="color:#F9FAFB;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#9CA3AF;">Email</td><td><a href="mailto:${email}" style="color:#60A5FA;">${email}</a></td></tr>
          ${subject ? `<tr><td style="padding:8px 0;color:#9CA3AF;">Subject</td><td style="color:#F9FAFB;">${subject}</td></tr>` : ""}
        </table>
        <hr style="border-color:#1F2937;margin:20px 0;" />
        <p style="color:#9CA3AF;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em;">Message</p>
        <p style="color:#F9FAFB;line-height:1.6;white-space:pre-wrap;">${message}</p>
        <hr style="border-color:#1F2937;margin:24px 0;" />
        <p style="color:#6B7280;font-size:12px;">Reply directly to this email — it will go to ${email}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
