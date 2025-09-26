import { useState } from "react"
import { motion as Motion } from "framer-motion"
import {
  ShieldCheck,
  ClipboardList,
  Bot,
  Users,
  Lightbulb,
  BadgeCheck,
} from "lucide-react"

const tabs = [
  { key: "services", label: "Services" }
]

const services = [
  {
    icon: ShieldCheck,
    title: "Full‑cycle Software Testing",
    text:
      "End‑to‑end QA across the SDLC so you can ship reliably. Blend of manual and automation for real‑world quality.",
    tint: "from-sky-50 to-cyan-50",
    iconTint: "bg-sky-50 text-sky-600",
  },
  {
    icon: ClipboardList,
    title: "Manual Testing",
    text:
      "Deep, exploratory checks to catch subtle defects automation misses. Risk‑based test plans tailored to your roadmap.",
    tint: "from-amber-50 to-orange-50",
    iconTint: "bg-amber-50 text-amber-600",
  },
  {
    icon: Bot,
    title: "Automated Testing",
    text:
      "Accelerate delivery with robust test automation for web, mobile, APIs, and regression at scale (CI/CD ready).",
    tint: "from-emerald-50 to-teal-50",
    iconTint: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Users,
    title: "QA Outsourcing",
    text:
      "Flexible engagement models so your team can focus on building while we handle day‑to‑day testing.",
    tint: "from-violet-50 to-indigo-50",
    iconTint: "bg-violet-50 text-violet-600",
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    text:
      "Process audit, tooling, and best‑practice implementation to unblock testing bottlenecks and raise engineering quality.",
    tint: "from-fuchsia-50 to-pink-50",
    iconTint: "bg-fuchsia-50 text-fuchsia-600",
  },
  {
    icon: BadgeCheck,
    title: "Dedicated Teams",
    text:
      "Spin up ready‑to‑ship QA squads with domain expertise across frameworks and test types for consistent delivery.",
    tint: "from-slate-50 to-gray-50",
    iconTint: "bg-slate-100 text-slate-700",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

export default function ServicesSection() {
  const [active, setActive] = useState("services")

  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Tailored QA & Software Testing Services
          </Motion.h2>
          <Motion.p variants={fadeUp} className="mt-3 text-gray-600">
            Choose the engagement that matches your release goals. We’ll meet you
            where your product is today and scale quality confidently.
          </Motion.p>
        </Motion.div>

        {/* Tabs */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm font-medium">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`rounded-full border px-4 py-2 transition ${
                active === t.key
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
              type="button"
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <Motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ icon: Icon, title, text, tint, iconTint }) => (
            <Motion.li
              key={title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition"
            >
              {/* soft background tint */}
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${tint} blur-2xl`}
              />

              {/* icon */}
              <div
                className={`mb-4 inline-flex items-center justify-center rounded-xl ${iconTint} p-3`}
              >
                <Icon className="h-6 w-6" aria-hidden />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{text}</p>
            </Motion.li>
          ))}
        </Motion.ul>
      </div>
    </section>
  )
}
