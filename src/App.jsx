import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import Updates from './components/Updates'
import Pricing from './components/Pricing'             // ← add
import CTA from './components/CTA'
import Footer from './components/Footer'
import CalendlyModal from './components/CalendlyModal'
import FAQ from "./components/FAQ"
import Blog from "./components/Blog"

const CALENDLY_URL = 'https://calendly.com/medamineya07/30min' // replace

export default function App() {
  const [showCalendly, setShowCalendly] = useState(false)
  const openCalendly = () => setShowCalendly(true)
  const closeCalendly = () => setShowCalendly(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar onBook={openCalendly} />
      <Hero onBook={openCalendly} calendlyUrl={CALENDLY_URL} />
      <Logos />
      <Features />
      
      <Pricing onBookClick={openCalendly} />            {/* ← here */}
      <CTA onBook={openCalendly} calendlyUrl={CALENDLY_URL} />

      
      <FAQ />
<Blog />
      <Footer />
      <CalendlyModal url={CALENDLY_URL} open={showCalendly} onClose={closeCalendly} />
    </div>
  )
}
