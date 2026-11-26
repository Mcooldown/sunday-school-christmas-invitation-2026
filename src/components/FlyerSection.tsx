import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import christmasFlyerImg from '../assets/christmas-flyer.jpg';
import { EVENT_DATA } from '../constants/eventData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  CalendarIcon,
  ClockIcon,
  CloseIcon,
  FestiveLightsDivider,
  MapPinIcon,
  StarIcon,
  ZoomInIcon,
} from './ChristmasIcons';

export function FlyerSection() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { elementRef, isVisible } = useScrollReveal<HTMLElement>();

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);

  return (
    <section
      ref={elementRef}
      aria-labelledby="flyer-section-heading"
      className={`reveal-section px-4 py-6 sm:py-8 ${isVisible ? 'is-visible' : ''}`}
    >
      <FestiveLightsDivider className="mx-auto mb-5 h-6 w-64 sm:w-80" />

      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#EFE2D0] bg-white/92 p-5 shadow-[0_14px_40px_-14px_rgba(30,41,32,0.12)] sm:p-8">
        <div className="text-center">
          <span className="inline-block -rotate-1 rounded-full bg-[#C62828]/10 px-4 py-1 text-xs font-extrabold tracking-wider text-[#C62828] uppercase">
            Info Lengkap Acara
          </span>
          <h2
            id="flyer-section-heading"
            className="font-display mt-2 text-2xl font-bold text-[#1B5E20] sm:text-3xl"
          >
            Poster &amp; Jadwal Acara
          </h2>
          <p className="mt-1 text-sm font-semibold text-[#525E54]">
            Ketuk poster di bawah ini untuk melihat ukuran penuh ya.
          </p>
        </div>

        <div className="mt-7 grid items-center gap-7 lg:grid-cols-12">
          {/* Interactive flyer showcase */}
          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              aria-label="Perbesar poster acara Ibadah Natal Sekolah Minggu"
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-3xl border-2 border-[#EAB308]/45 bg-[#FDFBF7] shadow-md transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C62828]"
            >
              <img
                src={christmasFlyerImg}
                alt="Poster Ibadah Natal Sekolah Minggu GGP Ecclesia Christi"
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-[#1E2920]/85 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm backdrop-blur-xs">
                <ZoomInIcon className="h-4 w-4 text-[#FACC15]" />
                <span>Ketuk untuk Perbesar</span>
              </span>
            </button>
          </div>

          {/* Warm, polite event details for parents and kids */}
          <div className="space-y-5 lg:col-span-7">
            <div className="rounded-3xl border border-[#F0E3D3] bg-[#FFFDF9] p-5 sm:p-6">
              <h3 className="font-display text-xl font-bold text-[#C62828]">
                Catat Jadwalnya ya!
              </h3>

              <dl className="mt-4 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#C62828]/10 text-[#C62828]">
                    <CalendarIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <dt className="text-xs font-extrabold tracking-wide text-[#6B7280] uppercase">
                      Hari &amp; Tanggal
                    </dt>
                    <dd className="text-base font-bold text-[#1E2920]">
                      {EVENT_DATA.dateLabel}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#1B5E20]/10 text-[#1B5E20]">
                    <ClockIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <dt className="text-xs font-extrabold tracking-wide text-[#6B7280] uppercase">
                      Waktu
                    </dt>
                    <dd className="text-base font-bold text-[#1E2920]">
                      {EVENT_DATA.timeLabel}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#EAB308]/20 text-[#B45309]">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <dt className="text-xs font-extrabold tracking-wide text-[#6B7280] uppercase">
                      Tempat
                    </dt>
                    <dd className="text-base font-bold text-[#1E2920]">
                      {EVENT_DATA.churchName}
                    </dd>
                    <dd className="text-sm font-semibold text-[#525E54]">
                      {EVENT_DATA.addressLabel}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="rounded-3xl border border-[#1B5E20]/15 bg-[#1B5E20]/[0.05] p-5 sm:p-6">
              <h3 className="font-display text-xl font-bold text-[#1B5E20]">
                Rangkaian Acara Seru
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#4B584D]">
                Berbagai kegiatan penuh sukacita menanti Adik-adik:
              </p>

              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {EVENT_DATA.programHighlights.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 text-sm font-bold text-[#1E2920] shadow-2xs"
                  >
                    <StarIcon className="h-4 w-4 shrink-0 text-[#EAB308]" />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Render lightbox in document.body so parent section transform never clips fixed 100vw/100dvh */}
      {isLightboxOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Tampilan penuh poster Ibadah Natal Sekolah Minggu"
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-[100] flex h-dvh w-screen items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Tutup tampilan penuh poster"
              className="fixed top-4 right-4 z-[110] flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-[#1E2920] shadow-xl transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-white sm:top-6 sm:right-6"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <div
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[90dvh] max-w-4xl items-center justify-center"
            >
              <img
                src={christmasFlyerImg}
                alt="Poster Ibadah Natal Sekolah Minggu GGP Ecclesia Christi"
                className="max-h-[88dvh] max-w-full rounded-2xl object-contain shadow-2xl"
              />
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
