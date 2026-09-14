import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: true,
  },
})

function buildEmailHTML(data: {
  name: string
  company: string
  jobTitle: string
  email: string
  enquiryReason: string
  message: string
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f5f7;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(27,33,81,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1B2151 0%, #2a3270 100%);padding:36px 40px;text-align:center;">
              <h1 style="margin:0;color:#ECB96A;font-size:22px;font-weight:700;letter-spacing:0.5px;">
                VANTAGE CLINICAL STRATEGY
              </h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.7);font-size:13px;letter-spacing:1px;">
                NEW ENQUIRY RECEIVED
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px 16px;">
              <p style="margin:0 0 24px;color:#1B2151;font-size:16px;line-height:1.6;">
                A new enquiry has been submitted through the website contact form.
              </p>

              <!-- Details Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f9fb;border-radius:12px;border:1px solid #e8eaef;margin-bottom:24px;">
                <tr>
                  <td style="padding:24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid #e8eaef;">
                          <span style="color:#8b8fa3;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Name</span><br>
                          <span style="color:#1B2151;font-size:15px;font-weight:600;">${data.name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid #e8eaef;">
                          <span style="color:#8b8fa3;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Company</span><br>
                          <span style="color:#1B2151;font-size:15px;font-weight:600;">${data.company}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid #e8eaef;">
                          <span style="color:#8b8fa3;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Job Title</span><br>
                          <span style="color:#1B2151;font-size:15px;font-weight:600;">${data.jobTitle}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid #e8eaef;">
                          <span style="color:#8b8fa3;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Email</span><br>
                          <a href="mailto:${data.email}" style="color:#1B2151;font-size:15px;font-weight:600;text-decoration:none;">${data.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;">
                          <span style="color:#8b8fa3;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Enquiry Reason</span><br>
                          <span style="display:inline-block;margin-top:4px;padding:4px 12px;background-color:#ECB96A;color:#1B2151;font-size:13px;font-weight:700;border-radius:20px;">${data.enquiryReason}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              ${data.message ? `
              <!-- Message -->
              <div style="margin-bottom:24px;">
                <p style="margin:0 0 8px;color:#8b8fa3;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Message</p>
                <div style="background-color:#f8f9fb;border-left:3px solid #ECB96A;border-radius:0 8px 8px 0;padding:16px 20px;">
                  <p style="margin:0;color:#161616;font-size:14px;line-height:1.7;white-space:pre-wrap;">${data.message}</p>
                </div>
              </div>
              ` : ''}

              <!-- Reply Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding:8px 0 24px;">
                    <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.enquiryReason)} — Vantage Clinical Strategy" 
                       style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#1B2151,#2a3270);color:#ECB96A;font-size:14px;font-weight:700;text-decoration:none;border-radius:8px;letter-spacing:0.3px;">
                      Reply to ${data.name} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;background-color:#f8f9fb;border-top:1px solid #e8eaef;text-align:center;">
              <p style="margin:0;color:#8b8fa3;font-size:12px;">
                Submitted on ${new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} 
                at ${new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })} <br> Automation Developed By <a href="https://www.hamzakhaliq.com">Hamza Khaliq</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function buildConfirmationEmailHTML(data: {
  name: string
  enquiryReason: string
  message: string
}) {
  const firstName = data.name.split(' ')[0]
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#0f1333;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(160deg,#0f1333 0%,#1a2060 100%);padding:48px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Logo / Brand Header -->
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <div style="display:inline-block;border-bottom:2px solid #ECB96A;padding-bottom:12px;">
                <p style="margin:0;color:#ECB96A;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">— VANTAGE —</p>
                <p style="margin:4px 0 0;color:rgba(255,255,255,0.5);font-size:10px;letter-spacing:2px;text-transform:uppercase;">Clinical Strategy</p>
              </div>
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td style="background:rgba(255,255,255,0.04);border:1px solid rgba(236,185,106,0.15);border-radius:20px;overflow:hidden;">

              <!-- Gold accent stripe -->
              <div style="height:4px;background:linear-gradient(90deg,#ECB96A,#d4a458,#ECB96A);"></div>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:44px 48px 32px;">

                    <!-- Greeting -->
                    <h1 style="margin:0 0 8px;color:#ECB96A;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Enquiry Received</h1>
                    <h2 style="margin:0 0 24px;color:#ffffff;font-size:28px;font-weight:700;line-height:1.3;">Thank you, ${firstName}.</h2>
                    <p style="margin:0 0 32px;color:rgba(255,255,255,0.65);font-size:15px;line-height:1.8;">
                      We've received your enquiry regarding <strong style="color:#ECB96A;">${data.enquiryReason}</strong> and will be in touch within <strong style="color:#ffffff;">one business day</strong>. Your request has been passed directly to Emily Hardy.
                    </p>

                    <!-- Divider -->
                    <div style="height:1px;background:rgba(255,255,255,0.08);margin-bottom:32px;"></div>

                    <!-- What happens next -->
                    <h3 style="margin:0 0 20px;color:#ffffff;font-size:14px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">What Happens Next</h3>

                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                      <tr>
                        <td style="padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.07);vertical-align:top;">
                          <table cellpadding="0" cellspacing="0"><tr>
                            <td style="padding-right:16px;vertical-align:top;">
                              <div style="width:28px;height:28px;background:#ECB96A;border-radius:50%;text-align:center;line-height:28px;color:#1B2151;font-size:12px;font-weight:800;">1</div>
                            </td>
                            <td style="vertical-align:top;">
                              <p style="margin:4px 0 0;color:rgba(255,255,255,0.8);font-size:14px;"><strong style="color:#fff;">Review</strong> — Emily will personally review your enquiry and the context you've provided.</p>
                            </td>
                          </tr></table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.07);vertical-align:top;">
                          <table cellpadding="0" cellspacing="0"><tr>
                            <td style="padding-right:16px;vertical-align:top;">
                              <div style="width:28px;height:28px;background:#ECB96A;border-radius:50%;text-align:center;line-height:28px;color:#1B2151;font-size:12px;font-weight:800;">2</div>
                            </td>
                            <td style="vertical-align:top;">
                              <p style="margin:4px 0 0;color:rgba(255,255,255,0.8);font-size:14px;"><strong style="color:#fff;">Contact</strong> — We'll reach out to you directly at this address to arrange a confidential conversation.</p>
                            </td>
                          </tr></table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 0;vertical-align:top;">
                          <table cellpadding="0" cellspacing="0"><tr>
                            <td style="padding-right:16px;vertical-align:top;">
                              <div style="width:28px;height:28px;background:#ECB96A;border-radius:50%;text-align:center;line-height:28px;color:#1B2151;font-size:12px;font-weight:800;">3</div>
                            </td>
                            <td style="vertical-align:top;">
                              <p style="margin:4px 0 0;color:rgba(255,255,255,0.8);font-size:14px;"><strong style="color:#fff;">Strategic Briefing</strong> — We'll schedule your initial consultation at a time that suits your diary.</p>
                            </td>
                          </tr></table>
                        </td>
                      </tr>
                    </table>

                    <!-- Calendly CTA -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:36px;">
                      <tr>
                        <td align="center">
                          <p style="margin:0 0 16px;color:rgba(255,255,255,0.5);font-size:13px;">Prefer to book a time now?</p>
                          <a href="https://calendly.com/emily-hardy-vantageclinicalstrategy/30min"
                             style="display:inline-block;padding:15px 36px;background:linear-gradient(135deg,#ECB96A,#d4a458);color:#1B2151;font-size:14px;font-weight:800;text-decoration:none;border-radius:10px;letter-spacing:0.5px;">
                            Schedule via Calendly &rarr;
                          </a>
                        </td>
                      </tr>
                    </table>

                    <!-- Divider -->
                    <div style="height:1px;background:rgba(255,255,255,0.08);margin-bottom:28px;"></div>

                    ${data.message ? `
                    <!-- Message echo -->
                    <p style="margin:0 0 8px;color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:1px;">Your message</p>
                    <div style="background:rgba(0,0,0,0.2);border-left:3px solid #ECB96A;border-radius:0 8px 8px 0;padding:14px 18px;margin-bottom:28px;">
                      <p style="margin:0;color:rgba(255,255,255,0.6);font-size:13px;line-height:1.7;font-style:italic;">&ldquo;${data.message}&rdquo;</p>
                    </div>` : ''}

                    <!-- Sign-off -->
                    <p style="margin:0 0 4px;color:rgba(255,255,255,0.7);font-size:14px;">Warm regards,</p>
                    <p style="margin:0;color:#ffffff;font-size:16px;font-weight:700;">Emily Hardy</p>
                    <p style="margin:0;color:#ECB96A;font-size:13px;">Managing Director &amp; Principal Consultant<br>Vantage Clinical Strategy</p>

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:28px 0 0;text-align:center;">
              <p style="margin:0 0 8px;color:rgba(255,255,255,0.25);font-size:12px;">Vantage Clinical Strategy &bull; United Kingdom. <br>Automation Developed By <a href="https://www.hamzakhaliq.com">Hamza Khaliq</a>
              <p style="margin:0;color:rgba(255,255,255,0.2);font-size:11px;">
                You're receiving this because you submitted an enquiry at vantageclinicalstrategy.com.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, jobTitle, email, enquiryReason, message } = body

    // Validate required fields
    if (!name || !company || !jobTitle || !email || !enquiryReason) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send both emails in parallel
    await Promise.all([
      // 1. Internal notification to Vantage
      transporter.sendMail({
        from: `"Vantage Website" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `New Enquiry: ${enquiryReason} — ${name} (${company})`,
        html: buildEmailHTML({ name, company, jobTitle, email, enquiryReason, message }),
      }),
      // 2. Confirmation email to enquirer
      transporter.sendMail({
        from: `"Emily Hardy — Vantage Clinical Strategy" <${process.env.GMAIL_USER}>`,
        to: email,
        replyTo: process.env.GMAIL_USER,
        subject: `Your Enquiry Has Been Received — Vantage Clinical Strategy`,
        html: buildConfirmationEmailHTML({ name, enquiryReason, message }),
        headers: {
          'X-Mailer': 'Vantage Clinical Strategy Website',
          'X-Priority': '3',
          'X-MS-Exchange-Organization-SCL': '-1',
          'Precedence': 'transactional',
          'Auto-Submitted': 'auto-generated',
          'List-Unsubscribe': `<mailto:${process.env.GMAIL_USER}?subject=Unsubscribe>`,
        },
      }),
    ])

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your enquiry. We will be in touch shortly.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send your enquiry. Please try again or email us directly.' },
      { status: 500 }
    )
  }
}
