# Etappe 1 – Setup (GitHub + Vercel)

1. **Werkzeuge:** Node.js LTS, Git, VS Code.
2. **GitHub-Repo** `lina-und-luksen` anlegen (privat ist ok) und Code pushen:
   ```bash
   git init && git add . && git commit -m "Initial scaffold"
   git branch -M main
   git remote add origin https://github.com/<user>/lina-und-luksen.git
   git push -u origin main
   ```
3. **Vercel:** vercel.com → mit GitHub anmelden → *Add New Project* → Repo wählen. Astro wird erkannt. *Deploy*.
4. **Umgebungsvariablen** (Vercel → Project → Settings → Environment Variables): Werte aus `.env.example`, zunächst mit Stripe-**Test**schlüssel.
5. Ab jetzt: Push auf `main` = live; jeder andere Branch = eigene Vorschau-URL.
6. Optional: `bash scripts/create-issues.sh` legt die Etappen als GitHub-Issues an (`gh auth login` vorher).

**Fertig, wenn:** Seite unter `*.vercel.app` erreichbar.
