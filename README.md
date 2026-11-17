# Salon Gerente - Salon Appointment Booking UI

A modern web application for salon appointment scheduling and management built with React 18, Material-UI (MUI v5), Bootstrap 5, and Framer Motion.

---

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Running Locally](#running-locally)
- [Running Tests](#running-tests)
- [Building for Production](#building-for-production)
- [Architecture & Directory Structure](#architecture--directory-structure)
- [API Integration](#api-integration)
- [CI/CD Pipeline](#cicd-pipeline)

---

## Overview

**Salon Gerente** allows customers to discover salon services, select stylists/specialists, choose appointment dates, and submit booking requests seamlessly. The platform also includes an administrative dashboard for managing registered users, service offerings, and appointment statuses.

### Key Features
- **Client Booking Flow**: Multi-step booking wizard guiding users through stylist selection, styling service choice, date selection, and appointment confirmation.
- **Authentication**: User registration and login flows with JWT token management and role-based views.
- **Admin Dashboard**: Panel for managing services, viewing client records, updating staff assignments, and promoting user privileges.
- **Responsive UI**: Built with MUI v5 components and Bootstrap for smooth mobile and desktop browsing.

---

## Prerequisites

- **Node.js**: `v18.x` or higher (tested on Node 18, 20, 24)
- **npm**: `v8.x` or higher

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/mungaiDaniel/Salon-Appointment-UI.git
cd Salon-Appointment-UI
npm install --legacy-peer-deps
```

For reproducible clean installs in CI environments:

```bash
npm ci --legacy-peer-deps
```

---

## Environment Configuration

The application uses environment variables prefixed with `REACT_APP_` for backend connectivity.

1. Copy the sample environment file:
   ```bash
   cp .env.example .env
   ```

2. Available environment variables:

| Variable | Description | Default / Fallback |
| :--- | :--- | :--- |
| `REACT_APP_API_URL` | Base URL for backend REST API endpoints | `https://salon-appointment-api.onrender.com/api/v1` |

---

## Running Locally

Start the development server:

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) automatically in your browser. The page reloads on code edits.

---

## Running Tests

Run unit and integration test suites:

```bash
npm test -- --watchAll=false
```

Run tests with test coverage reporting:

```bash
npm test -- --coverage --watchAll=false
```

---

## Building for Production

Create an optimized production bundle in the `build/` directory:

```bash
npm run build
```

---

## Architecture & Directory Structure

```text
src/
├── components/
│   ├── admin/               # Admin panel (Users, Bookings, Services, Staff)
│   ├── auth/                # Authentication forms (LoginForm, RegisterForm)
│   ├── BookAppointment/    # Multi-step booking wizard (Master, Service, Date, Summary)
│   ├── home/                # Landing page hero and imagery
│   ├── styles/              # SCSS style definitions
│   ├── Footer.js            # Footer component
│   ├── MainContent.js       # Main landing page coordinator
│   └── NavBar.js            # Navigation bar with responsive menu & auth state
├── httpClient.js            # Centralized Axios instance with environment fallback
├── App.js                   # Top-level routing & layout structure
├── index.js                 # React DOM entrypoint & Bootstrap loading
└── setupTests.js            # Test setup and jest-dom matchers
```

---

## API Integration

All API calls are centralized through [src/httpClient.js](src/httpClient.js). This guarantees:
- Base URL is configured dynamically via `process.env.REACT_APP_API_URL` with a fallback to the remote service.
- Standardized request credentials (`withCredentials: true`).
- Relative endpoint paths (`/login`, `/users`, `/booking`, `/employees`, `/stylings`).

---

## CI/CD Pipeline

Automated checks run on every push and pull request via GitHub Actions ([.github/workflows/ci.yml](.github/workflows/ci.yml)):
- **Lint**: Validates JavaScript/JSX syntax with `npx eslint src --max-warnings=0`.
- **Test**: Executes test suites with full coverage reporting.
- **Build**: Compiles production bundle to prevent regressions.
- **Dependabot**: Automated weekly dependency checks configured in [.github/dependabot.yml](.github/dependabot.yml).
