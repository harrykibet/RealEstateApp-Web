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
src/
├── assets/ # Static files: CSS, images, etc.
├── core/
│ ├── data/ # Data repositories, Firebase Firestore access
│ ├── domain/ # Domain models and logic
│ ├── network/ # Firebase initialization, API utilities
│ └── utils/ # Reusable helpers and validators
├── features/
│ ├── auth/ # Login, signup, password recovery
│ ├── properties/ # List, detail, create/edit properties
│ ├── dashboard/ # User/agent-specific dashboard components
│ └── search/ # Search and filter features
├── components/ # Shared UI components (e.g., buttons, cards)
├── pages/ # Top-level routes
├── App.js # Main App entry
└── index.js # React DOM entry point


