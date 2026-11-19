import { CHURCH } from "@/lib/church";

const DONATION_HOSTS = ["paypal.com", "paypal.me"];

/**
 * Link de doação do PayPal configurado em src/lib/church.ts.
 *
 * Retorna null quando o link ainda não foi configurado ou quando ele não aponta
 * para o PayPal — assim o botão nunca aparece levando quem contribui para outro
 * lugar.
 */
export function payPalDonateUrl(): string | null {
  const configured: string = CHURCH.paypal.url;
  const url = configured.trim();
  if (!url) return null;

  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") return null;
    const host = parsed.hostname.toLowerCase();
    const isPayPal = DONATION_HOSTS.some(
      (domain) => host === domain || host.endsWith(`.${domain}`),
    );
    return isPayPal ? parsed.toString() : null;
  } catch {
    return null;
  }
}
