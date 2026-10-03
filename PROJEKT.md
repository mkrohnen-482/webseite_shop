# Projekt: Lina & Luksen – eigener Shop

> Arbeitsdokument. Status, Entscheidungen, nächste Schritte. Bei jeder Session zuerst lesen.

## Ziel
Eigener Shop neben Amazon. **Marke besitzen. Kunden besitzen. Provision sparen.**
Erfolg = erste 10 Bestellungen über den eigenen Shop, Ø-Marge ≥ Amazon-Marge.

## Entscheidungen

| Thema | Entscheidung | Begründung |
|---|---|---|
| Framework | Astro 5, statische Seiten | Schnell, SEO-stark, Produkte als Markdown |
| Hosting | **Vercel** | Deploy bei jedem Push, Vorschau-URL je Branch, Server-Funktion für Checkout |
| Checkout | **Stripe Checkout über eigene API** (`/api/checkout`) | Bis zu 8 Personalisierungsoptionen; Preis wird serverseitig geprüft |
| Personalisierung | Eigenes Formular auf der Produktseite | Stripe Payment Links können nur 3 Felder – zu wenig |
| Rechtstexte | Abo-Service | Abmahnschutz |

> Hinweis Vercel: Der kostenlose Hobby-Plan ist laut Vercel-Bedingungen für nicht-kommerzielle Nutzung gedacht. Für den Shop **Pro-Plan** einplanen oder vorab prüfen.

## Ordnerstruktur

```
lina-und-luksen/
├── PROJEKT.md               ← dieses Dokument
├── README.md                ← Technik-Kurzinfo
├── _ablage/                 ← DEIN Rohmaterial (geht nicht live)
│   ├── amazon/              ← Excel-Export aus Seller Central
│   ├── logo/
│   ├── fotos/
│   ├── texte/
│   └── recht/
├── docs/                    ← Anleitung je Etappe
├── public/images/           ← fertige, optimierte Produktfotos
└── src/
    ├── content/products/    ← ein Produkt = eine .md-Datei
    ├── components/          ← StitchedName, ProductCard, PersonalizeForm
    ├── pages/               ← Seiten + api/checkout.ts
    └── styles/tokens.css    ← Farben, Schriften, Abstände
```

## Personalisierung – so wird ein Produkt beschrieben

Bis zu **8 Optionen** pro Produkt. Feldtypen: `text`, `textarea`, `select`, `date`.

```yaml
options:
  - id: vorname          # technischer Schlüssel
    label: Vorname       # sieht der Kunde
    type: text
    maxLength: 12
  - id: garnfarbe
    label: Garnfarbe
    type: select
    choices: [Rosa, Hellblau, Mint]
  - id: geburtsdatum
    label: Geburtsdatum
    type: date
    required: false
    hint: Wird unter dem Namen gestickt.
```

Ablauf: Kunde füllt aus → Server prüft Pflichtfelder, Länge, Auswahl, Preis → Stripe zeigt dem Kunden seine Angaben im Checkout → alle Optionen stehen als Metadaten an der Zahlung im Stripe-Dashboard.

## Etappen

- [x] 0 · Gerüst steht (Astro, Design-Tokens, Startseite, Produktseite mit Formular, Checkout-API)
- [ ] 1 · Setup – GitHub + Vercel verbunden, Seite online → `docs/01-setup.md`
- [ ] 2 · Material ablegen – Amazon-Export, Logo, Fotos in `_ablage/`
- [ ] 3 · Produkte – Import aus Amazon-Export, Optionen je Produkt prüfen → `docs/03-produkte.md`
- [ ] 4 · Design – Logo, Farben final, Fotos → `docs/02-design.md`
- [ ] 5 · Checkout – Stripe-Konto, Testkauf mit 8 Optionen → `docs/04-checkout.md`
- [ ] 6 · Recht – Rechtstexte, Fonts lokal → `docs/05-recht.md`
- [ ] 7 · Launch – Domain, Live-Schlüssel, erste Bestellung → `docs/06-launch.md`

## Nächster Schritt
**Amazon-Export + Logo in `_ablage/` legen und hochladen.** Dann baue ich den Import: aus jeder Zeile wird eine Produktdatei inkl. Optionen.

## Offene Fragen
- Welche Optionen haben die Produkte konkret? Stehen meist nicht im Standard-Export → Amazon-Custom-Vorlagen als Screenshot oder Liste mitschicken.
- Aufpreise je Option (z. B. Motiv +3 €)? Aktuell nicht eingebaut, machbar.
- Versand nur DE oder auch AT/CH?
- Warenkorb mit mehreren Artikeln nötig? Aktuell 1 Artikel pro Kauf.

## Log
| Datum | Was |
|---|---|
| 2026-10-03 | Gerüst erstellt, Wechsel GitHub Pages → Vercel, Personalisierung auf 8 Optionen erweitert |
