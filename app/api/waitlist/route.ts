import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email required' }), { status: 400 })
    }

    await resend.emails.send({
      from: 'FBO <hello@brockjohn.com>',
      to: email,
      subject: 'Your Full Body Orgasm Course Access',
      html: `
        <div style="font-family: sans-serif; background:#ffffff; padding:40px;">
          <h2 style="color:#1F2937;">You're in.</h2>

          <p style="color:#6B7280;">
            Your access to the Full Body Orgasm Course is ready.
          </p>

          <a href="https://fbo-35min-course.vercel.app"
             style="display:inline-block;margin-top:20px;padding:12px 20px;background:#E7C9C9;color:#111;text-decoration:none;border-radius:8px;">
             Start Your 35-Min Experience
          </a>

          <p style="margin-top:30px;color:#9CA3AF;font-size:12px;">
            You'll receive your next steps instantly.
          </p>
        </div>
      `,
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch {
    return new Response(JSON.stringify({ error: 'Email failed' }), { status: 500 })
  }
}
