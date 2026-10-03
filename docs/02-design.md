# Etappe 4 – Design

**Leitidee:** *Der Faden ist die Marke.* Ein einziges auffälliges Element – der Name, der sich live „einstickt" (Startseite). Alles andere bleibt ruhig.

## Token-System (`src/styles/tokens.css`)

| Token | Hex | Einsatz |
|---|---|---|
| Garnblau | `#2A3770` | Headlines, Buttons, Footer |
| Leinen | `#F3F5F8` | Hintergrund |
| Fadenrot | `#E2474B` | **Nur** Stiche/Personalisierung – nie Deko |
| Salbei | `#A9C4B0` | Reserve für Zweitflächen |
| Graphit | `#23262E` | Fließtext |

Schriften: **Young Serif** (Headlines, freundlich-handwerklich) + **Figtree** (Text, gut lesbar).

## Aufgaben
1. **Logo:** Wortmarke „Lina & Luksen" in Young Serif reicht für den Start. Falls Logo vorhanden: als SVG nach `public/`, in `Base.astro` einsetzen.
2. **Farben prüfen:** Passen sie zu euren Produkten/Amazon-Fotos? Nur `tokens.css` ändern – wirkt überall.
3. **Fotos – der größte Hebel:** einheitlicher Hintergrund, Tageslicht, quadratisch 1200×1200 px, als `.webp`. Pro Produkt: 1 Freisteller + 1 Detail (Stich/Gravur nah) + 1 in Benutzung.
4. **Texte:** Konkret statt blumig. „Bestickt mit dem Namen deines Kindes" schlägt „Einzigartige Momente".
5. **Mobil testen:** 70 %+ der Käufe kommen vom Handy. Browser-Devtools → Handy-Ansicht.

**Fertig, wenn:** Startseite auf dem Handy so aussieht, dass ihr sie selbst teilen würdet.
