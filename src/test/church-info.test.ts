import { describe, expect, it, vi } from "vitest";

import { CHURCH, SERVICES } from "@/lib/church";
import { copyText } from "@/lib/clipboard";

describe("Informações da igreja", () => {
  it("usa a chave PIX CNPJ oficial", () => {
    expect(CHURCH.pix).toBe("22.622.779/0001-10");
  });

  it("lista os cultos com os horários informados", () => {
    expect(SERVICES.map((s) => [s.day, s.name, s.time])).toEqual([
      ["Terça-feira", "Terça Profética", "19h30"],
      ["Sexta-feira", "Sexta da Libertação", "19h30"],
      ["Domingo", "Domingo pela Família", "19h30"],
      ["Segunda-feira", "IDDNSFLIX", "22h00"],
    ]);
  });

  it("marca apenas o IDDNSFLIX como programação online", () => {
    expect(SERVICES.filter((s) => s.online).map((s) => s.name)).toEqual(["IDDNSFLIX"]);
  });
});

describe("copyText", () => {
  it("copia a chave PIX para a área de transferência", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", { value: { writeText }, configurable: true });

    await expect(copyText(CHURCH.pix)).resolves.toBe(true);
    expect(writeText).toHaveBeenCalledWith("22.622.779/0001-10");
  });
});
