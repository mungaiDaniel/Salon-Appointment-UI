# Salon Appointment Booking - Frontend

A React single-page app for booking salon appointments, with an admin area for managing users, services and stylists. It talks to a Flask REST API, and ships with a **Demo Mode** that runs entirely in the browser with fake data, so it can be deployed and explored without a backend.

- **Live Demo:** _add your deployed URL here_
- **Screenshot:** _add `docs/screenshot.png` and link it here_

![Screenshot placeholder](docs/screenshot.png)

## Features

- Register / log in (JWT stored client-side, role-aware navigation)
- Multi-step booking flow: choose stylist, service, date, review and submit
- Admin pages: registered users (promote to admin / super admin), services (add + list), stylists, bookings
- Responsive UI (MUI v5 + Bootstrap 5), animated forms (Framer Motion)

## Demo Mode

Set `REACT_APP_DEMO_MODE=true` and the app replaces its HTTP client with an in-memory mock API (`src/mocks/`). No backend and no network calls are needed.

- Seed data is clearly fake (Demo Stylist A, `@example.com` emails, 555-01xx phone numbers).
- Create / edit / delete work, but state lives in memory and resets on reload.
- A "Demo mode" banner is shown, and the login page has **Try Demo** and **Try Demo as Admin** buttons (any password works for `demo@example.com` and `admin-demo@example.com`).
- With the flag off, the app uses the real axios client unchanged.

Mocked endpoints: `POST /login`, `POST /users`, `GET /users`, `GET /employees`, `GET /employee/:id`, `GET /employee_service/:id`, `GET|POST /stylings`, `PUT|DELETE /stylings/:id`, `POST /booking`, `GET /booking`, `PUT /admin/:id`, `PUT /super_admin/:id`.

## Environment variables

See `.env.example`.

| Variable | Default | Purpose |
| --- | --- | --- |
| `REACT_APP_API_URL` | `http://localhost:5000/api/v1` | Backend API base URL (ignored in demo mode) |
| `REACT_APP_DEMO_MODE` | unset | `true` enables the mock API and demo UI |

## Scripts

| Command | What it does |
| --- | --- |
| `npm install --legacy-peer-deps` | Install dependencies |
| `npm start` | Dev server against the real backend |
| `npm run start:demo` | Dev server in demo mode |
| `npm run build` | Production build |
| `npm run build:demo` | Production build with demo mode on (cross-platform) |
| `npm test` | Jest + React Testing Library |
| `npx eslint src --max-warnings=0` | Lint (as run in CI) |

## Running with the real backend

1. Start the Flask API from this repo's `backend/` folder (default `http://localhost:5000`).
2. `cp .env.example .env.local` and set `REACT_APP_API_URL` if needed.
3. `npm install --legacy-peer-deps && npm start`

## Running in demo mode

```bash
npm install --legacy-peer-deps
npm run start:demo
```

## Deploy to Vercel

1. Import the repo in Vercel and set the **Root Directory** to `frontend`.
2. `vercel.json` already sets the build command, output directory (`build`), the SPA rewrite to `/index.html`, and `REACT_APP_DEMO_MODE=true`.
3. Deploy. To point a deployment at a real API instead, set `REACT_APP_DEMO_MODE=false` and `REACT_APP_API_URL` in the Vercel project's environment variables.

`public/_redirects` provides the same SPA fallback for Netlify.

## Tech stack

React 18, React Router 6, MUI v5, Bootstrap 5 / React-Bootstrap, Framer Motion, axios, Create React App 5, Jest + React Testing Library, GitHub Actions CI (lint, test, build).

## Author

Daniel Mungai - [GitHub](https://github.com/mungaiDaniel) - [LinkedIn](https://linkedin.com/in/daniel-mungai-7a52451b8)
