import { HiInformationCircle } from "react-icons/hi2";

interface MedicalDisclaimerProps {
  text?: string;
  className?: string;
}

export function MedicalDisclaimer({
  text = "La información de esta web es orientativa y no reemplaza una consulta profesional.",
  className = "",
}: MedicalDisclaimerProps) {
  return (
    <div
      className={`flex items-start gap-3 p-4 bg-primary-lightest rounded-xl border border-primary-light/30 ${className}`}
      role="note"
    >
      <HiInformationCircle className="w-5 h-5 text-violet shrink-0 mt-0.5" />
      <p className="text-sm text-text-secondary leading-relaxed">{text}</p>
    </div>
  );
}
