// src/pages/Home.jsx
import { useOutletContext } from 'react-router-dom'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Features from '../components/Features'
import CTA from '../components/CTA'
import WhyTestHiveSection from '../components/WhyTestHive'
import IndustriesSection from '../components/IndustriesSection'
import QAProcessSection from '../components/QAProcessSection'

export default function Home() {
  const { onBook, calendlyUrl } = useOutletContext()
  return (
    <>
      <Hero onBook={onBook} />
      <Logos />
      <Features />
      <WhyTestHiveSection onBook={onBook} />
      <IndustriesSection />
      <QAProcessSection />
      <CTA onBook={onBook} calendlyUrl={calendlyUrl} />
    </>
  )
}
