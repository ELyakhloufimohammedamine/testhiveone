// src/components/WhyTestHive.jsx
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const FEATURES = [
  {
    icon: "/assets/why/api.png",
    title: "Proven QA expertise",
    body:
      "Years of QA consulting and reliable automation across web, API, and mobile—real stability, not flaky tests.",
  },
  {
    icon: "/assets/why/cdi.png",
    title: "Extra-mile approach",
    body:
      "We flag risks early, propose fixes, and keep crisp reporting—beyond the statement of work.",
  },
  {
    icon: "/assets/why/agile.png",
    title: "Agility & flexibility",
    body:
      "We adopt your tools and cadence. No rigid contracts; scale up or down as releases evolve.",
  },
  {
    icon: "/assets/why/consultans.png",
    title: "Transparent processes",
    body:
      "Clear dashboards and frequent updates so stakeholders always know coverage, risk, and next steps.",
  },
];

export default function WhyTestHive({ onBook }) {
  return (
    <section
      id="why-testhive"
      className="relative border-t border-gray-200 bg-[#F4F8FB] overflow-hidden"
    >
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(900px_500px_at_5%_-10%,#ecfeff_35%,transparent_70%),radial-gradient(700px_400px_at_95%_0%,#eef2ff_30%,transparent_70%)]" />

      {/* HERO ILLUSTRATION (why.png) anchored to the right */}
      <m.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: EASE }}
        aria-hidden
        className="pointer-events-none absolute -right-10 top-10 hidden lg:block"
      >
        {/* Adjust height to control scale. Object-contain keeps it clean. */}
        <img
  src="/assets/whyy.png"
  alt="Why TestHive illustration"
  className="mx-auto h-[200px] w-full max-w-[700px] object-contain"
/>

      </m.div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-5">
        {/* Heading (keep it BIG like you wanted) */}
        <m.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-3"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Why <span className="text-sky-600">TestHive</span>?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Outcomes over outputs. Partners, not vendors. Small team, senior talent,
            enterprise-grade delivery.
          </p>
        </m.div>

        {/* Feature row (bigger icons + tighter copy) */}
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((f, i) => (
            <m.article
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
              className="max-w-[40ch]"
            >
              {/* BIGGER ICON BLOCK */}
              <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <img src={f.icon} alt="" className="h-10 w-10 object-contain" />
              </div>

              <h3 className="text-2xl font-extrabold leading-snug text-slate-900">
                {f.title}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-slate-700">
                {f.body}
              </p>
            </m.article>
          ))}
        </div>

        {/* Footer row: nearshore link + CTA */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            to="/nearshore"
            className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:text-sky-800"
          >
            Learn more about nearshoring <ArrowRight className="h-4 w-4" />
          </Link>

          <button
  onClick={onBook}
  className="inline-flex items-center rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:brightness-110 active:scale-95"
>
  Book a Call
</button>
        </div>
      </div>
    </section>
  );
}
