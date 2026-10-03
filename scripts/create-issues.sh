#!/usr/bin/env bash
# Legt die Etappen als GitHub-Issues an. Voraussetzung: gh auth login
set -euo pipefail
create() { gh issue create --title "$1" --body "Siehe PROJEKT.md / $2" --label etappe >/dev/null && echo "✓ $1"; }
gh label create etappe --color 2A3770 --force >/dev/null
create "1 · Setup – GitHub + Vercel"            "docs/01-setup.md"
create "2 · Material in _ablage/ legen"         "_ablage/README.md"
create "3 · Produkte – Import aus Amazon"       "docs/03-produkte.md"
create "4 · Design – Logo, Farben, Fotos"       "docs/02-design.md"
create "5 · Checkout – Stripe, 8 Optionen"      "docs/04-checkout.md"
create "6 · Recht – abmahnsicher"               "docs/05-recht.md"
create "7 · Launch – Domain & erste Bestellung" "docs/06-launch.md"
