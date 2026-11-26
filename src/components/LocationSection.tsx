import { EVENT_DATA } from '../constants/eventData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLinkIcon, FestiveLightsDivider, MapPinIcon } from './ChristmasIcons';

export function LocationSection() {
  const { elementRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={elementRef}
      aria-labelledby="location-heading"
      className={`reveal-section px-4 py-6 sm:py-8 ${isVisible ? 'is-visible' : ''}`}
    >
      <FestiveLightsDivider className="mx-auto mb-5 h-6 w-64 sm:w-80" />

      <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#EFE2D0] bg-white/92 p-6 shadow-[0_14px_38px_-14px_rgba(30,41,32,0.12)] sm:p-8">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C62828]/10 text-[#C62828]">
            <MapPinIcon className="h-6 w-6" />
          </div>
          <h2
            id="location-heading"
            className="font-display text-2xl font-bold text-[#1B5E20] sm:text-3xl"
          >
            Lokasi Acara
          </h2>
          <p className="mt-2 text-lg font-extrabold text-[#1E2920]">
            {EVENT_DATA.churchName}
          </p>
          <p className="mt-1 text-sm font-semibold text-[#525E54] sm:text-base">
            {EVENT_DATA.addressLabel}
          </p>
          <p className="mt-2 text-sm font-semibold text-[#647469]">
            Agar lebih mudah menuju lokasi gereja, silakan cek petanya di bawah ini ya.
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-[#E5D7C4] bg-[#F7F1E8]">
          <iframe
            title={`Peta lokasi ${EVENT_DATA.churchName}`}
            src={EVENT_DATA.googleMapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-64 w-full border-0 sm:h-80"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href={EVENT_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#1B5E20] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_24px_-8px_rgba(27,94,32,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#144718] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B5E20] sm:text-base"
          >
            <MapPinIcon className="h-5 w-5" />
            <span>Buka di Google Maps</span>
            <ExternalLinkIcon className="h-4 w-4 opacity-90" />
          </a>
        </div>
      </div>
    </section>
  );
}
