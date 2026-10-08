# Narayan Kumar Jha — Portfolio Suite

> **Creative Developer & Data Scientist**  
> Undergrad combining foundational Computer Science Engineering paradigms (B.Tech at BPPIMT) with specialized predictive analytics, linear algebra, and data logic (BS in Data Science at IIT Madras).

---

## 📁 Organized Project Structure

```
Narayan.nkj/
├── assets/
│   └── images/               # High-fidelity project artworks & media assets
│       ├── 1.jpeg, 2.jpeg, 3.jpeg, 3.jpg, 4.jpeg
│       └── A.jpeg through I.jpeg
├── projects/                 # Sub-application portfolios
│   ├── vanguard.html         # Project Alpha (Luxury Editorial Agency)
│   ├── apex.html             # Project Beta (Interactive React Parallax Matrix)
│   └── ather.html            # Project Gamma (Cream & Particle Glassmorphism)
├── .gitignore                # Clean Git exclusions
├── index.html                # Master Hub with 3D Three.js Interactive Globe
├── package.json              # Project metadata & local dev scripts
├── README.md                 # Complete documentation & deployment guide
└── vercel.json               # Zero-config Vercel routes, clean URLs & CDN caching
```

---

## 🚀 Overview

An interconnected portfolio ecosystem combining four distinct interactive web experiences, optimized for high performance, smooth animations, and zero-configuration deployment on **Vercel**.

| Experience | Route | Technologies | Concept & Highlights |
| :--- | :--- | :--- | :--- |
| **Portfolio Hub** | `/` (`index.html`) | Three.js (r128), Vanilla JS, CSS Glassmorphism | Dark void aesthetic, interactive 3D rotating globe with particle field, HUD overlay, signature preloader, and projects launcher. |
| **Project Alpha : Vanguard** | `/vanguard` (`projects/vanguard.html`) | Vanilla JS, Modern CSS Grid, Editorial Typography | Luxury editorial design, protocol loader, fluid typography (Playfair Display + DM Sans), high-fidelity media grid. |
| **Project Beta : Apex** | `/apex` (`projects/apex.html`) | React 18, Smooth Parallax Physics, CSS Brutalism | Cybernetic boot sequence, multi-threaded 3-tier horizontal scroll matrix, zero-runtime JSX compiling overhead. |
| **Project Gamma : Ather** | `/ather` (`projects/ather.html`) | Canvas 2D API, IntersectionObserver, Vanilla JS | Cream & Charcoal aesthetic, interactive floating stack universe, 2D particle simulation, horizontal sticky scroll. |

---

## ⚡ Performance & Vercel Optimizations

1. **Zero-Configuration Vercel Deployment**:
   - `index.html` configured as root entry point.
   - `vercel.json` provides clean URLs (`/vanguard`, `/apex`, `/ather`, `/projects`) and backwards-compatible routing (`/2.html`, `/3.html`, `/4.html`).
   - Long-term immutable asset caching headers (`Cache-Control: public, max-age=31536000, immutable`) for high Core Web Vitals scores.
   - Strict security headers (`X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`).

2. **Precompiled React Runtime in Apex (`projects/apex.html`)**:
   - Transpiled in-browser Babel dependency into native `React.createElement` calls, saving **~3.5 MB of CDN downloads** and eliminating script evaluation lag.

3. **Core Web Vitals & Image Optimization**:
   - `fetchpriority="high"` configured on initial viewport images for optimal LCP (Largest Contentful Paint).
   - `loading="lazy"` and `decoding="async"` enabled on secondary and below-the-fold media cards.
   - Exact case-matching and asset fallbacks (`3.jpg` & `3.jpeg`) preventing case-sensitivity 404s on Linux hosting servers.

4. **Keyboard Accessibility & Navigation**:
   - Seamless ESC / Terminal shortcut navigation: hitting `Escape` key anywhere immediately returns to the Projects Matrix Hub.

---

## 🛠️ Local Development

To run the project locally without any dependencies:

```bash
# Clone the repository
git clone https://github.com/narayan-nkj/Narayan.nkj.git
cd Narayan.nkj

# Run with any static server:
npx serve .
# Or with Python:
python3 -m http.server 3000
```

Open `http://localhost:3000` in your browser.

---

## ☁️ Deploying to Vercel

1. Log into [vercel.com](https://vercel.com).
2. Click **"Add New..."** -> **"Project"**.
3. Import the GitHub repository **`narayan-nkj/Narayan.nkj`**.
4. Leave all build settings at default (Static site with root directory `./`).
5. Click **"Deploy"**.

---

## 📬 Contact & Connect

- **Portfolio**: [https://narayan-nkj.vercel.app](https://narayan-nkj.vercel.app)
- **GitHub**: [@narayan-nkj](https://github.com/narayan-nkj)
- **Email**: [narayankumarjha9631@gmail.com](mailto:narayankumarjha9631@gmail.com)
- **Phone**: +91 8777623129
- **Location**: Kolkata, India

---

&copy; 2026 Narayan Kumar Jha. All rights reserved.
