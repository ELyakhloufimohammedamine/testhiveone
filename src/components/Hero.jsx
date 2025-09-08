// src/components/Hero.jsx
import { useState } from "react";
import { motion as Motion } from "framer-motion"; // <-- Uppercase alias
import { Button, ALink } from "./ui";

export default function Hero({ onBook, calendlyUrl }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow-light -z-10" aria-hidden />

      <div className="mx-auto max-w-7xl px-7 py-1 ">
        <div className="grid min-h-[70vh] items-center gap-12 py-8 md:grid-cols-2 md:py-1">
          {/* LEFT: copy */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <Motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900"
            >
              Quality Assured. Every Release.
            </Motion.h1>

            <Motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 max-w-xl text-lg md:text-xl text-slate-700"
            >
              We help IT leaders ship faster with reliable QA — from manual testing
              to automation in 90 days.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 flex items-center gap-4"
            >
              <button
                onClick={onBook}
                aria-label="Open Calendly booking"
                className="rounded-xl bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-500
                           px-6 py-2.5 text-sm font-semibold text-white shadow-md
                           transition hover:brightness-110 active:scale-95"
              >
                Book Your Call
              </button>

              <ALink href={calendlyUrl} newTab>
                <span className="text-sm font-medium text-sky-600 hover:text-sky-700">
                  Prefer new tab
                </span>
              </ALink>
            </Motion.div>

            <Motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-3 text-xs text-slate-500"
            >
              No commitment. 30-minute discovery.
            </Motion.p>
          </Motion.div>

          {/* RIGHT: visual card */}
          <Motion.figure
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-soft
                            bg-gradient-to-br from-sky-100 via-violet-100 to-amber-100">
              {imgOk && (
                <img
                  src="/assets/HERO.png"               // put image in /public/hero.png
                  alt="TestHive hero"
                  className="h-full w-full object-cover mix-blend-multiply"
                  onError={() => setImgOk(false)}
                />
              )}
            </div>

            <img
              src="/assets/testHive.png"         // /public/testhive-logo.png
              alt="TestHive mark"
              className="absolute -bottom-6 -right-6 w-20 h-20 rounded-xl shadow-soft
                         border border-slate-200 bg-white p-2"
            />
          </Motion.figure>
        </div>
      </div>
    </section>
  );
}
