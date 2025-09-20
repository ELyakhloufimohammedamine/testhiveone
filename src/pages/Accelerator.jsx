// src/pages/QualityAcceleratorPage.jsx
import { useOutletContext } from "react-router-dom";
import QualityAcceleratorPack from "../components/QualityAcceleratorPack";

export default function QualityAcceleratorPage() {
  const { onBook, calendlyUrl } = useOutletContext();
  return <QualityAcceleratorPack onBook={onBook} calendlyUrl={calendlyUrl} />;
}
