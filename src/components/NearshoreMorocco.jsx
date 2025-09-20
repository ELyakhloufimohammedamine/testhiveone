// src/components/NearshoreMoroccoSection.jsx
import React, { useMemo, useState } from "react";
import { motion as m, useReducedMotion } from "framer-motion";
import { HandCoins, Clock, Languages, ShieldCheck, MapPin, Plane, CheckCircle2, ArrowRight } from "lucide-react";

const DEFAULTS = {
  savingRange: "30–50%",
  overlapHours: "4–6h",
  languages: "EN · FR · NL",
  flight: "2–3h to EU hubs",
  assets: {
    // ✅ assets live in /public/assets, so reference them from the root:
    map: "/assets/map.png",
    cost: "/assets/money.png",
    timezone: "/assets/time.png",
    languages: "/assets/languages.png",
    security: "/assets/security.png",
  },
};

const EASE = [0.22, 1, 0.36, 1];

function useFadeUp() {
  const reduce = useReducedMotion();
  return useMemo(
    () => ({
      hidden: { opacity: 0, y: reduce ? 0 : 16 },
      show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
    }),
    [reduce]
  );
}

const group = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function Img({ src, alt, ratio = "aspect-[3/2]", fit = "object-cover", className = "" }) {
  const [ok, setOk] = useState(true);
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`${ratio} w-full overflow-hidden rounded-2xl bg-white relative`}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-100 to-slate-200" />}
      {ok ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setOk(false)}
          className={`h-full w-full ${fit} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center text-sm text-slate-500">Image unavailable</div>
      )}
    </div>
  );
}

export default function NearshoreMoroccoSection({ onBook, metrics, assets }) {
  const fadeUp = useFadeUp();

  // merge defaults with optional overrides
  const M = { ...DEFAULTS, ...(metrics || {}) };
  const A = { ...DEFAULTS.assets, ...(assets || {}) };

  return (
    <section
      id="nearshore"
      className="
        relative border-t border-gray-200 bg-white
        py-12 sm:py-16 md:py-20
        [background-image:radial-gradient(900px_500px_at_5%_-10%,#ecfeff_35%,transparent_70%),radial-gradient(700px_400px_at_95%_0%,#eef2ff_30%,transparent_70%)]
      "
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <m.div variants={group} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="mx-auto max-w-3xl text-center">
          <m.p variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-100">
            <MapPin className="h-4 w-4" /> Nearshoring Advantage
          </m.p>
          <m.h2 variants={fadeUp} className="mt-3 text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Morocco QA: cost-smart, time-aligned, multilingual
          </m.h2>
          <m.p variants={fadeUp} className="mt-4 text-sm sm:text-base text-slate-600">
            Scale quality with senior automation talent operating on European hours. Collaborate in English, French, or Spanish—and realise cost efficiency without compromising outcomes.
          </m.p>
        </m.div>

        {/* Visual + Proofs */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Map visual */}
          <m.figure
            initial={{ opacity: 0, scale: 0.985 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="relative rounded-3xl border border-gray-200 bg-gradient-to-br from-sky-50 via-white to-violet-50 p-4 shadow-sm"
          >
            <Img src={A.map} alt="Nearshore coverage between EU/UK and Morocco" ratio="aspect-[4/3] sm:aspect-[16/10]" />
            <div className="pointer-events-none absolute left-4 sm:left-6 top-4 sm:top-6 inline-flex items-center gap-2 rounded-full bg-white/85 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium text-sky-700 ring-1 ring-sky-100 backdrop-blur">
              <Clock className="h-4 w-4" /> {M.overlapHours} CET/UK overlap
            </div>
            <div className="pointer-events-none absolute right-4 sm:right-6 bottom-4 sm:bottom-6 inline-flex items-center gap-2 rounded-full bg-white/85 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium text-emerald-700 ring-1 ring-emerald-100 backdrop-blur">
              <Plane className="h-4 w-4" /> {M.flight}
            </div>
          </m.figure>

          {/* Stats + bullets */}
          <m.div variants={group} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="flex flex-col gap-6">
            <m.ul variants={group} className="grid gap-4 sm:grid-cols-3">
              {[
                { k: M.savingRange, v: "Cost efficiency" },
                { k: M.overlapHours, v: "CET/UK overlap" },
                { k: M.languages, v: "Multilingual" },
              ].map(({ k, v }) => (
                <m.li key={v} variants={fadeUp} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 sm:px-6 py-4 sm:py-5 text-center">
                  <div className="text-2xl font-extrabold text-slate-900">{k}</div>
                  <div className="mt-1 text-xs font-medium tracking-wide text-slate-600 uppercase">{v}</div>
                </m.li>
              ))}
            </m.ul>

            <m.ul variants={group} className="grid gap-3 text-[13px] sm:text-sm">
              {[
                "Senior QA engineers; Playwright / Cypress / Selenium automation.",
                "CI/CD on GitHub/GitLab/Azure; dashboards leaders actually read.",
                "NDA by default; VPN/SOC controls; least-privilege credentials.",
              ].map((t) => (
                <m.li key={t} variants={fadeUp} className="flex items-start gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span className="text-slate-700">{t}</span>
                </m.li>
              ))}
            </m.ul>
          </m.div>
        </div>

        {/* Illustration tiles */}
        <m.div variants={group} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { iconBg: "bg-emerald-50 text-emerald-600", icon: HandCoins, title: "Cost savings", text: `Typically ${M.savingRange} vs Western Europe with senior talent.`, img: A.cost },
            { iconBg: "bg-sky-50 text-sky-600", icon: Clock, title: "Time-zone fit", text: `Daily ${M.overlapHours} overlap for stand-ups, pairing & reviews.`, img: A.timezone },
            { iconBg: "bg-violet-50 text-violet-600", icon: Languages, title: "Multilingual teams", text: `${M.languages} for stakeholder alignment.`, img: A.languages },
            { iconBg: "bg-emerald-50 text-emerald-600", icon: ShieldCheck, title: "Security & compliance", text: "NDA, VPN/SOC controls, PII handling, ISTQB talent.", img: A.security },
          ].map((c) => (
            <m.article key={c.title} variants={fadeUp} whileHover={{ y: -3 }} className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${c.iconBg}`}>
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="text-sm font-semibold text-slate-900">{c.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">{c.text}</p>
              <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-1 sm:p-2">
                <img src={c.img} alt={c.title} className="mx-auto max-h-32 w-auto object-contain sm:max-h-40" loading="lazy" />
              </div>
            </m.article>
          ))}
        </m.div>

        {/* FAQ */}
        <div className="mx-auto mt-10 max-w-4xl">
          <FAQItem
            question="How do we collaborate day-to-day?"
            answer={
              <>
                We schedule ceremonies inside the {M.overlapHours} window and keep pipelines, dashboards, and PR templates aligned with your toolchain for fast feedback and fewer context switches.
                Stand-ups and pairing happen during the overlap; async updates land in your preferred chat/tool.
              </>
            }
            defaultOpen
          />
          <FAQItem
            question="What about security & compliance?"
            answer={<>NDA by default, VPN/SOC controls with least-privilege access, and strict PII handling. We can mirror your SSO and enforce device posture checks for added control.</>}
          />
          <FAQItem
            question="How quickly can we spin up?"
            answer={
              <>
                A typical ramp is 2–3 weeks: discovery & access (days 1–3), automation plan & env setup (week 1), first test suites & CI wiring (week 2), coverage acceleration (week 3+). We share a 90-day roadmap on day 5.
              </>
            }
          />
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onBook}
            className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-md transition hover:brightness-110 active:scale-95"
            aria-label="Book a 30-minute nearshore fit call"
          >
            Book a 30-min Nearshore Fit Call
          </button>
          <p className="mt-2 text-xs text-slate-500">Understand cost, coverage, and your 90-day automation plan.</p>
        </div>
      </div>
    </section>
  );
}

/* --- Local FAQ item --- */
function FAQItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <m.article initial={false} whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: EASE }} className="group mb-3 rounded-2xl border border-slate-200 bg-white/90 p-4 sm:p-5 shadow-sm backdrop-blur hover:shadow-md">
      <button onClick={() => setOpen((v) => !v)} aria-expanded={open} className="flex w-full items-center justify-between gap-3 sm:gap-4 text-left rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{question}</h3>
          <p className="text-sm text-slate-600">Tap to {open ? "collapse" : "expand"}</p>
        </div>
        <m.span aria-hidden animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.25, ease: EASE }} className="inline-grid h-8 w-8 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm">
          <ArrowRight className="h-5 w-5" />
        </m.span>
      </button>
      <m.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden">
        <div className="mt-3 rounded-xl border border-slate-200 bg-gradient-to-br from-sky-50/60 to-violet-50/60 p-4">
          <p className="text-sm leading-relaxed text-slate-700">{answer}</p>
        </div>
      </m.div>
    </m.article>
  );
}
