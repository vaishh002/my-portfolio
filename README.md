# Vaishnavi Shinde — Portfolio

A premium, fully responsive React portfolio. Dark editorial aesthetic with warm-gold accents, Fraunces display type, and smooth scroll-reveal animations.

---

## Quick Start

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Project Structure

```
portfolio/
├── index.html                  ← Vite entry point (fonts loaded here)
├── vite.config.js              ← Vite + React plugin
├── package.json
│
└── src/
    ├── main.jsx                ← React root mount
    ├── App.jsx                 ← Shell: imports all sections + hooks
    ├── index.css               ← Global tokens, reset, utilities, animations
    │
    ├── hooks/
    │   ├── useScrollReveal.js  ← IntersectionObserver for .reveal classes
    │   └── useScrollProgress.js← Top progress bar
    │
    └── components/
        ├── Navbar.jsx + .css   ← Fixed nav, mobile hamburger menu
        ├── Hero.jsx + .css     ← Canvas particles, code snippet deco, stats
        ├── About.jsx + .css    ← Identity card + bio text
        ├── Skills.jsx + .css   ← 4-category skills grid with color coding
        ├── Experience.jsx + .css← Timeline with animated dots
        ├── Projects.jsx + .css ← Featured row + full project grid
        ├── Education.jsx + .css← Edu cards + certification
        ├── Contact.jsx + .css  ← Info + working contact form
        └── Footer.jsx + .css   ← Footer with links
```

---

## Where to Put Things in React

| What | Where |
|---|---|
| Global CSS variables / tokens | `src/index.css` |
| Page sections | `src/components/SectionName.jsx` |
| Section-specific styles | `src/components/SectionName.css` |
| Custom React hooks | `src/hooks/` |
| Static images / icons | `public/` or `src/assets/` |
| Static data (projects list etc.) | Inside the component or `src/data/` |
| Third-party integrations | `src/hooks/` or `src/utils/` |

---

## Customization Cheatsheet

### Update your info
- **Name / contacts / social links** → `src/components/About.jsx`, `src/components/Contact.jsx`, `src/components/Footer.jsx`
- **Projects** → `src/components/Projects.jsx` — the `projects` array at the top
- **Experience** → `src/components/Experience.jsx` — the `experiences` array
- **Skills** → `src/components/Skills.jsx` — the `categories` array

### Change the color palette
Everything flows from CSS variables in `src/index.css`:
```css
--gold:   #ffd678;   /* primary accent */
--mint:   #62f4c8;   /* secondary / live badge */
--rose:   #ff6b8a;   /* highlight / internship badge */
```

### Wire up the contact form
In `src/components/Contact.jsx`, replace the `handleSubmit` function:

**Option A — EmailJS (free, no backend)**
```bash
npm install emailjs-com
```
```js
import emailjs from 'emailjs-com'
const handleSubmit = e => {
  e.preventDefault()
  emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
    .then(() => setSent(true))
}
```

**Option B — Formspree**
```jsx
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Deploy to Vercel
```bash
npm run build
# Push to GitHub, then import repo in vercel.com
# Framework: Vite | Build: npm run build | Output: dist
```

---

## Design System

| Token | Value | Use |
|---|---|---|
| `--font-display` | Fraunces (serif) | Headings, numbers |
| `--font-body` | DM Sans | Body, labels, buttons |
| `--bg` | `#080810` | Page background |
| `--surface` | `#10101e` | Cards |
| `--gold` | `#ffd678` | Primary accent |
| `--mint` | `#62f4c8` | Live status, availability |

Scroll reveal: add class `reveal`, `reveal-left`, or `reveal-right` to any element. Add `d1`–`d5` for staggered delays.
