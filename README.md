# Psychotree 🌳 — Psychology Tips Web App

**Tagline:** Better Mind • Better You

Psychotree is a responsive, dark black + red neumorphism-inspired psychology and personal-growth website. It helps visitors explore self-awareness, confidence, communication, relationships, boundaries, habits, emotional skills, and internet archetypes such as “sigma male” and “sigma girl.”

## Features

- Dark black/red neo-neumorphic interface with glowing red accents.
- Responsive layout for desktop, tablet, and mobile.
- 60+ starter categories with an expandable category browser.
- Search tips by topic or phrase.
- Endless-style browsing: each click creates another batch of varied tips.
- Random tip button and “Infinite Tips” controls.
- Save/bookmark, like, and share tips.
- Saved tips stored locally in the browser using `localStorage`.
- Sort by newest mix, quick reads, or action-focused.
- No backend, accounts, build tools, or API keys required.

## Run it

### Open directly
Extract the ZIP and open `index.html` in a modern browser.

### Local server (optional)
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a repository, for example `Psychotree`.
2. Upload `index.html`, `styles.css`, `app.js`, `README.md`, and `LICENSE` to the repository root.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, choose your main branch and `/ (root)`, and save.
5. Wait for GitHub to provide the public site URL.

## Project structure

```text
Psychotree/
├── index.html
├── styles.css
├── app.js
├── README.md
├── LICENSE
└── .gitignore
```

## Does it generate tips by itself?

**It generates additional variations locally** when visitors click “Infinite Tips” or “Show more tips.” It combines a curated starter set, topic categories, and reusable wording patterns. This creates an endless-style browsing feed, but it is not an infinite library of independently researched psychology facts.

For truly dynamic AI-written advice, connect a model through a **server-side backend**. Do not put secret API keys in `app.js` or other browser-side files. An AI version should use rate limits, moderation, privacy controls, and safeguards against medical claims or manipulative advice.

## Psychology and safety

- General educational content only; not diagnosis or treatment.
- “Alpha” and “sigma” are internet archetypes, not scientifically validated personality diagnoses.
- No single body-language cue reliably proves attraction, dishonesty, or someone's intentions.
- The app encourages consent, clear communication, empathy, and healthy boundaries—not coercion or mind games.
- For personal mental-health concerns, consult a qualified professional or trusted support person.

## Customize

- Add categories in the `categories` array in `app.js`.
- Add reviewed tip content to the `seeds` array.
- Adjust the visual system in `styles.css`.
- Update page metadata and text in `index.html`.

## Accuracy note

Psychotree is a self-reflection tool, not a validated psychological assessment. Treat tips as prompts rather than universal laws. Before publishing as an evidence-based resource, review claims against reputable research and cite relevant sources.

## License

MIT. See [LICENSE](LICENSE).
