export function formatTimeElapsed(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  return `${format(minutes)}:${format(seconds)}`;
}

function format(value: number) {
  return `${String(value).padStart(2, '0')}`;
}
