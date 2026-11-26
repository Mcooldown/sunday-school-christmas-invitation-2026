import { EVENT_DATA } from '../constants/eventData';
import { useCountdown } from '../hooks/useCountdown';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FestiveLightsDivider, StarIcon } from './ChristmasIcons';

function padTwoDigits(value: number): string {
  return String(value).padStart(2, '0');
}

export function CountdownSection() {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(
    EVENT_DATA.targetIsoDate
  );
  const { elementRef, isVisible } = useScrollReveal<HTMLElement>();

  const timeUnits = [
    { label: 'Hari', value: padTwoDigits(days), bgClass: 'bg-[#C62828] -rotate-1' },
    { label: 'Jam', value: padTwoDigits(hours), bgClass: 'bg-[#1B5E20] rotate-1' },
    { label: 'Menit', value: padTwoDigits(minutes), bgClass: 'bg-[#C62828] -rotate-1' },
    { label: 'Detik', value: padTwoDigits(seconds), bgClass: 'bg-[#1B5E20] rotate-1' },
  ];

  return (
    <section
      ref={elementRef}
      aria-labelledby="countdown-heading"
      className={`reveal-section px-4 py-4 sm:py-6 ${isVisible ? 'is-visible' : ''}`}
    >
      <FestiveLightsDivider className="mx-auto mb-5 h-6 w-64 sm:w-80" />

      <div className="mx-auto max-w-3xl rounded-[2rem] border-2 border-dashed border-[#EAB308]/45 bg-gradient-to-b from-white to-[#FFF9F0] p-6 text-center shadow-[0_14px_38px_-14px_rgba(27,94,32,0.14)] sm:p-8">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#B45309] uppercase">
          <StarIcon className="h-4 w-4 text-[#EAB308]" />
          <span>Sebentar Lagi Natal!</span>
          <StarIcon className="h-4 w-4 text-[#EAB308]" />
        </div>

        <h2
          id="countdown-heading"
          className="font-display mt-1.5 text-2xl font-bold text-[#1E2920] sm:text-3xl"
        >
          Menuju Hari Natal Sekolah Minggu
        </h2>

        {isComplete ? (
          <div className="mt-6 rounded-3xl bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] px-6 py-5 text-white shadow-md">
            <p className="font-display text-xl font-bold sm:text-2xl">
              Hari Natal Sekolah Minggu Telah Tiba!
            </p>
            <p className="mt-1 text-sm font-semibold text-white/90">
              Mari hadir dan bersukacita bersama di {EVENT_DATA.churchName}.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-4 gap-2.5 sm:gap-4">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className={`${unit.bgClass} flex flex-col items-center justify-center rounded-2xl px-2 py-4 text-white shadow-md transition-transform duration-200 hover:rotate-0 sm:py-5`}
              >
                <span className="font-display text-3xl leading-none font-bold tabular-nums sm:text-5xl">
                  {unit.value}
                </span>
                <span className="mt-1.5 text-xs font-bold tracking-wide text-white/95 uppercase sm:text-sm">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <p className="mt-5 text-xs font-bold text-[#647469] sm:text-sm">
          {EVENT_DATA.shortDateTimeLabel}
        </p>
      </div>
    </section>
  );
}
