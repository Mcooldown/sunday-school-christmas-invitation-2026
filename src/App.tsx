import { useState } from 'react';
import { CountdownSection } from './components/CountdownSection';
import { CoverOverlay } from './components/CoverOverlay';
import { FlyerSection } from './components/FlyerSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { LocationSection } from './components/LocationSection';
import { MusicToggleButton } from './components/MusicToggleButton';
import { RegistrationSection } from './components/RegistrationSection';
import { SnowfallCanvas } from './components/SnowfallCanvas';
import { christmasAudio } from './utils/christmasAudio';

export function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleOpenInvitation = async () => {
    setIsInvitationOpen(true);
    const started = await christmasAudio.start();
    setIsMusicPlaying(started);
  };

  const handleToggleMusic = async () => {
    const nextPlaying = await christmasAudio.toggle();
    setIsMusicPlaying(nextPlaying);
  };

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden bg-[#FDFBF7] ${
        isInvitationOpen ? '' : 'max-h-screen overflow-hidden'
      }`}
    >
      <SnowfallCanvas />

      <CoverOverlay
        isOpen={isInvitationOpen}
        onOpenInvitation={handleOpenInvitation}
      />

      <main
        aria-hidden={!isInvitationOpen}
        inert={!isInvitationOpen}
        className={`relative z-10 transition-opacity duration-700 ${
          isInvitationOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <HeroSection />
        <CountdownSection />
        <FlyerSection />
        <LocationSection />
        <RegistrationSection />
        <Footer />
      </main>

      {isInvitationOpen && (
        <MusicToggleButton
          isPlaying={isMusicPlaying}
          onToggle={handleToggleMusic}
        />
      )}
    </div>
  );
}

export default App;
