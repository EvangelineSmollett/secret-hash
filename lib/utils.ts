export function shortenHash(value: string, start = 8, end = 6) {
  if (!value) return "Unavailable";
  if (value.length <= start + end) return value;
  return `${value.slice(0, start)}...${value.slice(-end)}`;
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function isHexHash(value: string) {
  return /^0x[a-fA-F0-9]{64}$/.test(value.trim());
}

export function createRecordId(hash: string, createdAt: string) {
  return `${createdAt.replace(/\D/g, "").slice(-12)}-${hash.slice(2, 10).toLowerCase()}`;
}
