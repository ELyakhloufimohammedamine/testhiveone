// src/pages/PricingPage.jsx
import { useOutletContext } from "react-router-dom";
import Pricing from "../components/Pricing";

export default function PricingPage() {
  const { onBook, calendlyUrl } = useOutletContext(); // coming from Layout's <Outlet context=...>
  return <Pricing onBookClick={onBook} calendlyUrl={calendlyUrl} />;
}
