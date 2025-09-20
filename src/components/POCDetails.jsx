// src/components/POCDetails.jsx
import { useState } from "react"
import { motion as m } from "framer-motion"
import {
  CheckCircle2, Wand2, PlugZap, FileCode2, GitBranch, ShieldCheck, ArrowRight,
} from "lucide-react"

const EASE = [0.22, 1, 0.36, 1]
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

export default function POCDetails({ onBook = () => {}, calendlyUrl = "" }) {
  const [openForm, setOpenForm] = useState(false)

  return (
    <section
      id="poc-details"
      className="
        relative border-t border-gray-200 bg-white py-16 md:py-20
        [background-image:radial-gradient(900px_500px_at_5%_-10%,#ecfeff_35%,transparent_70%),radial-gradient(700px_400px_at_95%_0%,#eef2ff_30%,transparent_70%)]
      "
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <m.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="mx-auto max-w-3xl text-center">
          <m.p variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-100">
            Starter Package (Proof of Concept) • Free • No commitment
          </m.p>
          <m.h2 variants={fadeUp} className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Not sure automation fits? Try a free POC.
          </m.h2>
          <m.p variants={fadeUp} className="mt-4 text-slate-600">
            We’ll automate <strong>1–2 high-value test cases</strong>, wire minimal CI, and deliver a short demo report — <strong>free</strong>, <strong>no hidden costs</strong>, <strong>no commitment</strong>.
          </m.p>
        </m.div>

        {/* 2-up cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* What you’ll get */}
          <m.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">What you’ll get in ~7 days</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2"><Wand2 className="mt-0.5 h-5 w-5 text-violet-600" /> 1–2 automated E2E tests (Playwright/Cypress) on your critical path</li>
              <li className="flex items-start gap-2"><PlugZap className="mt-0.5 h-5 w-5 text-emerald-600" /> Minimal CI integration (GitHub/GitLab/Azure) with pass/fail checks</li>
              <li className="flex items-start gap-2"><FileCode2 className="mt-0.5 h-5 w-5 text-sky-600" /> Readme & commands to run locally and in CI</li>
              <li className="flex items-start gap-2"><GitBranch className="mt-0.5 h-5 w-5 text-amber-600" /> Demo report: stability, run time, and next coverage suggestions</li>
              <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-700" /> NDA by default; least-privilege repo access via workflow tokens</li>
            </ul>
            <div className="mt-6 rounded-2xl bg-gray-50 p-4 text-xs text-slate-600">
              <strong>Tooling:</strong> Playwright / Cypress • GitHub/GitLab CI • Azure DevOps • Major browsers • API steps where useful
            </div>
          </m.div>

          {/* Acceptance criteria */}
          <m.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Acceptance criteria</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Client can request a free Starter POC via a clear form or Book-a-Call CTA.",
                "Scope is explicit: 1–2 test cases automated.",
                "Includes minimal pipeline integration and a short demonstration report.",
                "Explicitly free — no hidden costs and no future commitment.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" /> {t}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onBook}
                className="rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-5 py-2 text-white font-semibold shadow-md transition hover:brightness-110 active:scale-95"
                aria-label="Book a Free POC Call"
              >
                Book a Free POC Call
              </button>
              <button
                onClick={() => setOpenForm(true)}
                className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-gray-50"
              >
                Request via Form
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              We’ll prioritize a flow that touches revenue or core activation to show real value fast.
            </p>
          </m.div>
        </div>

        {/* Timeline */}
        <m.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 p-6">
          <h4 className="text-sm font-semibold text-slate-900">POC timeline</h4>
          <ol className="mt-3 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
            <li className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="font-semibold">Day 0–1</div>
              <div className="text-slate-600">Kickoff & target flow selection</div>
            </li>
            <li className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="font-semibold">Day 2–5</div>
              <div className="text-slate-600">Automate 1–2 tests + minimal CI</div>
            </li>
            <li className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="font-semibold">Day 6–7</div>
              <div className="text-slate-600">Demo run + report + next steps</div>
            </li>
          </ol>
        </m.div>
      </div>

      {/* Request Form Modal */}
      {openForm && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Request a Free Starter POC</h3>
              <button onClick={() => setOpenForm(false)} aria-label="Close form" className="text-slate-500 hover:text-slate-700">✕</button>
            </div>

            <form
              className="mt-4 space-y-4"
              method="POST"
              action="https://formspree.io/f/your-form-id"  /* replace with your Formspree ID or API */
            >
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-slate-600">Name</label>
                  <input required name="name" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300" />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600">Work email</label>
                  <input required type="email" name="email" inputMode="email" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300" />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-600">Repo or demo environment (optional)</label>
                <input name="repo" placeholder="e.g. https://github.com/org/app (or staging URL)" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-slate-600">Preferred tool</label>
                  <select name="tool" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm">
                    <option>Playwright</option>
                    <option>Cypress</option>
                    <option>Undecided / advise me</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600">CI platform</label>
                  <select name="ci" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm">
                    <option>GitHub Actions</option>
                    <option>GitLab CI</option>
                    <option>Azure DevOps</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-600">Target user journey</label>
                <textarea name="journey" rows={3} placeholder="Describe the 1–2 test cases you want automated" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300" />
              </div>

              <div className="flex items-start gap-2">
                <input required type="checkbox" name="free" className="mt-1 h-4 w-4 rounded border-gray-300" />
                <p className="text-xs text-slate-600">
                  I understand this POC is <strong>free</strong>, limited to <strong>1–2 test cases</strong>, and includes minimal pipeline integration and a demo report — <strong>no commitment required</strong>.
                </p>
              </div>

              <div className="mt-2 flex items-center gap-3">
                <button type="submit" className="rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110 active:scale-95">
                  Submit Request
                </button>
                {calendlyUrl && (
                  <a href={calendlyUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-sky-600 hover:text-sky-700">
                    Or book a call
                  </a>
                )}
              </div>

              <p className="mt-2 text-[11px] text-slate-400">
                We reply within 1 business day. We’ll only contact you about this POC request.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
