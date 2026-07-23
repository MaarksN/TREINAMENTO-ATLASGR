// Custom SVGs aligned with the AtlasGR Identity
import { SVGProps } from "react";

export function AtlasLogisticsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 12L24 4L44 12V36L24 44L4 36V12Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M24 4L24 24M24 24L44 12M24 24L4 12M24 24V44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 28L24 32L34 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function AtlasSecurityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24 4C24 4 10 9.2 10 20C10 32.8 24 44 24 44C24 44 38 32.8 38 20C38 9.2 24 4 24 4Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M20 24L24 28L30 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="24" cy="24" r="3" fill="currentColor"/>
    </svg>
  );
}

export function AtlasIntelligenceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="currentColor" strokeWidth="3"/>
      <path d="M24 12V24L32 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 24H8M40 24H36M24 8V4M24 40V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function AtlasTechnologyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="3"/>
      <path d="M8 16H40M8 32H40M16 8V40M32 8V40" stroke="currentColor" strokeWidth="3"/>
      <rect x="16" y="16" width="16" height="16" fill="currentColor"/>
    </svg>
  );
}

export function AtlasMedalGold(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24 44L14 36V20L24 12L34 20V36L24 44Z" fill="#F59E0B" stroke="#B45309" strokeWidth="2"/>
      <circle cx="24" cy="26" r="6" fill="#FEF3C7"/>
      <path d="M16 4L22 12M32 4L26 12" stroke="#B45309" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function AtlasMedalSilver(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24 44L14 36V20L24 12L34 20V36L24 44Z" fill="#94A3B8" stroke="#475569" strokeWidth="2"/>
      <circle cx="24" cy="26" r="6" fill="#F1F5F9"/>
      <path d="M16 4L22 12M32 4L26 12" stroke="#475569" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}
