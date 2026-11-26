import { EVENT_DATA } from '../constants/eventData';
import { StarIcon } from './ChristmasIcons';

export function Footer() {
  return (
    <footer className="px-4 pt-6 pb-16 text-center">
      <div className="mx-auto max-w-xl border-t border-[#EBDCCB] pt-7">
        <div className="flex items-center justify-center gap-2 text-[#EAB308]">
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-5 w-5 text-[#C62828]" />
          <StarIcon className="h-4 w-4" />
        </div>
        <p className="font-display mt-3 text-lg font-bold text-[#1B5E20]">
          Sampai jumpa dalam sukacita Natal, Bapak/Ibu Orang Tua dan Adik-adik!
        </p>
        <p className="mt-1 text-xs font-bold text-[#647469] sm:text-sm">
          {EVENT_DATA.title} • {EVENT_DATA.churchName}
        </p>
      </div>
    </footer>
  );
}
