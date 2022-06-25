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
  tone = 441,
  volume = 0.2,
  seconds = 0.5
) {
  const arr: number[] = []

  for (var i = 0; i < context.sampleRate * seconds; i++) {
    arr[i] = sineWaveAt(i, tone) * volume
  }

  playSound(arr)
}