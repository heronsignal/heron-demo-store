export type Product = {
  id: string;
  name: string;
  blurb: string;
  price: number; // in USD
  tone: string; // card background behind the illustration
};

export const products: Product[] = [
  {
    id: 'pour-over',
    name: 'Ceramic Pour-Over',
    blurb: 'Matte stoneware, single-cup brew.',
    price: 48,
    tone: 'linear-gradient(135deg,#3b4656,#20272f)',
  },
  {
    id: 'merino-throw',
    name: 'Merino Throw',
    blurb: 'Lofty, lightweight, quietly warm.',
    price: 120,
    tone: 'linear-gradient(135deg,#4a5364,#2a313b)',
  },
  {
    id: 'desk-tray',
    name: 'Walnut Desk Tray',
    blurb: 'Solid walnut, oiled by hand.',
    price: 65,
    tone: 'linear-gradient(135deg,#5b4a3a,#2e2620)',
  },
  {
    id: 'linen-apron',
    name: 'Linen Apron',
    blurb: 'Stonewashed flax, cross-back straps.',
    price: 38,
    tone: 'linear-gradient(135deg,#46525f,#262d34)',
  },
  {
    id: 'cast-kettle',
    name: 'Cast Iron Kettle',
    blurb: 'Enamel-lined, 1.2 litre.',
    price: 95,
    tone: 'linear-gradient(135deg,#39424e,#1e242b)',
  },
  {
    id: 'wool-slippers',
    name: 'Wool Slippers',
    blurb: 'Boiled wool, suede sole.',
    price: 54,
    tone: 'linear-gradient(135deg,#4c4740,#272420)',
  },
];

export function findProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatUsd(cents: number): string {
  return cents.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}
