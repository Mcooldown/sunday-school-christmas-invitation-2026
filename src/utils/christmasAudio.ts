// Synthesizes a lively, full-sounding festive arrangement of Jingle Bells
// using the Web Audio API (lead chime, warm chords, bouncy bass, and soft sleigh bells).

interface BeatStep {
  melodyHz: number | null;
  harmonyHz?: number | null;
  chordHz?: readonly number[];
  bassHz?: number | null;
  sleighBell?: boolean;
  beats: number;
}

const TEMPO_BPM = 136;
const BEAT_SECONDS = 60 / TEMPO_BPM;
const SCHEDULE_AHEAD_SECONDS = 0.32;
const SCHEDULER_INTERVAL_MS = 85;

const NOTE = {
  C3: 130.81,
  D3: 146.83,
  E3: 164.81,
  F3: 174.61,
  G3: 196.0,
  A3: 220.0,
  B3: 246.94,
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  F4: 349.23,
  G4: 392.0,
  A4: 440.0,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
  F5: 698.46,
  G5: 783.99,
  A5: 880.0,
} as const;

const CHORD_C = [NOTE.C4, NOTE.E4, NOTE.G4] as const;
const CHORD_F = [NOTE.F4, NOTE.A4, NOTE.C5] as const;
const CHORD_G7 = [NOTE.G3, NOTE.B3, NOTE.D4, NOTE.F4] as const;
const CHORD_AM = [NOTE.A3, NOTE.C4, NOTE.E4] as const;

// Full festive arrangement: Verse + Chorus of Jingle Bells with accompaniment
const ARRANGEMENT: readonly BeatStep[] = [
  // Verse: "Dashing through the snow, in a one-horse open sleigh"
  { melodyHz: NOTE.G4, chordHz: CHORD_C, bassHz: NOTE.C3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.E5, harmonyHz: NOTE.C5, bassHz: NOTE.G3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.D5, harmonyHz: NOTE.B4, chordHz: CHORD_C, bassHz: NOTE.C3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.C5, harmonyHz: NOTE.G4, bassHz: NOTE.G3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.G4, chordHz: CHORD_C, bassHz: NOTE.C3, sleighBell: true, beats: 3 },
  { melodyHz: NOTE.G4, bassHz: NOTE.G3, sleighBell: true, beats: 0.5 },
  { melodyHz: NOTE.G4, beats: 0.5 },

  { melodyHz: NOTE.G4, chordHz: CHORD_C, bassHz: NOTE.C3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.E5, harmonyHz: NOTE.C5, bassHz: NOTE.G3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.D5, harmonyHz: NOTE.B4, chordHz: CHORD_F, bassHz: NOTE.F3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.C5, harmonyHz: NOTE.A4, bassHz: NOTE.C3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.A4, chordHz: CHORD_F, bassHz: NOTE.F3, sleighBell: true, beats: 3 },
  { melodyHz: null, bassHz: NOTE.C3, sleighBell: true, beats: 1 },

  // "O'er the fields we go, laughing all the way"
  { melodyHz: NOTE.A4, chordHz: CHORD_F, bassHz: NOTE.F3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.F5, harmonyHz: NOTE.C5, bassHz: NOTE.C3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.E5, harmonyHz: NOTE.C5, chordHz: CHORD_G7, bassHz: NOTE.G3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.D5, harmonyHz: NOTE.B4, bassHz: NOTE.D3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.B4, chordHz: CHORD_G7, bassHz: NOTE.G3, sleighBell: true, beats: 3 },
  { melodyHz: null, bassHz: NOTE.D3, sleighBell: true, beats: 1 },

  { melodyHz: NOTE.G5, harmonyHz: NOTE.D5, chordHz: CHORD_G7, bassHz: NOTE.G3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.G5, harmonyHz: NOTE.D5, bassHz: NOTE.D3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.F5, harmonyHz: NOTE.B4, chordHz: CHORD_G7, bassHz: NOTE.G3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.D5, harmonyHz: NOTE.B4, bassHz: NOTE.B3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.E5, harmonyHz: NOTE.C5, chordHz: CHORD_C, bassHz: NOTE.C3, sleighBell: true, beats: 3 },
  { melodyHz: null, bassHz: NOTE.G3, sleighBell: true, beats: 1 },

  // Chorus: "Jingle bells, jingle bells, jingle all the way"
  { melodyHz: NOTE.E5, harmonyHz: NOTE.C5, chordHz: CHORD_C, bassHz: NOTE.C3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.E5, harmonyHz: NOTE.C5, bassHz: NOTE.G3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.E5, harmonyHz: NOTE.C5, chordHz: CHORD_C, bassHz: NOTE.C3, sleighBell: true, beats: 2 },
  { melodyHz: NOTE.E5, harmonyHz: NOTE.C5, chordHz: CHORD_C, bassHz: NOTE.C3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.E5, harmonyHz: NOTE.C5, bassHz: NOTE.G3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.E5, harmonyHz: NOTE.C5, chordHz: CHORD_AM, bassHz: NOTE.A3, sleighBell: true, beats: 2 },
  { melodyHz: NOTE.E5, harmonyHz: NOTE.C5, chordHz: CHORD_C, bassHz: NOTE.C3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.G5, harmonyHz: NOTE.E5, bassHz: NOTE.G3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.C5, harmonyHz: NOTE.G4, chordHz: CHORD_C, bassHz: NOTE.C3, sleighBell: true, beats: 1.5 },
  { melodyHz: NOTE.D5, harmonyHz: NOTE.G4, beats: 0.5 },
  { melodyHz: NOTE.E5, harmonyHz: NOTE.C5, chordHz: CHORD_C, bassHz: NOTE.C3, sleighBell: true, beats: 3 },
  { melodyHz: null, bassHz: NOTE.G3, sleighBell: true, beats: 1 },

  // "Oh, what fun it is to ride in a one-horse open sleigh!"
  { melodyHz: NOTE.F5, harmonyHz: NOTE.A4, chordHz: CHORD_F, bassHz: NOTE.F3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.F5, harmonyHz: NOTE.A4, bassHz: NOTE.C3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.F5, harmonyHz: NOTE.A4, chordHz: CHORD_F, bassHz: NOTE.F3, sleighBell: true, beats: 1.5 },
  { melodyHz: NOTE.F5, harmonyHz: NOTE.A4, beats: 0.5 },
  { melodyHz: NOTE.F5, harmonyHz: NOTE.C5, chordHz: CHORD_C, bassHz: NOTE.C3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.E5, harmonyHz: NOTE.C5, bassHz: NOTE.G3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.E5, harmonyHz: NOTE.C5, chordHz: CHORD_C, bassHz: NOTE.C3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.E5, harmonyHz: NOTE.C5, beats: 0.5 },
  { melodyHz: NOTE.E5, harmonyHz: NOTE.C5, beats: 0.5 },
  { melodyHz: NOTE.G5, harmonyHz: NOTE.D5, chordHz: CHORD_G7, bassHz: NOTE.G3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.G5, harmonyHz: NOTE.D5, bassHz: NOTE.D3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.F5, harmonyHz: NOTE.B4, chordHz: CHORD_G7, bassHz: NOTE.G3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.D5, harmonyHz: NOTE.B4, bassHz: NOTE.B3, sleighBell: true, beats: 1 },
  { melodyHz: NOTE.C5, harmonyHz: NOTE.E4, chordHz: CHORD_C, bassHz: NOTE.C3, sleighBell: true, beats: 3 },
  { melodyHz: null, bassHz: NOTE.G3, sleighBell: true, beats: 1 },
];

class ChristmasJinglePlayer {
  private context: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;
  private schedulerTimer: number | null = null;
  private nextNoteTime = 0;
  private stepIndex = 0;
  private playing = false;

  private ensureContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;

    if (!this.context) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioCtx) return null;
      this.context = new AudioCtx();
    }

    if (!this.noiseBuffer) {
      const sampleRate = this.context.sampleRate;
      const length = Math.floor(sampleRate * 0.08);
      const buffer = this.context.createBuffer(1, length, sampleRate);
      const channelData = buffer.getChannelData(0);
      for (let i = 0; i < length; i += 1) {
        channelData[i] = Math.random() * 2 - 1;
      }
      this.noiseBuffer = buffer;
    }

    return this.context;
  }

  private scheduleChime(
    ctx: AudioContext,
    destination: GainNode,
    frequency: number,
    startTime: number,
    duration: number,
    peakGain: number
  ): void {
    const osc = ctx.createOscillator();
    const overtone = ctx.createOscillator();
    const env = ctx.createGain();
    const overtoneEnv = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(frequency, startTime);

    overtone.type = 'sine';
    overtone.frequency.setValueAtTime(frequency * 2, startTime);

    const decayEnd = startTime + Math.max(duration * 1.15, 0.34);

    env.gain.setValueAtTime(0.0001, startTime);
    env.gain.linearRampToValueAtTime(peakGain, startTime + 0.012);
    env.gain.exponentialRampToValueAtTime(0.0001, decayEnd);

    overtoneEnv.gain.setValueAtTime(0.0001, startTime);
    overtoneEnv.gain.linearRampToValueAtTime(peakGain * 0.25, startTime + 0.008);
    overtoneEnv.gain.exponentialRampToValueAtTime(
      0.0001,
      startTime + Math.min(duration * 0.65, 0.24)
    );

    osc.connect(env);
    env.connect(destination);

    overtone.connect(overtoneEnv);
    overtoneEnv.connect(destination);

    osc.start(startTime);
    overtone.start(startTime);
    osc.stop(decayEnd + 0.02);
    overtone.stop(decayEnd + 0.02);
  }

  private scheduleWarmChord(
    ctx: AudioContext,
    destination: GainNode,
    chord: readonly number[],
    startTime: number,
    duration: number
  ): void {
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(950, startTime);

    const env = ctx.createGain();
    const holdEnd = startTime + Math.max(duration * 1.7, 0.7);
    env.gain.setValueAtTime(0.0001, startTime);
    env.gain.linearRampToValueAtTime(0.065, startTime + 0.06);
    env.gain.exponentialRampToValueAtTime(0.0001, holdEnd);

    filter.connect(env);
    env.connect(destination);

    for (const freq of chord) {
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);
      osc.connect(filter);
      osc.start(startTime);
      osc.stop(holdEnd + 0.03);
    }
  }

  private scheduleBass(
    ctx: AudioContext,
    destination: GainNode,
    frequency: number,
    startTime: number
  ): void {
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    const endTime = startTime + 0.32;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, startTime);

    env.gain.setValueAtTime(0.0001, startTime);
    env.gain.linearRampToValueAtTime(0.2, startTime + 0.018);
    env.gain.exponentialRampToValueAtTime(0.0001, endTime);

    osc.connect(env);
    env.connect(destination);
    osc.start(startTime);
    osc.stop(endTime + 0.02);
  }

  private scheduleSleighBell(
    ctx: AudioContext,
    destination: GainNode,
    startTime: number
  ): void {
    if (!this.noiseBuffer) return;

    const source = ctx.createBufferSource();
    source.buffer = this.noiseBuffer;

    const bandpass = ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(6200, startTime);
    bandpass.Q.setValueAtTime(3.2, startTime);

    const env = ctx.createGain();
    env.gain.setValueAtTime(0.0001, startTime);
    env.gain.linearRampToValueAtTime(0.045, startTime + 0.006);
    env.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.075);

    source.connect(bandpass);
    bandpass.connect(env);
    env.connect(destination);
    source.start(startTime);
    source.stop(startTime + 0.08);
  }

  private scheduleNotesAhead(): void {
    if (!this.playing || !this.context || !this.masterGain) return;

    while (this.nextNoteTime < this.context.currentTime + SCHEDULE_AHEAD_SECONDS) {
      const step = ARRANGEMENT[this.stepIndex];
      const stepDuration = step.beats * BEAT_SECONDS;

      if (step.melodyHz !== null) {
        this.scheduleChime(
          this.context,
          this.masterGain,
          step.melodyHz,
          this.nextNoteTime,
          stepDuration,
          0.32
        );
      }

      if (step.harmonyHz) {
        this.scheduleChime(
          this.context,
          this.masterGain,
          step.harmonyHz,
          this.nextNoteTime,
          stepDuration,
          0.14
        );
      }

      if (step.chordHz) {
        this.scheduleWarmChord(
          this.context,
          this.masterGain,
          step.chordHz,
          this.nextNoteTime,
          stepDuration
        );
      }

      if (step.bassHz) {
        this.scheduleBass(
          this.context,
          this.masterGain,
          step.bassHz,
          this.nextNoteTime
        );
      }

      if (step.sleighBell) {
        this.scheduleSleighBell(this.context, this.masterGain, this.nextNoteTime);
      }

      this.nextNoteTime += stepDuration;
      this.stepIndex = (this.stepIndex + 1) % ARRANGEMENT.length;
    }
  }

  public async start(): Promise<boolean> {
    const ctx = this.ensureContext();
    if (!ctx) return false;

    if (ctx.state === 'suspended') {
      try {
        await ctx.resume();
      } catch {
        return false;
      }
    }

    if (this.playing) return true;

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.0001, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.32, ctx.currentTime + 0.25);
    gainNode.connect(ctx.destination);

    this.masterGain = gainNode;
    this.nextNoteTime = ctx.currentTime + 0.06;
    this.playing = true;

    this.scheduleNotesAhead();
    this.schedulerTimer = window.setInterval(
      () => this.scheduleNotesAhead(),
      SCHEDULER_INTERVAL_MS
    );

    return true;
  }

  public pause(): void {
    this.playing = false;

    if (this.schedulerTimer !== null) {
      window.clearInterval(this.schedulerTimer);
      this.schedulerTimer = null;
    }

    if (this.context && this.masterGain) {
      const gainToClose = this.masterGain;
      const now = this.context.currentTime;
      gainToClose.gain.cancelScheduledValues(now);
      gainToClose.gain.setValueAtTime(gainToClose.gain.value, now);
      gainToClose.gain.linearRampToValueAtTime(0.0001, now + 0.08);
      window.setTimeout(() => {
        gainToClose.disconnect();
      }, 100);
      this.masterGain = null;
    }
  }

  public async toggle(): Promise<boolean> {
    if (this.playing) {
      this.pause();
      return false;
    }
    return this.start();
  }
}

export const christmasAudio = new ChristmasJinglePlayer();
