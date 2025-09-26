import { motion as Motion } from "framer-motion"

// === Brand theme (EDIT these to match your logo exactly) ===
const theme = {
  // pulled from your CTA gradient – tune as needed
  gradFrom: "#22D3EE", // teal/cyan start
  gradTo: "#A78BFA", // violet end
  text: "#0B1324", // deep navy headings
  tint: "#EAF2F8", // soft blue section/arc tint
}

const steps = [
  {
    k: "01",
    title: "Requirements\nAnalysis",
    bullets: ["Review project specifications", "Identify testable features"],
  },
  {
    k: "02",
    title: "Test\nplanning",
    bullets: ["Design test cases", "Allocate resources and timeline"],
  },
  {
    k: "03",
    title: "Test\nExecution",
    bullets: ["Perform manual testing", "Run automated test scripts"],
  },
  {
    k: "04",
    title: "Document\nresults",
    bullets: [
      "Defect Tracking",
      "Report and categorize bugs",
      "Verify bug fixes",
    ],
  },
  {
    k: "05",
    title: "Closure &\nMaintenance",
    bullets: [
      "Conduct final review",
      "Deliver test closure report",
      "Plan ongoing maintenance testing",
    ],
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }

export default function QAProcessSection() {
  return (
    <section id="qa-process" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-5xl text-center md:text-left"
        >
          <Motion.h2
            variants={fadeUp}
            className="text-[34px] md:text-[44px] leading-tight font-extrabold"
            style={{ color: theme.text }}
          >
            Seamless <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(90deg, ${theme.gradFrom}, ${theme.gradTo})` }}
            >QA</span> Process
          </Motion.h2>
        </Motion.div>

        {/* Top step captions */}
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5"
        >
          {steps.map((s) => (
            <Motion.div key={s.k} variants={fadeUp}>
              <h3
                className="whitespace-pre-line text-xl font-semibold"
                style={{ color: theme.text }}
              >
                {s.title}
              </h3>
              <ul className="mt-3 space-y-2 text-[15px] text-gray-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="-mt-[2px] text-gray-400">–</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Motion.div>
          ))}
        </Motion.div>

        {/* Curved timeline with brand gradient and true-on-arc numbering */}
        <div className="relative mt-16">
          <div className="mx-auto max-w-6xl">
            <div className="relative h-[340px]">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 520">
                <defs>
                  {/* soft background tint */}
                  <linearGradient id="bgTint" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={theme.tint} />
                    <stop offset="100%" stopColor="#F6FAFE" />
                  </linearGradient>
                  {/* brand arc gradient */}
                  <linearGradient id="brandGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={theme.gradFrom} />
                    <stop offset="100%" stopColor={theme.gradTo} />
                  </linearGradient>
                </defs>

                {/* BACKGROUND ARC */}
                <path id="bgArc"
                  d="M70 450 C 320 90, 880 90, 1130 450"
                  stroke="url(#bgTint)" strokeWidth="170" strokeLinecap="round" fill="none"
                />

                {/* LABELS ARC (slightly larger radius for numbers above) */}
                <path id="labelsArc"
                  d="M60 410 C 310 45, 890 45, 1140 410"
                  fill="none"
                />

                {/* MAIN BRAND ARC */}
                <path id="brandArc"
                  d="M120 450 C 360 155, 840 155, 1080 450"
                  stroke="url(#brandGrad)" strokeWidth="38" strokeLinecap="round" fill="none"
                />

                {/* End caps */}
                <circle cx="120" cy="450" r="12" fill="#fff" stroke="url(#brandGrad)" strokeWidth="6" />
                <circle cx="1080" cy="450" r="12" fill="#fff" stroke="url(#brandGrad)" strokeWidth="6" />

                {/* Inner guide arc for small open dots */}
                <path id="innerArc"
                  d="M170 450 C 380 190, 820 190, 1030 450" fill="none"
                />

                {/* three ring markers under the brand arc */}
                {["28%","50%","72%"].map((off, i) => (
                  <g key={i}>
                    <text fontSize="28">
                      <textPath href="#innerArc" startOffset={off} dominantBaseline="middle" textAnchor="middle" fill="transparent">•</textPath>
                    </text>
                    <circle r="9" fill="#fff">
                      <animateMotion dur="0s" fill="freeze">
                        <mpath href="#innerArc" />
                      </animateMotion>
                    </circle>
                  </g>
                ))}

                {/* Numbers precisely on the labels arc */}
                {[
                  { n: "01", off: "6%" },
                  { n: "02", off: "27%" },
                  { n: "03", off: "50%" },
                  { n: "04", off: "73%" },
                  { n: "05", off: "94%" },
                ].map((p) => (
                  <text key={p.n} fontSize="18" fontWeight="800" fill={theme.text}>
                    <textPath href="#labelsArc" startOffset={p.off} dominantBaseline="middle" textAnchor="middle" dy={-6}>
                      {p.n}
                    </textPath>
                  </text>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
