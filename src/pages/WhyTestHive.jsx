// src/pages/WhyTestHivePage.jsx
import { useOutletContext } from 'react-router-dom'
import WhyTestHive from '../components/WhyTestHive'

export default function WhyTestHivePage() {
  const { onBook } = useOutletContext()
  return <WhyTestHive onBook={onBook} />
}
