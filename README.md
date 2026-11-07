# Zampred Solutions website (React + Vite)

    npm install
    npm run dev      -> http://localhost:5173
    npm run build    -> dist/

Content: src/lib/data.js (services, projects, industries, email, WhatsApp number, testimonials)
Design: src/index.css | Pages: src/pages/* | Routes: src/App.jsx
Routes: /, /about, /services, /services/:slug, /portfolio, /industries, /contact

Deploy: it's a single-page app, so the host must serve index.html for all routes
(public/_redirects for Netlify and vercel.json for Vercel are included).
