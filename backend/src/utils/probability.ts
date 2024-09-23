export function getProbability(percentage: number): boolean {
  return Math.random() < percentage / 100;
}
