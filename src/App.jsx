import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// pages
import Home from './pages/Home'
import PricingPage from './pages/PricingPage'
import POCDetails from './pages/POCDetails'
import Accelerator from './pages/Accelerator'
import PartnerProgram from './pages/PartnerProgram'
import Blog from './pages/Blog'
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'
import Nearshore from './pages/Nearshore'
import WhyTestHive from './pages/WhyTestHive'
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/poc" element={<POCDetails />} />
        <Route path="/accelerator" element={<Accelerator />} />
        <Route path="/partner" element={<PartnerProgram />} />
        <Route path="/nearshore" element={<Nearshore />} />
        <Route path="/whytesthive" element={<WhyTestHive />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
