# Etappe 6 – Recht (Pflicht vor Launch)

Ein Shop ohne saubere Rechtstexte ist eine Einladung zur Abmahnung. **Nicht selbst schreiben.**

1. **Rechtstexte-Abo** buchen (z. B. IT-Recht Kanzlei, Händlerbund, Trusted Shops). Liefert Impressum, Datenschutz, AGB, Widerrufsbelehrung, Update-Service.
2. Texte in `src/pages/impressum.astro`, `datenschutz.astro`, `agb.astro`, `widerruf.astro`, `versand.astro` einfügen.
3. **Personalisierte Ware:** Widerrufsrecht ausgeschlossen (§ 312g Abs. 2 Nr. 1 BGB) – steht bereits auf jeder Produktseite, muss zu den AGB passen.
4. **Preisangaben:** „inkl. MwSt., zzgl. Versand" + Lieferzeit – ist im Template eingebaut.
5. **Google Fonts lokal hosten** (DSGVO): Schriften über google-webfonts-helper herunterladen, nach `public/fonts/`, `<link>` in `Base.astro` durch `@font-face` ersetzen.
6. **Keine Cookies/Tracking** zum Start → kein Cookie-Banner nötig. Wer später Analytics will: cookieloses Tool (z. B. Plausible).
7. **Verpackungsregister LUCID:** Ist für Amazon-Versand bereits erledigt – gilt auch für den eigenen Shop, nur prüfen.
8. Steuerliche Fragen (Erlöse aus zweitem Kanal, Stripe-Gebühren) mit der Steuerberatung abstimmen.

**Fertig, wenn:** Alle fünf Rechtsseiten gefüllt, Fonts lokal.
