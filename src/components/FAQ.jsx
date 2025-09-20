// src/components/FAQ.jsx
import { useMemo, useState, useId, useEffect } from "react";
import { motion as m, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, Search, Sparkles } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const FAQ_DATA = [
  {
    q: "What makes TestHive different?",
    a: "We prioritize risk-driven coverage and deliver maintainable automation in under 90 days—so you see faster, more stable releases quickly."
  },
  {
    q: "Which tools do you support?",
    a: "Playwright, Cypress, Selenium, and CI integrations on AWS/Azure/GCP. We fit your stack rather than forcing a new one."
  },
  {
    q: "How long to see results?",
    a: "You’ll typically see a stabilized smoke suite within weeks, and significant regression coverage by the 60–90 day mark."
  },
  {
    q: "Do you do manual testing too?",
    a: "Yes. We combine focused manual packs for high-risk areas with automation for repeatable value."
  }
];

export default function FAQ({ className = "" }) {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [expandedAll, setExpandedAll] = useState(false);
  const reduce = useReducedMotion();

  // Filtered list based on search query
  const faqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FAQ_DATA;
    return FAQ_DATA.filter(
      ({ q: question, a }) =>
        question.toLowerCase().includes(q) || a.toLowerCase().includes(q)
    );
  }, [query]);

  // Expand/collapse all behavior when list changes (e.g., filtering)
  useEffect(() => {
    if (expandedAll) setOpenIndex("ALL");
    else setOpenIndex(null);
  }, [expandedAll, query]);

  // Animations
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: 0.05 }
    }
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: EASE }
    }
  };

  return (
    <section
      id="faq"
      className={`relative border-t border-gray-200 bg-white py-20 ${className}`}
      aria-labelledby="faq-heading"
    >
      {/* soft bg accents */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(900px_500px_at_5%_-10%,#ecfeff_30%,transparent_70%),radial-gradient(700px_400px_at_95%_0%,#eef2ff_25%,transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-100">
            <Sparkles className="h-4 w-4" /> Helpful answers
          </div>
          <h2 id="faq-heading" className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600">
            Quick answers about how we work, what we deliver, and how fast you’ll see value.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
          <label className="relative flex w-full sm:max-w-sm items-center">
            <Search className="pointer-events-none absolute left-3 h-4 w-4 text-slate-400" />
            <input
              type="search"
              inputMode="search"
              placeholder="Search FAQs…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-9 py-2 text-sm text-slate-800 outline-none ring-sky-200/70 transition focus:border-sky-300 focus:ring-2"
              aria-label="Search FAQs"
            />
          </label>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => setExpandedAll(true)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Expand all
            </button>
            <button
              onClick={() => setExpandedAll(false)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Collapse all
            </button>
          </div>
        </div>

        {/* List */}
        <m.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 space-y-4"
        >
          {faqs.length === 0 && (
            <li className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
              No matches. Try a different query.
            </li>
          )}

          {faqs.map((entry, i) => (
            <FAQItem
              key={entry.q}
              q={entry.q}
              a={entry.a}
              isOpen={openIndex === "ALL" || openIndex === i}
              onToggle={() =>
                setOpenIndex(openIndex === i ? null : i)
              }
              variants={item}
            />
          ))}
        </m.ul>

        {/* JSON-LD for FAQ rich results (SEO) */}
        <script
          type="application/ld+json"
          // We use the full dataset (not filtered) for stable SEO content.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ_DATA.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a }
              }))
            })
          }}
        />
      </div>
    </section>
  );
}

function FAQItem({ q, a, isOpen, onToggle, variants }) {
  const panelId = useId();
  const btnId = useId();

  return (
    <m.li
      variants={variants}
      className="group rounded-2xl border border-slate-200 bg-white/90 shadow-sm transition hover:shadow-md"
    >
      <button
        id={btnId}
        onClick={onToggle}
        aria-controls={panelId}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      >
        <span className="text-base font-semibold text-slate-900">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm leading-7 text-slate-700">
              {a}
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* subtle bottom accent on hover/open */}
      <m.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="origin-left h-0.5 w-full rounded-b-2xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500"
      />
    </m.li>
  );
}
