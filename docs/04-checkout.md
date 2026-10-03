# Etappe 5 – Checkout (Stripe)

**Ablauf:** Kunde füllt bis zu 8 Optionen aus → `/api/checkout` prüft Pflichtfelder, Länge, Auswahl und holt den Preis aus der Produktdatei → Stripe Checkout zeigt Produkt + Personalisierung → Zahlung → `/danke`.

1. Stripe-Konto: Firma, Bankverbindung, USt-IdNr.
2. Zahlungsarten im Dashboard aktivieren (Karte, Apple/Google Pay, weitere nach Verfügbarkeit).
3. Testschlüssel `sk_test_…` in Vercel als `STRIPE_SECRET_KEY`.
4. Versand: `SHIPPING_CENTS`, optional `FREE_SHIPPING_FROM_CENTS`.
5. Testkauf mit Karte `4242 4242 4242 4242`. Prüfen: Stripe → Zahlungen → Zahlung öffnen → **Metadaten** enthalten alle Optionen.
6. Benachrichtigung: Stripe → Einstellungen → E-Mail bei erfolgreicher Zahlung.

**Ausbaustufen bei Bedarf:** Aufpreise je Option · Warenkorb · Webhook, der eine Fertigungs-Mail mit allen Optionen schickt.

**Rechtlich prüfen lassen:** Beschriftung des Zahlungsbuttons (§ 312j BGB).
