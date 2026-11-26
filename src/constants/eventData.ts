export interface ProgramItem {
  id: string;
  label: string;
}

export const EVENT_DATA = {
  title: 'Ibadah Natal Sekolah Minggu',
  churchName: 'GGP Ecclesia Christi',
  churchSubtitle: 'Gereja Gerakan Pentakosta',
  dateLabel: 'Minggu, 20 Desember 2026',
  timeLabel: 'Pukul 16.00 WIB',
  shortDateTimeLabel: 'Minggu, 20 Desember 2026 • 16.00 WIB',
  addressLabel: 'Jl. Kramat Soka No.4, Jakarta Pusat',
  // Event timestamp in Western Indonesian Time (WIB)
  targetIsoDate: '2026-12-20T16:00:00+07:00',
  googleMapsUrl: 'https://maps.app.goo.gl/teWeJjMtnRFNcJ62A',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=GGP%20Ecclesia%20Christi%20Jl.%20Kramat%20Soka%20No.4%20Jakarta%20Pusat&t=&z=16&ie=UTF8&iwloc=&output=embed',
  registrationFormUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSde7psGTdRGxaAMUdH6TN7WUjxNXPZhe2Pm1ypzJqmOm7sDgw/viewform',
  programHighlights: [
    { id: 'worship', label: 'Pujian & Penyembahan' },
    { id: 'prayer', label: 'Doa Bersama' },
    { id: 'music', label: 'Musik Natal' },
    { id: 'dance', label: 'Tarian Sukacita' },
    { id: 'candle', label: 'Penyalaan Lilin' },
    { id: 'more', label: 'Dan Masih Banyak Lagi!' },
  ] satisfies ProgramItem[],
} as const;
