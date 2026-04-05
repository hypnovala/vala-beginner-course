export default function FullBodyOrgasmCourseLandingPage() {
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

  const modules = [
    {
      num: '01',
      title: 'Arrival',
      text: 'Settle your nervous system, release urgency, and create a safe internal starting point.',
      video: '/videos/module-01-arrival.mp4',
    },
    {
      num: '02',
      title: 'Awareness Activation',
      text: 'Shift from story into sensation with a guided body scan and present-moment tracking.',
      video: '/videos/module-02-awareness-activation.mp4',
    },
    {
      num: '03',
      title: 'Breath Ignition',
      text: 'Use slow, intentional breath to expand capacity, soften holding, and awaken sensation.',
      video: '/videos/module-03-breath-ignition.mp4',
    },
    {
      num: '04',
      title: 'Energy Awareness',
      text: 'Learn to notice subtle warmth, tingling, pulsing, and aliveness without chasing intensity.',
      video: '/videos/module-04-energy-awareness.mp4',
    },
    {
      num: '05',
      title: 'Expansion',
      text: 'Let sensation spread through the body instead of collapsing into pressure or goal-seeking.',
      video: '/videos/module-05-expansion.mp4',
    },
    {
      num: '06',
      title: 'Circulation',
      text: 'Guide awareness through a simple energy pathway that supports fullness, calm, and integration.',
      video: '/videos/module-06-circulation.mp4',
    },
    {
      num: '07',
      title: 'Integration',
      text: 'Finish grounded, open, and connected to a more spacious experience of pleasure and self-trust.',
      video: '/videos/module-07-integration.mp4',
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
            <div className="mt-1 text-sm text-white/70">Full Body 35 Min Orgasm Course</div>
          </div>
          <a
            href="#join"
            className="rounded-full border border-[#BA804A]/60 px-5 py-2 text-sm font-medium text-[#F4EDE3] transition hover:bg-[#BA804A] hover:text-[#111111]"
          >
            Join the Waitlist
          </a>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-[#BA804A]/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.26em] text-[#D8A06B]">
              Guided somatic course · 35 minutes · Brock narrated
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
                href="#join"
                className="rounded-full bg-[#BA804A] px-7 py-3 text-center text-sm font-semibold text-[#111111] transition hover:opacity-90"
              >
                Get Early Access
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
                    'Calm Brock narration',
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
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-[#D8A06B]">Course breakdown</div>
            <h2 className="mt-4 text-3xl font-light text-[#F8F2EA] sm:text-4xl">
              Seven guided modules. One elegant nervous-system-led experience.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {modules.map((module) => (
              <div
                key={module.num}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#BA804A]/40 hover:bg-white/[0.05]"
              >
                <div className="mb-5 overflow-hidden rounded-2xl border border-[#BA804A]/25 bg-[#121212]">
                  <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-[#201810] to-[#0F0F0F]">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(186,128,74,0.18),transparent_45%)]" />
                    <div className="relative z-10 flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#D8A06B]">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#BA804A]/40 text-[10px]">
                        ▶
                      </span>
                      Video placeholder · Module {module.num}
                    </div>
                  </div>
                  <div className="border-t border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-white/45">
                    Upload file: {module.video}
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#BA804A]/30 bg-[#1A1A1A] text-sm tracking-[0.18em] text-[#D8A06B]">
                    {module.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#F4EDE3]">{module.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">{module.text}</p>
                  </div>
                </div>
              </div>
            ))}
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

        <section id="join" className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-[#BA804A]/20 bg-gradient-to-br from-[#1A1714] to-[#121212] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-10">
            <div className="text-center">
              <div className="text-xs uppercase tracking-[0.32em] text-[#D8A06B]">Early access</div>
              <h2 className="mt-4 text-3xl font-light text-[#F8F2EA] sm:text-4xl">Join the waitlist for the full course release</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72">
                Be first to know when the Brock-narrated course goes live, and get updates on the larger somatic
                education experience around breath, embodiment, and expanded sensation.
              </p>
            </div>

            <form className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-[1fr_auto]">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-14 rounded-full border border-white/10 bg-[#0F0F0F] px-6 text-sm text-[#F4EDE3] outline-none placeholder:text-white/35 focus:border-[#BA804A]/60"
              />
              <button
                type="button"
                className="h-14 rounded-full bg-[#BA804A] px-8 text-sm font-semibold text-[#111111] transition hover:opacity-90"
              >
                Join the Waitlist
              </button>
            </form>

            <div className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-white/45">
              Educational · somatic · elegant · grounded
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/45 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© 2026 Brock Somatic Education</div>
          <div>Full Body 35 Min Orgasm Course Landing Page</div>
        </div>
      </footer>
    </div>
  )
}
