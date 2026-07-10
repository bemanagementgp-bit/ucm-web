import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { Button } from "@/components/ui/Buttons";

interface PatientPortalCardProps {
  name: string;
  description: string;
  url: string;
  className?: string;
}

export function PatientPortalCard({
  name,
  description,
  url,
  className = "",
}: PatientPortalCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-primary-light/30 p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 ${className}`}
    >
      <div className="w-14 h-14 bg-violet/10 rounded-xl flex items-center justify-center mb-5">
        <svg className="w-7 h-7 text-violet" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-2">{name}</h3>
      <p className="text-text-secondary leading-relaxed mb-6">
        {description}
      </p>
      <Button href={url} variant="primary" external>
        Ingresar al portal
        <HiArrowTopRightOnSquare className="w-4 h-4" />
      </Button>
      <p className="text-xs text-text-secondary/70 mt-3">
        Serás redirigido al portal externo de la institución.
      </p>
    </div>
  );
}
