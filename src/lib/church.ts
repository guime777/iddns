export const CHURCH = {
  name: "Igreja Deus das Nações",
  short: "IDDNS",
  address: "AR 16 – Sobradinho II, Brasília – DF",
  cep: "73062-215",
  pix: "22.622.779/0001-10",
  // Link de doação do PayPal (botão de doação ou PayPal.Me) criado pela igreja.
  // Deixe vazio ("") enquanto não existir: sem link, o botão não aparece no site.
  paypal: {
    url: "https://www.paypal.com",
  },
  instagram: {
    handle: "@iddns_oficial2",
    followers: "3.160 seguidores",
    url: "https://www.instagram.com/iddns_oficial2/",
  },
  youtube: {
    name: "Igreja Deus das Nações",
    url: "https://youtube.com/@IddnsOficial",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Igreja+Deus+das+Na%C3%A7%C3%B5es+AR+16+Sobradinho+II+Bras%C3%ADlia+DF",
  mapsEmbed:
    "https://www.google.com/maps?q=Igreja+Deus+das+Na%C3%A7%C3%B5es,+AR+16,+Sobradinho+II,+Bras%C3%ADlia+-+DF,+73062-215&output=embed",
} as const;

export const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Nossa Igreja", href: "#nossa-igreja" },
  { label: "Cultos", href: "#cultos" },
  { label: "IDDNSFLIX", href: "#iddnsflix" },
  { label: "Contribua", href: "#contribua" },
  { label: "Localização", href: "#localizacao" },
] as const;

export type Service = {
  day: string;
  name: string;
  time: string;
  online?: boolean;
};

export const SERVICES: Service[] = [
  { day: "Terça-feira", name: "Terça Profética", time: "19h30" },
  { day: "Sexta-feira", name: "Sexta da Libertação", time: "19h30" },
  { day: "Domingo", name: "Domingo pela Família", time: "19h30" },
  { day: "Segunda-feira", name: "IDDNSFLIX", time: "22h00", online: true },
];
