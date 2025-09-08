import { Button, ALink } from "./ui"

export default function CTA({ onBook, calendlyUrl }) {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-sky-50 via-white to-violet-50 border-t border-gray-200"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Ready to ship confidently?
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Book a 30-minute discovery call to map your fastest path to reliable QA.
        </p>

        {/* Actions */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            onClick={onBook}
            aria-label="Book your call"
            className="rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500
                       px-6 py-3 text-sm font-semibold text-white shadow-md transition
                       hover:brightness-110 active:scale-95"
          >
            Book Your Call
          </button>

          <ALink href={calendlyUrl} newTab>
            <span className="text-sm font-medium text-sky-600 hover:text-sky-700">
              Prefer new tab
            </span>
          </ALink>
        </div>
      </div>
    </section>
  )
}
