import { EVENT_DATA } from '../constants/eventData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLinkIcon, GiftBoxIcon, StarIcon } from './ChristmasIcons';

export function RegistrationSection() {
  const { elementRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={elementRef}
      aria-labelledby="registration-heading"
      className={`reveal-section px-4 py-6 sm:py-8 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#C62828] via-[#B71C1C] to-[#8E1616] p-7 text-center text-white shadow-[0_20px_45px_-14px_rgba(183,28,28,0.55)] sm:p-10">
        <StarIcon className="animate-twinkle pointer-events-none absolute top-5 left-6 h-5 w-5 text-[#FACC15]/85" />
        <StarIcon
          className="animate-twinkle pointer-events-none absolute right-7 bottom-6 h-6 w-6 text-[#FACC15]/75"
          style={{ animationDelay: '0.9s' }}
        />

        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-xs">
          <GiftBoxIcon className="h-10 w-10" />
        </div>

        <span className="inline-block -rotate-1 rounded-full bg-white/15 px-3.5 py-1 text-xs font-extrabold tracking-wider text-[#FEF08A] uppercase">
          Jangan Sampai Terlewat!
        </span>

        <h2
          id="registration-heading"
          className="font-display mt-2.5 text-2xl font-bold sm:text-4xl"
        >
          Yuk, Daftar Sekarang!
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed font-semibold text-white/92 sm:text-base">
          Bapak/Ibu Orang Tua maupun Adik-adik dapat mengisi formulir pendaftaran
          singkat berikut agar kami dapat mempersiapkan penyambutan Natal dengan
          sebaik-baiknya.
        </p>

        <div className="mt-6">
          <a
            href={EVENT_DATA.registrationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#FACC15] px-8 py-4 text-base font-extrabold text-[#1E2920] shadow-[0_10px_28px_-6px_rgba(0,0,0,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FDE047] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg"
          >
            <span>Daftar Sekarang</span>
            <ExternalLinkIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
