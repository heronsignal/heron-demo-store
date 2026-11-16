# Fjord Supply Co.

A small storefront: catalogue, cart, checkout, payment and confirmation.
Payments go through a mocked provider, so no card is ever charged.

Vite + React + TypeScript, plain CSS, no backend.

## Run it

```bash
npm install
npm run dev
```

Opens on http://localhost:5173.

## Monitoring

HeronSignal is installed with the snippet in [`index.html`](index.html). It
records page performance, frontend errors and session replays with no further
code.

The store also reports its own journey through
[`src/lib/heronsignal.ts`](src/lib/heronsignal.ts):

| Event | Fires |
| ----- | ----- |
| `cart_item_added` | Add to cart on the catalogue |
| `checkout_started` | Pay is submitted |
| `checkout_completed` | Payment succeeded, before the confirmation page |
| `checkout_payment_failed` | Payment failed, with `reason` `card_declined` or `unexpected_error` |

## Deploy

Every push to `main` publishes the store to GitHub Pages.
