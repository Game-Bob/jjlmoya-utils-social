const YT_REGEX =
  /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?/\s]{11})/i;

export function extractVideoId(url: string): string | null {
  const match = url.match(YT_REGEX);
  return match ? match[1] : null;
}
