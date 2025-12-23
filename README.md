# Hero IO

A responsive single-page **App Store UI** where users can browse apps, search and sort by downloads, see app details with a **Recharts** rating chart, and **install/uninstall** apps using **localStorage**.

## Live Features

- Responsive layout (mobile → desktop)
- Header with logo + active route navigation (Home / Apps / Installation)
- Home page banner with App Store / Play Store buttons
- Stats section + Top Apps section (8 apps)
- All Apps page:
  - Live, case-insensitive search by title
  - “No App Found” state
  - Sort by downloads (High-Low / Low-High)
- App Details page:
  - Install button (becomes **Installed** + disabled)
  - Success toast after install
  - Recharts rating distribution chart
  - App Not Found message if invalid id
- My Installation page:
  - Shows installed apps from localStorage
  - Uninstall removes from UI + localStorage + toast
- Custom 404 page and SPA route reload support

## Technologies

- React + Vite
- React Router DOM
- Tailwind CSS
- Recharts
- React Hot Toast

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment (Netlify / Cloudflare Pages / Vercel)

So reloading any route should not show a 404.

