var context = new AudioContext();

function playSound(arr: number[]) {
  var buf = new Float32Array(arr.length)
  for (var i = 0; i < arr.length; i++) buf[i] = arr[i]
  var buffer = context.createBuffer(1, buf.length, context.sampleRate)
  buffer.copyToChannel(buf, 0)
  var source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);
  source.start(0);
}

function sineWaveAt(sampleNumber: number, tone: number) {
  var sampleFreq = context.sampleRate / tone
  return Math.sin(sampleNumber / (sampleFreq / (Math.PI * 2)))
}

export function playSineWave(
  tone= Note.A4,
  volume = 0.1,
  seconds = 0.1
) {
  const arr: number[] = []

  for (var i = 0; i < context.sampleRate * seconds; i++) {
    arr[i] = sineWaveAt(i, tone) * volume
  }

  playSound(arr)
}

export enum Note {
  C0 = 16.35,
  C1 = 32.70,
  C2 = 65.41,
  C3 = 130.81,
  C4 = 261.63,
  C5 = 523.25,
  C6 = 1046.50,
  C7 = 2093.00,
  C8 = 4186.01,
  Db0 = 17.32,
  Db1 = 34.65,
  Db2 = 69.30,
  Db3 = 138.59,
  Db4 = 277.18,
  Db5 = 554.37,
  Db6 = 1108.73,
  Db7 = 2217.46,
  Db8 = 4434.92,
  D0 = 18.35,
  D1 = 36.71,
  D2 = 73.42,
  D3 = 146.83,
  D4 = 293.66,
  D5 = 587.33,
  D6 = 1174.66,
  D7 = 2349.32,
  D8 = 4698.63,
  Eb0 = 19.45,
  Eb1 = 38.89,
  Eb2 = 77.78,
  Eb3 = 155.56,
  Eb4 = 311.13,
  Eb5 = 622.25,
  Eb6 = 1244.51,
  Eb7 = 2489.02,
  Eb8 = 4978.03,
  E0 = 20.60,
  E1 = 41.20,
  E2 = 82.41,
  E3 = 164.81,
  E4 = 329.63,
  E5 = 659.25,
  E6 = 1318.51,
  E7 = 2637.02,
  E8 = 5274.04,
  F0 = 21.83,
  F1 = 43.65,
  F2 = 87.31,
  F3 = 174.61,
  F4 = 349.23,
  F5 = 698.46,
  F6 = 1396.91,
  F7 = 2793.83,
  F8 = 5587.65,
  Gb0 = 23.12,
  Gb1 = 46.25,
  Gb2 = 92.50,
  Gb3 = 185.00,
  Gb4 = 369.99,
  Gb5 = 739.99,
  Gb6 = 1479.98,
  Gb7 = 2959.96,
  Gb8 = 5919.91,
  G0 = 24.50,
  G1 = 49.00,
  G2 = 98.00,
  G3 = 196.00,
  G4 = 392.00,
  G5 = 783.99,
  G6 = 1567.98,
  G7 = 3135.96,
  G8 = 6271.93,
  Ab0 = 25.96,
  Ab1 = 51.91,
  Ab2 = 103.83,
  Ab3 = 207.65,
  Ab4 = 415.30,
  Ab5 = 830.61,
  Ab6 = 1661.22,
  Ab7 = 3322.44,
  Ab8 = 6644.88,
  A0 = 27.50,
  A1 = 55.00,
  A2 = 110.00,
  A3 = 220.00,
  A4 = 440.00,
  A5 = 880.00,
  A6 = 1760.00,
  A7 = 3520.00,
  A8 = 7040.00,
  Bb0 = 29.14,
  Bb1 = 58.27,
  Bb2 = 116.54,
  Bb3 = 233.08,
  Bb4 = 466.16,
  Bb5 = 932.33,
  Bb6 = 1864.66,
  Bb7 = 3729.31,
  Bb8 = 7458.62,
  B0 = 30.87,
  B1 = 61.74,
  B2 = 123.47,
  B3 = 246.94,
  B4 = 493.88,
  B5 = 987.77,
  B6 = 1975.53,
  B7 = 3951.07,
  B8 = 7902.13  
}
