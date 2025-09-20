// src/pages/QualityPartnerPage.jsx
import { useOutletContext } from "react-router-dom";
import QualityPartnerProgram from "../components/QualityPartnerProgram";

export default function QualityPartnerPage() {
  const { onBook, calendlyUrl } = useOutletContext();
  return <QualityPartnerProgram onBook={onBook} calendlyUrl={calendlyUrl} />;
}
