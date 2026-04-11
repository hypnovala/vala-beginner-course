'use client'

import { FormEvent, useState } from 'react'

export default function FullBodyOrgasmCourseLandingPage() {
  const stripeCheckoutUrl = 'https://checkout.stripe.com/c/pay/REPLACE_WITH_YOUR_LINK'
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleMembershipSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email.trim()) return

    setIsSubmitting(true)
    setSubmitted(false)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        return
      }

      setSubmitted(true)
      setEmail('')
    } finally {
      setIsSubmitting(false)
    }
  }

  const sections = [
    {
      title: 'Release pressure',
      text: 'A calm, guided experience that helps you shift from tension, overthinking, and performance into body awareness, breath, and expanded sensation.',
    },
    {
      title: 'Expand sensation',
      text: 'This 35-minute course is designed to help you slow down, feel more, and build your capacity for grounded, full-body pleasure without force or overwhelm.',
    },
    {
      title: 'Learn Brock’s framework',
      text: 'Breath, somatic awareness, presence, and energy circulation come together in a simple, elegant format you can return to again and again.',
    },
  ]

  const moduleLessons = [
    { id: '1', title: 'Somatic Foundations' },
    { id: '2', title: 'Sensual Guided Practice' },
  ]

  const modules = [
    {
      num: '01',
      title: 'Arrival',
      text: 'Settle your nervous system, release urgency, and create a safe internal starting point.',
      unlocked: true,
      embedUrl: 'https://hypnoticdreamtv.com/wp-content/uploads/2026/04/FBO_music_2K.mp4',
      lessons: [
        { ...moduleLessons[0] },
        { ...moduleLessons[1] },
      ],
    },
    {
      num: '02',
      title: 'Awareness',
      text: 'Shift from story into sensation with guided body awareness and present-moment tracking.',
      unlocked: false,
      lessons: [{ ...moduleLessons[0] }, { ...moduleLessons[1] }],
    },
    {
      num: '03',
      title: 'Breath',
      text: 'Use slow, intentional breath to expand capacity, soften holding, and awaken sensation.',
      unlocked: false,
      lessons: [{ ...moduleLessons[0] }, { ...moduleLessons[1] }],
    },
    {
      num: '04',
      title: 'Energy Awareness',
      text: 'Learn to notice subtle warmth, tingling, pulsing, and aliveness without chasing intensity.',
      unlocked: false,
      lessons: [{ ...moduleLessons[0] }, { ...moduleLessons[1] }],
    },
    {
      num: '05',
      title: 'Expansion',
      text: 'Let sensation spread through the body instead of collapsing into pressure or goal-seeking.',
      unlocked: false,
      lessons: [{ ...moduleLessons[0] }, { ...moduleLessons[1] }],
    },
    {
      num: '06',
      title: 'Circulation',
      text: 'Guide awareness through a simple energy pathway that supports fullness, calm, and integration.',
      unlocked: false,
      lessons: [{ ...moduleLessons[0] }, { ...moduleLessons[1] }],
    },
    {
      num: '07',
      title: 'Integration',
      text: 'Finish grounded, open, and connected to a more spacious experience of pleasure and self-trust.',
      unlocked: false,
      lessons: [{ ...moduleLessons[0] }, { ...moduleLessons[1] }],
    },
  ]

  const testimonials = [
    {
      quote:
        'This felt elegant, calming, and deeply grounding. I didn’t feel pushed. I felt guided back into my body.',
      name: 'Private beta student',
    },
    {
      quote: 'The breath and pacing changed everything. It helped me slow down enough to actually feel.',
      name: 'Course preview viewer',
    },
    {
      quote:
        'It felt more like nervous system education than performance-based intimacy advice. That made me trust it.',
      name: 'Somatic wellness client',
    },
  ]

  const faqs = [
    {
      q: 'Who is this for?',
      a: 'This course is for women who want a more grounded, body-aware, full-body experience of pleasure, presence, and self-connection.',
    },
    {
      q: 'Is this explicit?',
      a: 'No. The course is educational, sensual, and somatic in tone. It focuses on awareness, breath, regulation, and expanded sensation.',
    },
    {
      q: 'How long is the course?',
      a: 'Approximately 35 minutes, designed as a guided experience you can revisit whenever you want to reconnect with your body.',
    },
    {
      q: 'What makes this different?',
      a: 'Instead of performance, pressure, or rushing toward an outcome, this course teaches slowness, sensation, breath, and nervous system-led expansion.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#111111] text-[#F4EDE3]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(186,128,74,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_20%)]" />

      <header className="relative border-b border-white/10 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <div className="text-xs uppercase tracking-[0.32em] text-[#BA804A]">Brock Somatic Education</div>
            <div className="mt-1 text-sm text-white/70">Full Body Intro Orgasm Course</div>
          </div>
          <a
            href="https://fbo-membership.vercel.app"
            className="rounded-full border border-[#BA804A]/60 px-5 py-2 text-sm font-medium text-[#F4EDE3] transition hover:bg-[#BA804A] hover:text-[#111111]"
          >
            Get Membership Details
          </a>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-[#BA804A]/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.26em] text-[#D8A06B]">
              Guided somatic course · 35 minutes · Brock Avatar narrated
            </div>
            <h1 className="text-4xl font-light leading-tight text-[#F8F2EA] sm:text-5xl lg:text-6xl">
              From tension to expanded
              <span className="block text-[#D8A06B]">full-body sensation.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
              A slow, elegant landing page for a guided somatic experience that helps women move out of pressure,
              performance, and disconnect—and back into breath, presence, and embodied pleasure.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://fbo-membership.vercel.app"
                className="rounded-full bg-[#BA804A] px-7 py-3 text-center text-sm font-semibold text-[#111111] transition hover:opacity-90"
              >
                Get Membership Details
              </a>
              <a
                href="#modules"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-center text-sm font-semibold text-[#F4EDE3] transition hover:bg-white/10"
              >
                Preview the Course
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {sections.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20"
                >
                  <h3 className="text-sm uppercase tracking-[0.24em] text-[#D8A06B]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-6">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.02] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="rounded-[1.5rem] border border-[#BA804A]/20 bg-[#171717] p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-[#D8A06B]">Inside the experience</div>
                <div className="mt-4 space-y-4">
                  {[
                    'Calm Brock Avatar narration',
                    'Somatic awareness cues',
                    'Breath-led expansion',
                    'Energy circulation framework',
                    'Soft integration ending',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-[#BA804A]" />
                      <span className="text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-[#BA804A]/20 bg-[#111111] p-5">
                  <div className="text-sm font-medium text-[#F4EDE3]">Best for women who feel:</div>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/70">
                    <li>• disconnected from their bodies</li>
                    <li>• pressure to perform instead of feel</li>
                    <li>• overstimulated, tense, or emotionally flat</li>
                    <li>• curious about somatic pleasure and nervous system safety</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-3 lg:px-8">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[#D8A06B]">Why it works</div>
              <h2 className="mt-4 text-3xl font-light text-[#F8F2EA]">A structure that helps the body soften before it expands.</h2>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#151515] p-6">
              <div className="text-sm uppercase tracking-[0.22em] text-[#D8A06B]">01</div>
              <h3 className="mt-3 text-xl font-medium">Safety before sensation</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                The course begins with nervous system settling, body awareness, and permission—not urgency, pressure,
                or performance.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#151515] p-6">
              <div className="text-sm uppercase tracking-[0.22em] text-[#D8A06B]">02</div>
              <h3 className="mt-3 text-xl font-medium">Slowness creates access</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                When the pace slows, micro-sensation becomes easier to notice. That is often where real expansion
                begins.
              </p>
            </div>
          </div>
        </section>

        <section id="modules" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-[#D8A06B]">Course experience</div>
            <h2 className="mt-4 text-3xl font-light text-[#F8F2EA] sm:text-4xl">
              Start with Module 1 now, then unlock the full guided journey.
            </h2>
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#BA804A]/25 bg-gradient-to-br from-[#1B1713] to-[#111111] p-6 sm:p-7">
            <div className="mb-5 inline-flex items-center rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-emerald-200">
              Module 1 · Unlocked · 2 lessons available
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="overflow-hidden rounded-2xl border border-[#BA804A]/25 bg-black">
                <iframe
                  className="aspect-video w-full bg-black"
                  src={modules[0].embedUrl}
                  title="Module 01 - Arrival"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-xs uppercase tracking-[0.2em] text-[#D8A06B]">Now playing</div>
                <h3 className="mt-3 text-2xl font-medium text-[#F8F2EA]">
                  Module {modules[0].num}: {modules[0].title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{modules[0].text}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.12em] text-white/45">
                  This module includes 2 lessons available now
                </p>
                <div className="mt-6 space-y-2">
                  {modules[0].lessons.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between rounded-xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs text-emerald-100"
                    >
                      <span>
                        Video {index + 1}: {lesson.title}
                      </span>
                      <span className="uppercase tracking-[0.12em]">Available</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-light text-[#F8F2EA] sm:text-3xl">Continue the Full Guided Experience</h3>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/72">
              Module 1 introduces the foundation. Modules 2–7 guide you deeper into awareness, breath, expansion,
              circulation, and integration.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.filter((module) => !module.unlocked).map((module) => (
              <div
                key={module.num}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/70 via-black/35 to-black/75" />
                <div className="pointer-events-none absolute inset-0 backdrop-blur-[1.5px]" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#BA804A]/40 bg-[#1A1A1A]/85 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[#D8A06B]">
                    <span aria-hidden>🔒</span>
                    Locked
                  </div>
                  <h4 className="mt-5 text-lg font-medium text-[#F4EDE3]">
                    Module {module.num}: {module.title}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-white/65">{module.text}</p>
                  <div className="mt-4 space-y-2">
                    {module.lessons.map((lesson, index) => (
                      <div
                        key={lesson.id}
                        className="rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-xs text-white/70"
                      >
                        Video {index + 1}: {lesson.title}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-xs uppercase tracking-[0.12em] text-white/45">Status: Locked</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-[#BA804A]/45 bg-gradient-to-br from-[#221A12] to-[#16120F] p-7 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
              <div className="text-xs uppercase tracking-[0.22em] text-[#D8A06B]">Best value</div>
              <h3 className="mt-4 text-2xl font-medium text-[#F8F2EA]">Join Membership</h3>
              <div className="mt-2 text-3xl font-light text-[#F8F2EA]">$39/month</div>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Unlock Modules 2–7 and receive ongoing monthly member benefits.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://fbo-membership.vercel.app"
                  className="rounded-full bg-[#BA804A] px-6 py-3 text-sm font-medium text-[#111111] transition hover:brightness-110"
                >
                  Get Membership Details
                </a>
                <a
                  href="#membership-info"
                  className="rounded-full border border-[#BA804A]/50 px-6 py-3 text-sm font-medium text-[#F4EDE3] transition hover:bg-[#BA804A]/12"
                >
                  See Member Benefits
                </a>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.12em] text-white/45">
                Includes access to Modules 2–7 plus monthly member benefits
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/12 bg-[#151515] p-7">
              <div className="text-xs uppercase tracking-[0.22em] text-white/55">Simple unlock</div>
              <h3 className="mt-4 text-2xl font-medium text-[#F8F2EA]">One-Time Unlock</h3>
              <div className="mt-2 text-3xl font-light text-[#F8F2EA]">$20</div>
              <p className="mt-4 text-sm leading-7 text-white/75">Get single-purchase access to Modules 2–7 only.</p>
              <a
                href={stripeCheckoutUrl}
                className="mt-7 inline-flex rounded-full border border-[#BA804A]/55 bg-white/[0.03] px-6 py-3 text-sm font-medium text-[#F4EDE3] transition hover:border-[#BA804A] hover:bg-white/[0.06]"
                target="_blank"
                rel="noreferrer"
              >
                Unlock Now
              </a>
              <p className="mt-4 text-xs uppercase tracking-[0.12em] text-white/45">
                Single purchase for access to Modules 2–7 only
              </p>
              <p className="mt-2 text-xs text-white/40">Stripe checkout URL can be swapped in later.</p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-5 text-sm leading-7 text-white/72 sm:px-7">
            Choose membership for full access plus ongoing benefits, or unlock the course once for a simple one-time
            purchase.
          </div>
        </section>

        <section className="border-y border-white/8 bg-gradient-to-b from-[#181614] to-[#111111]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-[#D8A06B]">Brock’s promise</div>
              <h2 className="mt-4 text-3xl font-light text-[#F8F2EA] sm:text-4xl">
                This is not about forcing an outcome.
                <span className="block text-[#D8A06B]">It is about learning how to feel.</span>
              </h2>
              <p className="mt-5 text-base leading-8 text-white/72">
                The tone is calm, masculine, grounded, and safe. The guidance helps the viewer move toward greater
                sensation by reducing pressure and increasing awareness.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[#D8A06B]">Proof of resonance</div>
              <h2 className="mt-4 text-3xl font-light text-[#F8F2EA] sm:text-4xl">What early viewers said</h2>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-base leading-8 text-[#F4EDE3]">“{item.quote}”</p>
                <div className="mt-6 text-sm uppercase tracking-[0.22em] text-[#D8A06B]">{item.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[#D8A06B]">Frequently asked</div>
              <h2 className="mt-4 text-3xl font-light text-[#F8F2EA] sm:text-4xl">Questions before you begin</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details key={item.q} className="rounded-[1.5rem] border border-white/10 bg-[#151515] p-6">
                  <summary className="cursor-pointer list-none text-base font-medium text-[#F4EDE3]">{item.q}</summary>
                  <p className="mt-4 text-sm leading-7 text-white/70">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="membership-info" className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-[#BA804A]/20 bg-gradient-to-br from-[#1A1714] to-[#121212] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-10">
            <div className="text-center">
              <div className="text-xs uppercase tracking-[0.32em] text-[#D8A06B]">Membership details</div>
              <h2 className="mt-4 text-3xl font-light text-[#F8F2EA] sm:text-4xl">
                Get full membership details and your first-month savings
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72">
                Enter your email to receive full membership information, including what is included monthly and how to
                unlock Modules 2–7 in the way that fits you best.
              </p>
            </div>

            <form onSubmit={handleMembershipSubmit} className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-[1fr_auto]">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                required
                className="h-14 rounded-full border border-white/10 bg-[#0F0F0F] px-6 text-sm text-[#F4EDE3] outline-none placeholder:text-white/35 focus:border-[#BA804A]/60"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-14 rounded-full bg-[#BA804A] px-8 text-sm font-semibold text-[#111111] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Membership Details'}
              </button>
            </form>

            {submitted && (
              <div className="mx-auto mt-5 max-w-2xl rounded-2xl border border-emerald-300/30 bg-emerald-300/10 px-5 py-4 text-center text-sm text-emerald-100">
                Check your email for access
              </div>
            )}

            <div className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-white/45">
              Premium guidance · calm support · somatic depth
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/45 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© 2026 Brock Somatic Education</div>
          <div>Full body Intro Orgasm Course Landing Page</div>
        </div>
      </footer>
    </div>
  )
}
