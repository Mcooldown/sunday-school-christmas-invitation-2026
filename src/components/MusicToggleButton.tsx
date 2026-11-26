import { MusicDiscIcon, MusicOffIcon } from './ChristmasIcons';

interface MusicToggleButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function MusicToggleButton({ isPlaying, onToggle }: MusicToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isPlaying ? 'Hentikan musik Natal' : 'Putar musik Natal'}
      aria-pressed={isPlaying}
      title={isPlaying ? 'Hentikan musik Natal' : 'Putar musik Natal'}
      className={`fixed right-5 bottom-5 z-40 flex h-13 w-13 cursor-pointer items-center justify-center rounded-full border-2 shadow-lg transition-all duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C62828] ${
        isPlaying
          ? 'border-[#FACC15] bg-[#1B5E20] text-[#FEF08A]'
          : 'border-[#C62828]/30 bg-white text-[#C62828]'
      }`}
    >
      {isPlaying ? (
        <MusicDiscIcon className="animate-spin-slow h-7 w-7" />
      ) : (
        <MusicOffIcon className="h-6 w-6" />
      )}
    </button>
  );
}
