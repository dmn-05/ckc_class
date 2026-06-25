/**
 * Get auth token from browser cookies (client-side only)
 */
export function getClientToken(): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/(?:^|;\s*)auth_token=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * Build fetch headers with Authorization bearer token
 */
export function authHeaders(extra?: Record<string, string>): Record<string, string> {
  const token = getClientToken();
  return {
    'Accept': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    ...extra,
  };
}
