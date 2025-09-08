// src/components/assetsures.jsx
import { Shield, Zap, Clock, CheckCircle } from "lucide-react"
import { motion as Motion } from "framer-motion"

const items = [
  {
    icon: Shield,
    title: "Risk-driven QA",
    text: "Focus on what breaks revenue: critical paths, integrations, and data edge cases.",
    img: "/assets/risk.png",
    tint: "from-sky-50 to-cyan-50",
    iconTint: "bg-sky-50 text-sky-600",
  },
  {
    icon: Zap,
    title: "Automation in 90 Days",
    text: "Launch maintainable Playwright/Cypress suites with CI/CD parallelization.",
    img: "/assets/automation.png",
    tint: "from-emerald-50 to-teal-50",
    iconTint: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Clock,
    title: "Faster Release Cycles",
    text: "Shorten time-to-market with stable smoke suites and smart regression selection.",
    img: "/assets/speed.png",
    tint: "from-violet-50 to-indigo-50",
    iconTint: "bg-violet-50 text-violet-600",
  },
  {
    icon: CheckCircle,
    title: "Built-in Reporting",
    text: "Executive dashboards and alerts that make quality visible to leadership.",
    img: "/assets/reporting.png",
    tint: "from-amber-50 to-orange-50",
    iconTint: "bg-amber-50 text-amber-600",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0 },
}

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900">
            Ship with Confidence
          </Motion.h2>
          <Motion.p variants={fadeUp} className="mt-3 text-gray-600">
            We combine hands-on test engineering with automation that actually lasts.
          </Motion.p>
        </Motion.div>

        {/* Grid */}
        <Motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map(({ icon: Icon, title, text, img, tint, iconTint }) => (
            <Motion.li
              key={title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition"
            >
              {/* soft background tint */}
              <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${tint} blur-2xl`} />

              {/* icon */}
              <div className={`mb-4 inline-flex items-center justify-center rounded-xl ${iconTint} p-3`}>
                <Icon className="h-6 w-6" aria-hidden />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{text}</p>

              {/* illustration (floats at bottom) */}
              <div className="mt-6 relative">
                <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-50">
                  <img
                    src={img}
                    alt={title}
                    className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </div>
            </Motion.li>
          ))}
        </Motion.ul>
      </div>
    </section>
  )
}
