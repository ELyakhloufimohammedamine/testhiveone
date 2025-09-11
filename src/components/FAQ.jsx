import { useState } from "react"
import { motion as Motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
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
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className="py-20 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-3 text-gray-600">Quick answers about how we work and what to expect.</p>
        </div>

        <ul className="mt-10 space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={item.q} className="rounded-2xl border border-gray-200 bg-gray-50">
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-base font-semibold text-gray-900">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <Motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-gray-700">
                        {item.a}
                      </div>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>

        {/* JSON-LD for FAQ rich results (optional, good for SEO) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(({ q, a }) => ({
              "@type": "Question",
              "name": q,
              "acceptedAnswer": { "@type": "Answer", "text": a }
            }))
          })
        }} />
      </div>
    </section>
  )
}
