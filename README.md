# 🏡 RealEstate Web App

A high-performance, modular, Firebase-powered real estate web application. This project complements the Android and iOS clients, allowing users to search, list, and manage properties through a responsive and secure web experience.

---

## 🚀 Features

- 🔐 Firebase Authentication (Email/Password, Google)
- 📄 Property listing with image galleries
- 🔍 Search and filtering
- 📍 Map integration (Google Maps API)git 
- 🏘️ Agent and user dashboards
- 📊 Analytics integration (Firebase / Google)
- 🎨 Modular UI components (React + CSS Modules)
- 🧱 Clean architecture with domain separation
- 🌐 Responsive design (mobile-first)

---

## 📁 Project Structure

```bash
src/
├── assets/              # Static files: CSS, images, fonts
├── core/
│   ├── data/            # Data sources & Firebase access
│   ├── domain/          # Business models & core logic
│   ├── network/         # Firebase config & external API clients
│   └── utils/           # General utilities and helpers
├── features/
│   ├── auth/            # Login, registration, password reset
│   ├── properties/      # Property listing, details, create/edit
│   ├── dashboard/       # Agent/user dashboards
│   └── search/          # Filters, map view, search results
├── components/          # Reusable UI elements (e.g., Button, Modal)
├── pages/               # Top-level pages with routing
├── App.js               # Main application component
└── index.js             # React DOM entry point
```



