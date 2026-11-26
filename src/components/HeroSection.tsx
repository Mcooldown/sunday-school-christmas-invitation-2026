import { EVENT_DATA } from '../constants/eventData';
import {
  BellIcon,
  CalendarIcon,
  ChristmasGarlandBorder,
  ChristmasTreeIllustration,
  ClockIcon,
  GiftBoxIcon,
  StarIcon,
} from './ChristmasIcons';

export function HeroSection() {
  return (
    <header className="relative overflow-hidden px-4 pt-14 pb-10 sm:pt-16 sm:pb-12">
      {/* Flyer-inspired festive top garland */}
      <ChristmasGarlandBorder className="pointer-events-none absolute top-0 left-0 h-11 w-full opacity-95" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 left-1/2 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FEF3C7]/85 via-[#FEE2E2]/45 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 flex items-center justify-center gap-4 text-[#EAB308]">
          <StarIcon className="animate-twinkle h-5 w-5 text-[#C62828]" />
          <BellIcon className="animate-sway h-7 w-7 text-[#EAB308]" />
          <StarIcon
            className="animate-twinkle h-6 w-6 text-[#1B5E20]"
            style={{ animationDelay: '0.7s' }}
          />
          <BellIcon
            className="animate-sway h-7 w-7 text-[#EAB308]"
            style={{ animationDelay: '0.4s' }}
          />
          <StarIcon
            className="animate-twinkle h-5 w-5 text-[#C62828]"
            style={{ animationDelay: '1.2s' }}
          />
        </div>

        <div className="inline-flex rotate-1 items-center gap-2 rounded-full border border-[#1B5E20]/20 bg-white/90 px-4 py-1.5 text-xs font-extrabold tracking-wide text-[#1B5E20] shadow-xs sm:text-sm">
          <span>{EVENT_DATA.churchSubtitle}</span>
          <span aria-hidden="true">•</span>
          <span className="text-[#C62828]">{EVENT_DATA.churchName}</span>
        </div>

        <div className="mt-5">
          <span className="inline-block -rotate-1 rounded-full bg-[#FACC15]/40 px-4 py-1 text-sm font-extrabold text-[#92400E] sm:text-base">
            Yuk, Ikut Merayakan Natal Bersama!
          </span>
        </div>

        <h1 className="font-display mt-3 text-4xl leading-[1.12] font-bold text-[#1B5E20] sm:text-6xl">
          Ibadah Natal{' '}
          <span className="block text-[#C62828] sm:inline">Sekolah Minggu</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed font-semibold text-[#475549] sm:text-lg">
          Kami mengundang Bapak/Ibu Orang Tua dan Adik-adik untuk hadir dan
          bersukacita bersama teman-teman Sekolah Minggu. Akan ada pujian, doa,
          musik, tarian seru, hingga penyalaan lilin!
        </p>

        {/* Playful Christmas illustration trio */}
        <div className="relative mx-auto mt-7 flex max-w-xs items-end justify-center gap-3">
          <GiftBoxIcon className="animate-float h-12 w-12 -rotate-6 sm:h-14 sm:w-14" />
          <ChristmasTreeIllustration className="h-32 w-28 drop-shadow-sm sm:h-36 sm:w-32" />
          <GiftBoxIcon
            className="animate-float h-11 w-11 rotate-6 sm:h-13 sm:w-13"
            style={{ animationDelay: '0.9s' }}
          />
        </div>

        {/* Relaxed date & time pills */}
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <div className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#C62828]/20 bg-white px-5 py-2.5 text-sm font-extrabold text-[#1E2920] shadow-sm sm:text-base">
            <CalendarIcon className="h-5 w-5 text-[#C62828]" />
            <span>{EVENT_DATA.dateLabel}</span>
          </div>
          <div className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#1B5E20]/20 bg-white px-5 py-2.5 text-sm font-extrabold text-[#1E2920] shadow-sm sm:text-base">
            <ClockIcon className="h-5 w-5 text-[#1B5E20]" />
            <span>{EVENT_DATA.timeLabel}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
