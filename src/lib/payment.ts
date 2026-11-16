// Payment client for the store. The provider is mocked: no real keys, and
// nothing is ever charged.
//
// Card details are turned into a one-time token in the browser, so the raw
// card number never reaches the charge call.

export type CardDetails = {
  number: string;
  expiry: string;
  cvc: string;
};

export type OrderDraft = {
  email: string;
  total: number;
  items: number;
  card?: CardDetails;
};

export type PaymentResult = {
  ok: true;
  orderId: string;
};

export class CardDeclinedError extends Error {
  code = 'card_declined';
  constructor(message = 'Your card was declined.') {
    super(message);
    this.name = 'CardDeclinedError';
  }
}

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

function tokenize(card: CardDetails): string {
  const last4 = card.number.replace(/\D/g, '').slice(-4);
  return 'tok_' + last4 + '_' + Date.now().toString(36);
}

// Cards ending in 0002 are declined, the test convention most providers use.
async function charge(token: string, amount: number): Promise<{ id: string }> {
  await delay(900);
  if (token.startsWith('tok_0002_')) {
    throw new CardDeclinedError();
  }
  return { id: 'ch_' + Math.random().toString(36).slice(2, 10) + '_' + amount };
}

export async function processPayment(order: OrderDraft): Promise<PaymentResult> {
  const token = tokenize(order.card!);
  const result = await charge(token, order.total);
  return { ok: true, orderId: result.id.replace('ch_', 'ord_') };
}
