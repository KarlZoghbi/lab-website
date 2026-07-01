// Deterministic pseudo-random hash so the same seed always yields the same
// gradient variant — no network dependency, renders instantly every time.
export function hashSeed(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const VARIANTS = [
  ["#e11d74", "#7c3aed"],
  ["#ff5fa2", "#e11d74"],
  ["#7c3aed", "#0a0908"],
  ["#e11d74", "#0a0908"],
] as const;

export function gradientForSeed(seed: string) {
  const [from, to] = VARIANTS[hashSeed(seed) % VARIANTS.length];
  const angle = hashSeed(seed + "-angle") % 360;
  return { from, to, angle };
}
