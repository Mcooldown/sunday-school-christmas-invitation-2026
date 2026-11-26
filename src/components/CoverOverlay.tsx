import { EVENT_DATA } from '../constants/eventData';
import {
  ChristmasGarlandBorder,
  ChristmasTreeIllustration,
  GiftBoxIcon,
  SparkleMailIcon,
  StarIcon,
} from './ChristmasIcons';

interface CoverOverlayProps {
  isOpen: boolean;
  onOpenInvitation: () => void;
}

export function CoverOverlay({ isOpen, onOpenInvitation }: CoverOverlayProps) {
  return (
    <div
      role="dialog"
      aria-modal={!isOpen}
      aria-label="Sampul Undangan Natal Sekolah Minggu"
      aria-hidden={isOpen}
      inert={isOpen}
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF9F0] via-[#FDF4E7] to-[#F9E8D9] px-5 py-8 transition-all duration-700 ease-out ${
        isOpen
          ? 'pointer-events-none invisible scale-105 opacity-0'
          : 'pointer-events-auto scale-100 opacity-100'
      }`}
    >
      {/* Top festive garland matching the flyer border */}
      <ChristmasGarlandBorder className="pointer-events-none absolute top-0 left-0 h-11 w-full opacity-90" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#C62828]/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[#1B5E20]/12 blur-3xl"
      />

      <StarIcon className="animate-twinkle pointer-events-none absolute top-16 left-8 h-6 w-6 text-[#EAB308]/85 sm:left-16" />
      <StarIcon
        className="animate-twinkle pointer-events-none absolute top-20 right-10 h-5 w-5 text-[#C62828]/75 sm:right-20"
        style={{ animationDelay: '0.8s' }}
      />
      <StarIcon
        className="animate-twinkle pointer-events-none absolute bottom-16 left-12 h-5 w-5 text-[#1B5E20]/65 sm:left-24"
        style={{ animationDelay: '1.4s' }}
      />

      <div className="relative w-full max-w-md rounded-[2rem] border-2 border-dashed border-[#EAB308]/55 bg-white/92 p-7 text-center shadow-[0_22px_55px_-16px_rgba(139,30,30,0.2)] backdrop-blur-sm sm:p-9">
        <div className="mx-auto mb-4 inline-flex -rotate-1 items-center gap-2 rounded-full bg-[#1B5E20]/10 px-4 py-1.5 text-xs font-extrabold tracking-wide text-[#1B5E20] uppercase">
          <StarIcon className="h-3.5 w-3.5 text-[#EAB308]" />
          <span>Undangan Natal Anak</span>
          <StarIcon className="h-3.5 w-3.5 text-[#EAB308]" />
        </div>

        <div className="relative mx-auto my-1 flex h-28 w-28 items-center justify-center">
          <ChristmasTreeIllustration className="animate-float h-28 w-28 drop-shadow-sm" />
          <GiftBoxIcon className="absolute -right-2 bottom-0 h-10 w-10 drop-shadow-sm" />
        </div>

        <p className="mt-2 text-sm font-bold text-[#C62828]">
          {EVENT_DATA.churchName}
        </p>

        <h1 className="font-display mt-1 text-3xl leading-tight font-bold text-[#1B5E20] sm:text-4xl">
          {EVENT_DATA.title}
        </h1>

        <p className="mt-3 text-sm leading-relaxed font-semibold text-[#525E54]">
          Halo Bapak/Ibu Orang Tua dan Adik-adik! Yuk, ikut merayakan sukacita
          Natal bersama keluarga besar Sekolah Minggu.
        </p>

        <div className="mt-4 rounded-2xl bg-[#FEF3C7]/65 px-4 py-2.5 text-sm font-extrabold text-[#78350F]">
          {EVENT_DATA.shortDateTimeLabel}
        </div>

        <button
          type="button"
          onClick={onOpenInvitation}
          className="group mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#C62828] to-[#D32F2F] px-6 py-4 text-base font-extrabold text-white shadow-[0_12px_26px_-6px_rgba(198,40,40,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#B71C1C] hover:to-[#C62828] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C62828]"
        >
          <SparkleMailIcon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
          <span>Buka Undangan</span>
        </button>

        <p className="mt-3 text-xs font-semibold text-[#7A857C]">
          Ketuk tombol di atas untuk membuka undangan dan memutar musik Natal.
        </p>
      </div>
    </div>
  );
}
