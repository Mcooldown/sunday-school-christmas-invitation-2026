import type { SVGProps } from 'react';

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2l2.6 5.8 6.3.7-4.7 4.2 1.3 6.2L12 15.8l-5.5 3.1 1.3-6.2L3.1 8.5l6.3-.7L12 2z" />
    </svg>
  );
}

export function ChristmasGarlandBorder(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 600 44"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0 36 Q37.5 43 75 36 T150 36 T225 36 T300 36 T375 36 T450 36 T525 36 T600 36"
        stroke="#C62828"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.55"
      />
      {[28, 178, 328, 478].map((x) => (
        <g key={`tree-${x}`} transform={`translate(${x}, 4)`}>
          <path d="M14 2L26 18H19L28 29H0L9 18H2L14 2Z" fill="#1B5E20" />
          <rect x="12" y="29" width="4" height="4" fill="#7C4A2D" />
          <circle cx="14" cy="2" r="2.2" fill="#EAB308" />
        </g>
      ))}
      {[96, 246, 396, 546].map((x) => (
        <g key={`house-${x}`} transform={`translate(${x}, 11)`}>
          <path d="M0 11L13 1L26 11V24H0V11Z" fill="#C62828" />
          <rect x="10" y="15" width="6" height="9" rx="1" fill="#FEF3C7" />
          <circle cx="6" cy="14" r="2" fill="#FEF3C7" />
          <circle cx="20" cy="14" r="2" fill="#FEF3C7" />
        </g>
      ))}
      {[68, 144, 218, 294, 368, 444, 518].map((x) => (
        <circle key={`dot-${x}`} cx={x} cy="11" r="2.5" fill="#EAB308" opacity="0.75" />
      ))}
    </svg>
  );
}

export function FestiveLightsDivider(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 26" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8 8 Q80 20 160 8 T312 8"
        stroke="#1B5E20"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.45"
      />
      {[
        { cx: 36, cy: 13, fill: '#C62828' },
        { cx: 88, cy: 14, fill: '#EAB308' },
        { cx: 140, cy: 11, fill: '#1B5E20' },
        { cx: 184, cy: 6, fill: '#C62828' },
        { cx: 236, cy: 4, fill: '#EAB308' },
        { cx: 286, cy: 7, fill: '#1B5E20' },
      ].map((bulb, index) => (
        <g key={index}>
          <circle cx={bulb.cx} cy={bulb.cy} r="5.5" fill={bulb.fill} opacity="0.22" />
          <circle cx={bulb.cx} cy={bulb.cy} r="3.2" fill={bulb.fill} />
        </g>
      ))}
    </svg>
  );
}

export function ChristmasTreeIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 140" fill="none" aria-hidden="true" {...props}>
      <path
        d="M60 8l3.5 7.5 8.2.9-6.1 5.5 1.7 8.1L60 26l-7.3 4 1.7-8.1-6.1-5.5 8.2-.9L60 8z"
        fill="#EAB308"
      />
      <path d="M60 28L88 64H73L95 92H77L102 118H18L43 92H25L47 64H32L60 28z" fill="#1B5E20" />
      <path d="M60 28L74 64H46L60 28z" fill="#2E7D32" opacity="0.55" />
      <rect x="52" y="118" width="16" height="14" rx="3" fill="#7C4A2D" />
      <circle cx="52" cy="54" r="3.5" fill="#C62828" />
      <circle cx="69" cy="76" r="4" fill="#FACC15" />
      <circle cx="44" cy="84" r="3.5" fill="#C62828" />
      <circle cx="76" cy="104" r="4" fill="#C62828" />
      <circle cx="56" cy="102" r="3.5" fill="#FACC15" />
      <circle cx="38" cy="108" r="3" fill="#FDFBF7" />
    </svg>
  );
}

export function GiftBoxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <rect x="7" y="19" width="34" height="23" rx="4" fill="#C62828" />
      <rect x="5" y="13" width="38" height="8" rx="3" fill="#E53935" />
      <rect x="21" y="13" width="6" height="29" fill="#FACC15" />
      <rect x="7" y="26" width="34" height="5" fill="#FACC15" opacity="0.9" />
      <path
        d="M24 13c-3.5-5.5-9-5.5-9-1.5 0 2.5 4 3.5 9 1.5zm0 0c3.5-5.5 9-5.5 9-1.5 0 2.5-4 3.5-9 1.5z"
        stroke="#EAB308"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9zm-4.27 13a2 2 0 01-3.46 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s-7-6.2-7-11.5a7 7 0 1114 0C19 14.8 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function MusicDiscIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function MusicOffIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 18V6l10-2v10M9 18a3 3 0 11-6 0 3 3 0 016 0zm10-4a3 3 0 11-6 0 3 3 0 016 0z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 3l18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ZoomInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20l-3.5-3.5M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function ExternalLinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 4h6v6M10 14L20 4M19 13v5a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkleMailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
