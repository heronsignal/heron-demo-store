// Payment client for the store. The provider is mocked: no real keys, and
// nothing is ever charged.

export type OrderDraft = {
  email: string;
  total: number;
  items: number;
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

async function charge(amount: number): Promise<{ id: string }> {
  await delay(900);
  return { id: 'ch_' + Math.random().toString(36).slice(2, 10) + '_' + amount };
}

export async function processPayment(order: OrderDraft): Promise<PaymentResult> {
  const result = await charge(order.total);
  return { ok: true, orderId: result.id.replace('ch_', 'ord_') };
}
