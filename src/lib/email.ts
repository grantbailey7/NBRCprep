import { Resend } from 'resend'
import { createHmac } from 'crypto'

const resend = new Resend(process.env.RESEND_API_KEY ?? 'missing-key')

function unsubToken(email: string): string {
  return createHmac('sha256', process.env.UNSUBSCRIBE_SECRET ?? 'dev-secret')
    .update(email.toLowerCase())
    .digest('hex')
    .slice(0, 20)
}

function unsubUrl(email: string): string {
  return `https://nbrcprep.app/api/unsubscribe?email=${encodeURIComponent(email)}&token=${unsubToken(email)}`
}

function wrap(preheader: string, body: string, email: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>NBRCprep</title>
</head>
<body style="margin:0;padding:0;background:#f2f2f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${preheader}&nbsp;&#8203;&nbsp;&#8203;&nbsp;&#8203;&nbsp;&#8203;&nbsp;&#8203;&nbsp;&#8203;&nbsp;&#8203;&nbsp;&#8203;&nbsp;&#8203;&nbsp;&#8203;</div>
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f2f2f0;">
  <tr><td style="padding:40px 16px;">
    <table align="center" width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;margin:0 auto;">
      <tr>
        <td style="background:#111;border-radius:12px 12px 0 0;padding:22px 32px;">
          <span style="font-size:21px;font-weight:900;color:#fff;letter-spacing:-0.5px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">NBRC<span style="color:#0D9488;">prep</span></span>
        </td>
      </tr>
      <tr>
        <td style="background:#fff;padding:36px 32px 28px;">
          ${body}
        </td>
      </tr>
      <tr>
        <td style="background:#fafaf8;border-top:1px solid #ebebeb;border-radius:0 0 12px 12px;padding:16px 32px;">
          <p style="margin:0;color:#b0b0a8;font-size:11px;line-height:1.6;">© 2026 NBRCprep.app - Not affiliated with NBRC or AARC. Questions are original and independently developed.</p>
          <p style="margin:5px 0 0;font-size:11px;"><a href="${unsubUrl(email)}" style="color:#b0b0a8;text-decoration:underline;">Unsubscribe</a><span style="color:#d0d0c8;"> · </span><a href="https://nbrcprep.app" style="color:#b0b0a8;text-decoration:none;">nbrcprep.app</a></p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`
}

function btn(text: string, url: string): string {
  return `<table cellpadding="0" cellspacing="0" role="presentation" style="margin:28px 0 8px;">
  <tr>
    <td style="background:#0D9488;border-radius:8px;">
      <a href="${url}" style="display:inline-block;padding:13px 26px;font-size:15px;font-weight:700;color:#111;text-decoration:none;letter-spacing:-0.2px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">${text}</a>
    </td>
  </tr>
</table>`
}

function p(text: string): string {
  return `<p style="margin:0 0 18px;font-size:15px;line-height:1.75;color:#333;">${text}</p>`
}

function h2(text: string): string {
  return `<h2 style="margin:28px 0 12px;font-size:18px;font-weight:700;color:#111;letter-spacing:-0.3px;">${text}</h2>`
}

function li(items: string[]): string {
  const rows = items.map(i => `<li style="margin-bottom:8px;">${i}</li>`).join('')
  return `<ul style="margin:0 0 18px;padding-left:22px;color:#333;font-size:15px;line-height:1.7;">${rows}</ul>`
}

function sig(): string {
  return `<p style="margin:28px 0 0;font-size:15px;line-height:1.6;color:#333;">Grant<br><span style="color:#888;font-size:13px;">NBRCprep</span></p>`
}

export async function sendPasswordResetEmail(email: string, resetUrl: string, name?: string | null) {
  await resend.emails.send({
    from: 'NBRCprep <no-reply@certinhq.com>',
    to: email,
    subject: 'NBRCprep: Reset your password',
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f2f2f0;margin:0;padding:40px 20px;">
  <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;">
    <div style="background:#111;padding:22px 32px;">
      <span style="font-size:21px;font-weight:900;color:#fff;letter-spacing:-0.5px;">NBRC<span style="color:#0D9488;">prep</span></span>
    </div>
    <div style="padding:32px;">
      <h1 style="margin:0 0 8px;font-size:22px;font-weight:800;color:#111;">Reset your password</h1>
      <p style="margin:0 0 24px;color:#555;font-size:15px;line-height:1.6;">
        ${name ? `Hi ${name}, we` : 'We'} received a request to reset the password for your NBRCprep account.
        Click the button below to choose a new password.
      </p>
      <table cellpadding="0" cellspacing="0" role="presentation"><tr><td style="background:#0D9488;border-radius:8px;">
        <a href="${resetUrl}" style="display:inline-block;padding:13px 26px;font-size:15px;font-weight:700;color:#111;text-decoration:none;">Reset Password</a>
      </td></tr></table>
      <p style="margin:24px 0 0;color:#888;font-size:13px;line-height:1.5;">
        This link expires in <strong>1 hour</strong>. If you didn't request a reset, ignore this email.
      </p>
    </div>
    <div style="padding:16px 32px;border-top:1px solid #f0f0f0;background:#fafaf8;">
      <p style="margin:0;color:#aaa;font-size:12px;">© 2026 NBRCprep.app - Not affiliated with NBRC or AARC.</p>
    </div>
  </div>
</body>
</html>`.trim(),
  })
}

export async function sendWelcomeEmail(email: string, name?: string | null) {
  const firstName = name?.split(' ')[0] || null
  const greeting = firstName ? `Hi ${firstName},` : 'Hi,'

  const body = `
    <p style="margin:0 0 24px;font-size:15px;line-height:1.75;color:#333;">${greeting}</p>
    ${p('Welcome to NBRCprep. You just took the first step toward earning your respiratory therapy credentials - and that puts you ahead of most candidates.')}
    ${p("Here's the fastest way to get oriented:")}

    <table cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin-bottom:18px;">
      <tr>
        <td style="width:36px;vertical-align:top;padding-top:2px;">
          <div style="width:26px;height:26px;background:#0D9488;border-radius:50%;text-align:center;font-size:13px;font-weight:700;color:#111;line-height:26px;">1</div>
        </td>
        <td style="vertical-align:top;padding-left:12px;">
          <p style="margin:0;font-size:15px;line-height:1.7;color:#333;"><strong style="color:#111;">Start with TMC.</strong> The Therapist Multiple-Choice exam is the foundation of NBRC credentialing. Master it first, then branch out to specialty exams.</p>
        </td>
      </tr>
    </table>

    <table cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin-bottom:18px;">
      <tr>
        <td style="width:36px;vertical-align:top;padding-top:2px;">
          <div style="width:26px;height:26px;background:#0D9488;border-radius:50%;text-align:center;font-size:13px;font-weight:700;color:#111;line-height:26px;">2</div>
        </td>
        <td style="vertical-align:top;padding-left:12px;">
          <p style="margin:0;font-size:15px;line-height:1.7;color:#333;"><strong style="color:#111;">Try the free flashcards.</strong> Your account includes 20 preview cards per division. Enough to see what the content covers and where your knowledge gaps are.</p>
        </td>
      </tr>
    </table>

    <table cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin-bottom:28px;">
      <tr>
        <td style="width:36px;vertical-align:top;padding-top:2px;">
          <div style="width:26px;height:26px;background:#0D9488;border-radius:50%;text-align:center;font-size:13px;font-weight:700;color:#111;line-height:26px;">3</div>
        </td>
        <td style="vertical-align:top;padding-left:12px;">
          <p style="margin:0;font-size:15px;line-height:1.7;color:#333;"><strong style="color:#111;">Schedule your exam.</strong> Even if you are months away, booking a date creates a deadline that focuses your study. Candidates who schedule early pass more often.</p>
        </td>
      </tr>
    </table>

    ${btn('Go to your dashboard →', 'https://nbrcprep.app/dashboard')}

    ${p("I'll send you a few notes over the next few weeks with what I've learned about what actually helps candidates pass. No spam - just things worth knowing.")}
    ${sig()}
  `

  await resend.emails.send({
    from: 'Grant from NBRCprep <grant@certinhq.com>',
    to: email,
    subject: "NBRCprep: You're in - here's where to start",
    html: wrap("Your NBRCprep account is ready. Here's how to get started.", body, email),
  })
}

export async function sendDripEmail2(email: string, name?: string | null) {
  const firstName = name?.split(' ')[0] || null
  const greeting = firstName ? `Hi ${firstName},` : 'Hi,'

  const body = `
    ${p(greeting)}
    ${p("Three days in. If you've opened the app at all, you're already outpacing most free accounts.")}
    ${p('I want to share something that will save you months of wasted studying: <strong style="color:#111;">the most common NBRC exam mistake is passive reading.</strong>')}
    ${p("Reading textbooks and re-highlighting notes <em>feels</em> productive. Study science is clear that it doesn't work - at least not for retention. Active recall, meaning testing yourself on the material, builds dramatically stronger and longer-lasting memory.")}
    ${p("This matters especially for the NBRC exams because they don't test whether you've read things. They test whether you can apply clinical judgment in realistic patient scenarios - the kind of decisions a respiratory therapist makes every shift.")}
    ${h2('Try this today')}
    ${p("Before reviewing any material, open NBRCprep and answer 10 flashcards in your target division cold. Don't review first. Notice which topics trip you up. Those gaps are what need your attention.")}
    ${btn('Try 10 flashcards now →', 'https://nbrcprep.app/dashboard')}
    ${p('Free accounts get 20 preview cards per division - enough to see exactly where you stand.')}
    ${sig()}
  `

  await resend.emails.send({
    from: 'Grant from NBRCprep <grant@certinhq.com>',
    to: email,
    subject: 'NBRCprep: The study mistake that fails most RT candidates',
    html: wrap("It feels productive. It doesn't work. Here's what does.", body, email),
  })
}

export async function sendDripEmail3(email: string, name?: string | null) {
  const firstName = name?.split(' ')[0] || null
  const greeting = firstName ? `Hi ${firstName},` : 'Hi,'

  const body = `
    ${p(greeting)}
    ${p("A week in. After watching many candidates go through NBRC exams, the ones who pass consistently do three things differently.")}

    ${h2('1. They schedule the exam before they feel ready.')}
    ${p("Booking a test date creates a deadline. Deadlines turn vague intentions into focused daily preparation. Schedule first. Study to the deadline.")}

    ${h2('2. They treat wrong answers as their most valuable resource.')}
    ${p("If you got a question right, you already know that material. If you got it wrong, that's exactly where the exam will cost you. Candidates who pause on every wrong answer and understand <em>why</em> the correct answer is correct improve dramatically faster.")}

    ${h2('3. They study a little every day instead of cramming.')}
    ${p("A 20-minute session five days a week outperforms a 2-hour session once a week. Daily exposure builds durable long-term retention.")}

    ${p("NBRCprep tracks your study streak for exactly this reason. Even answering 10 flashcards before bed counts.")}

    ${btn('Start your streak today →', 'https://nbrcprep.app/dashboard')}
    ${sig()}
  `

  await resend.emails.send({
    from: 'Grant from NBRCprep <grant@certinhq.com>',
    to: email,
    subject: 'NBRCprep: What every RT who passes the NBRC does differently',
    html: wrap('Three habits. Not complicated. Remarkably effective.', body, email),
  })
}

export async function sendDripEmail4(email: string, name?: string | null) {
  const firstName = name?.split(' ')[0] || null
  const greeting = firstName ? `Hi ${firstName},` : 'Hi,'

  const body = `
    ${p(greeting)}
    ${p("Something worth knowing before you invest in a stack of textbooks:")}
    ${p("The NBRC doesn't test whether you've memorized Egan's. It tests whether you can apply clinical judgment in realistic patient scenarios - the kind of call a respiratory therapist makes under pressure.")}
    ${p("NBRCprep is built specifically for the gap between knowing content and passing the exam.")}

    ${h2('What Full Access includes')}
    ${li([
      '<strong style="color:#111;">400 original flashcards for TMC</strong> - written to test clinical judgment and application, not definitions',
      '<strong style="color:#111;">30 timed mini exams</strong> - 20 questions each, under real time pressure, with detailed explanations',
      '<strong style="color:#111;">3 full-length exam simulations</strong> - matching the exact NBRC format, timed to the minute',
      '<strong style="color:#111;">Progress tracking</strong> - see your weak topics, study streaks, and score trends over time',
    ])}

    <table cellpadding="0" cellspacing="0" role="presentation" style="width:100%;border:1px solid #eee;border-radius:8px;margin-bottom:24px;">
      <tr>
        <td style="padding:20px 24px;">
          <p style="margin:0 0 4px;font-size:22px;font-weight:900;color:#111;letter-spacing:-0.5px;">$29<span style="font-size:14px;font-weight:400;color:#888;">/month</span></p>
          <p style="margin:0;font-size:13px;color:#888;">Cancel anytime. Less than one NBRC retake fee.</p>
        </td>
      </tr>
    </table>

    ${btn('Upgrade to Full Access →', 'https://nbrcprep.app/pricing')}
    ${sig()}
  `

  await resend.emails.send({
    from: 'Grant from NBRCprep <grant@certinhq.com>',
    to: email,
    subject: 'NBRCprep: Why 400 targeted flashcards beats a stack of textbooks',
    html: wrap("The NBRC doesn't test what most resources prepare you for.", body, email),
  })
}

export async function sendDripEmail5(email: string, name?: string | null) {
  const firstName = name?.split(' ')[0] || null
  const greeting = firstName ? `Hi ${firstName},` : 'Hi,'

  const body = `
    ${p(greeting)}
    ${p("Two weeks since you signed up. I want to ask you something directly:")}
    <p style="margin:0 0 24px;font-size:19px;font-weight:700;color:#111;line-height:1.4;">Have you scheduled your exam yet?</p>
    ${p("Not taken it - just scheduled it. Picked a date. Put it on the calendar.")}
    ${p("Without a deadline, exam prep lives in the category of things you'll do when you're ready. That category has no exit condition. Candidates who schedule first consistently outperform those who don't.")}

    ${h2("Here's something to help")}
    ${p("I want to give you 20% off any paid plan. Use the code below at checkout:")}

    <table cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin:20px 0 24px;">
      <tr>
        <td style="background:#f0fdfa;border:2px dashed #0D9488;border-radius:10px;padding:20px 24px;text-align:center;">
          <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#0D9488;text-transform:uppercase;letter-spacing:1px;">Promo Code</p>
          <p style="margin:0;font-size:28px;font-weight:900;color:#111;letter-spacing:2px;">PREP20</p>
          <p style="margin:8px 0 0;font-size:13px;color:#666;">20% off any plan - applied at checkout</p>
        </td>
      </tr>
    </table>

    ${btn('Upgrade now with 20% off →', 'https://nbrcprep.app/pricing')}
    ${p("And if you've already upgraded - thank you. Go schedule that exam.")}
    ${sig()}
  `

  await resend.emails.send({
    from: 'Grant from NBRCprep <grant@certinhq.com>',
    to: email,
    subject: 'NBRCprep: 20% off - use code PREP20 at checkout',
    html: wrap('Your exclusive 20% discount is waiting.', body, email),
  })
}

export async function sendDripEmail6(email: string, name?: string | null) {
  const firstName = name?.split(' ')[0] || null
  const greeting = firstName ? `Hi ${firstName},` : 'Hi,'

  const body = `
    ${p(greeting)}
    ${p("This is the last email I'll send you about upgrading. I know you've seen the pitch by now.")}
    ${p("Instead, I just want to lay out what's available clearly and let you decide.")}

    ${h2('What Full Access includes')}
    ${li([
      '400 original flashcards for TMC - clinically focused',
      '30 timed mini exams - 20 questions each',
      '3 full-length simulations - timed to match the real NBRC exam',
      'Detailed explanations for every answer, correct and wrong',
      'Progress tracking and study streaks',
    ])}

    ${h2('The honest math')}
    ${p("Monthly access is $29/month. A single NBRC exam retake costs $190 in fees alone - not counting the wait time and the months of extra prep. If NBRCprep improves your odds of passing on your first attempt by even a small margin, it pays for itself.")}

    <table cellpadding="0" cellspacing="0" role="presentation" style="width:100%;background:#fffef5;border:1.5px solid #0D9488;border-radius:10px;margin:24px 0;">
      <tr><td style="padding:20px 24px;">
        <p style="margin:0 0 4px;font-size:22px;font-weight:900;color:#111;letter-spacing:-0.5px;">$29<span style="font-size:14px;font-weight:400;color:#888;">/month</span></p>
        <p style="margin:0;font-size:13px;color:#666;">Cancel anytime. No commitment.</p>
      </td></tr>
    </table>

    ${btn('Start Full Access →', 'https://nbrcprep.app/pricing')}

    ${p("If you're not actively studying right now, no pressure. Come back when you are. The content will be here.")}
    ${p('Good luck with your exam.')}
    ${sig()}
  `

  await resend.emails.send({
    from: 'Grant from NBRCprep <grant@certinhq.com>',
    to: email,
    subject: "NBRCprep: Last thing I'll say about upgrading (I promise)",
    html: wrap("Then I'll leave you alone. But read this first.", body, email),
  })
}

export async function sendUpgradeThankYouEmail(email: string, planLabel: string, name?: string | null) {
  const firstName = name?.split(' ')[0] || null
  const greeting = firstName ? `Hi ${firstName},` : 'Hi,'

  const isLifetime = planLabel.toLowerCase().includes('lifetime')

  const body = `
    ${p(greeting)}
    ${p(`You just upgraded to <strong style="color:#111;">${planLabel}</strong>. Thank you - seriously.`)}
    ${p('Here\'s what you now have access to:')}
    ${li([
      '<strong style="color:#111;">400 original flashcards for TMC</strong> - clinically focused, not textbook definitions',
      '<strong style="color:#111;">30 timed mini exams</strong> - 20 questions each, under real time pressure',
      '<strong style="color:#111;">3 full-length exam simulations</strong> - timed to match the real NBRC format',
      '<strong style="color:#111;">Progress tracking</strong> - study streaks, score trends, and weak topic identification',
    ])}
    ${h2('What to do right now')}
    ${p('Pick the division you\'re studying for and take a mini exam. Don\'t study first - just take it cold. Your score will tell you exactly where you stand and what topics need the most work.')}
    ${btn('Go to your dashboard →', 'https://nbrcprep.app/dashboard')}
    ${isLifetime
      ? p('Your access never expires. No renewals, no recurring charges. One purchase, and you\'re set for as long as NBRCprep exists - including any new content we add.')
      : p('Your subscription renews monthly. You can manage or cancel anytime from your <a href="https://nbrcprep.app/billing" style="color:#111;font-weight:600;">billing page</a>.')
    }
    ${p('Good luck with the exam. You\'re going to crush it.')}
    ${sig()}
  `

  await resend.emails.send({
    from: 'Grant from NBRCprep <grant@certinhq.com>',
    to: email,
    subject: isLifetime
      ? 'NBRCprep: Welcome to Lifetime Access - you\'re all set'
      : 'NBRCprep: You\'re upgraded - here\'s what to do first',
    html: wrap(
      isLifetime
        ? 'Lifetime Access is active. Here\'s how to make the most of it.'
        : 'Full Access is live. Here\'s how to make the most of it.',
      body,
      email
    ),
  })
}

export function verifyUnsubToken(email: string, token: string): boolean {
  return unsubToken(email) === token
}
