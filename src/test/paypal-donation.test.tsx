import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const { paypalConfig } = vi.hoisted(() => ({ paypalConfig: { url: "" } }));

vi.mock("@/lib/church", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/church")>();
  return { ...actual, CHURCH: { ...actual.CHURCH, paypal: paypalConfig } };
});

import { Contribute } from "@/components/site/Contribute";
import { payPalDonateUrl } from "@/lib/paypal";

describe("Link de doação do PayPal", () => {
  it("não mostra o botão enquanto a igreja não configurar o link", () => {
    paypalConfig.url = "";
    expect(payPalDonateUrl()).toBeNull();

    render(<Contribute />);
    expect(screen.queryByRole("link", { name: /doar com paypal/i })).not.toBeInTheDocument();
  });

  it("mostra o botão apontando para o link configurado", () => {
    paypalConfig.url = "https://www.paypal.com/donate/?hosted_button_id=IDDNS123";
    expect(payPalDonateUrl()).toBe("https://www.paypal.com/donate/?hosted_button_id=IDDNS123");

    render(<Contribute />);
    const button = screen.getByRole("link", { name: /doar com paypal/i });
    expect(button).toHaveAttribute("href", "https://www.paypal.com/donate/?hosted_button_id=IDDNS123");
    expect(button).toHaveAttribute("target", "_blank");
  });

  it("ignora um link que não seja do PayPal", () => {
    paypalConfig.url = "https://example.com/donate";
    expect(payPalDonateUrl()).toBeNull();

    render(<Contribute />);
    expect(screen.queryByRole("link", { name: /doar com paypal/i })).not.toBeInTheDocument();
  });
});
