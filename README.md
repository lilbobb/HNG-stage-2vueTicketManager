# JetGO - Vue Implementation

A modern, Jira-inspired **ticket management system** built with **Vue 3**, **TypeScript**, and **Tailwind CSS**.  
JetGO offers an intuitive, responsive interface for managing support tickets, tracking progress, and organizing team workflows efficiently.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vue](https://img.shields.io/badge/Vue-3.x-42b883.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg)
![Vite](https://img.shields.io/badge/Vite-5.0-646cff.svg)

---

##  Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage Guide](#usage-guide)
- [Authentication](#authentication)
- [Ticket Management](#ticket-management)
- [Design System](#design-system)
- [Accessibility](#accessibility)
- [Known Issues](#known-issues)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

---

##  Overview

**JetGO** is a full-featured ticket management platform designed to streamline support and project tracking.  
This **Vue.js** implementation is part of a multi-framework initiative (React, Twig, and Vue versions) showcasing consistent design and architecture across ecosystems.

### 🌐 Live Demo
👉 [https://jetgoticket.netlify.app/](https://jetgoticket.netlify.app/)

---

##  Features

### Core Functionality
-  **Authentication System** — Login, Signup, Logout with local session handling
-  **Dashboard Overview** — Total, Open, In Progress, and Closed ticket stats
-  **Full CRUD** — Create, Read, Update, and Delete tickets
-  **Validation** — Real-time form validation with clear feedback
-  **Toast Notifications** — Success/error toasts for all actions
-  **Protected Routes** — Only accessible when logged in
-  **Responsive Design** — Mobile-first UI that adapts seamlessly
-  **Accessibility Friendly** — Keyboard navigation & proper ARIA labeling

### Design Highlights
-  Jira-inspired blue theme with modern gradients
-  Hero section with wave background and blur effects
-  Reusable UI components (buttons, inputs, modals, etc.)
-  Clean typography and structured layout
-  Pinia state management for simplicity and performance

---

##  Tech Stack

### Frontend Framework & Tools
- **Vue 3 (Composition API)** — Modern, reactive UI framework
- **TypeScript 5.x** — Type safety and IDE auto-completion
- **Vite 5.x** — Lightning-fast dev server and build tool

### Routing & State
- **Vue Router 4** — SPA navigation and route guards
- **Pinia** — Lightweight, modern state management

### Styling & Icons
- **Tailwind CSS 3.4** — Utility-first CSS framework
- **Lucide Vue** — Clean, consistent icon library

### Utilities
- **Vue TSC** — TypeScript type checking
- **ESLint + Prettier** — Code linting and formatting

---

## 🗂️ Project Structure

jetgo-vue/
├── public/
│ └── index.html # Base HTML\
├── src/
│ ├── assets/ # Images, icons\
│ ├── components/
│ │ ├── auth/ # Login & Signup\
│ │ ├── dashboard/ # Dashboard components\
│ │ ├── landing/ # Landing page sections\
│ │ ├── layout/ # Navigation & Footer\
│ │ ├── tickets/ # Ticket management\
│ │ └── ui/ # Reusable UI components\
│ ├── composables/ # Custom hooks (useAuth, useToast, etc.)\
│ ├── pages/ # Routed pages\
│ ├── router/ # Vue Router setup\
│ ├── stores/ # Pinia stores (auth, tickets)\
│ ├── types/ # TypeScript interfaces\
│ ├── utils/ # Helper utilities\
│ ├── App.vue # Root component\
│ ├── main.ts # App entry point\
│ └── style.css # Global styles\
├── tailwind.config.js\
├── vite.config.ts\
├── tsconfig.json\
├── package.json\
└── README.md\


---

## 🧾 Prerequisites

Ensure you have the following installed before running JetGO:

| Tool | Version | Link |
|------|----------|------|
| **Node.js** | ≥16.0 | [Download](https://nodejs.org/) |
| **npm / yarn** | ≥8.0 / ≥1.22 | [Install](https://www.npmjs.com/) |
| **Git** | Latest | [Install](https://git-scm.com/) |

Verify your setup:
```bash
node --version
npm --version

#  Installation
1. Clone the Repository
git clone <repository-url>
cd jetgo-vue

# Install Dependencies

npm install

# Start the Development Server
npm run dev

# Open in your browser:
http://localhost:5173

# Build for Production
npm run build

# Preview the Production Build
npm run preview

## Usage Guide
1 # Run the App
npm run dev
2 # Open Browser
Navigate to http://localhost:5173

3 # Sign Up
Create a new account (stored in localStorage)

4 # Log In
Access your personal dashboard

5 # Create Tickets
Add, edit, or delete tickets directly from the interface

## Authentication

JetGO uses localStorage-based session handling for demo purposes.

ticketapp_users      // All registered users
ticketapp_session    // Current user session

## Flow

User signs up → new user object stored

Login → validates credentials → session token created

Logout → clears session and redirects to login

# Protected Routes

| Route               | Component        | Access    |
| ------------------- | ---------------- | --------- |
| `/dashboard`        | DashboardView    | Protected |
| `/tickets`          | TicketManagement | Protected |
| `/login`, `/signup` | AuthPage         | Public    |


Ticket Management
Create

Fill form (title, status, description)

Inline validation

Toast confirmation

Read

Tickets displayed in cards with:

Status badge (color-coded)

Priority level

Created date

Update

Edit inline or via modal form

Changes saved immediately with toast feedback

Delete

Confirmation modal appears before deletion

Toast confirmation after removal

## Validation Rules

| Field       | Required | Rule                                   |
| ----------- | -------- | -------------------------------------- |
| Title       | ✅        | Minimum 3 characters                   |
| Status      | ✅        | One of `open`, `in_progress`, `closed` |
| Description | ❌        | Max 500 chars                          |
| Priority    | ❌        | Optional field                         |

## Design System

# colors

| Role        | Tailwind Color | Example        |
| ----------- | -------------- | -------------- |
| **Primary** | `blue-600`     | Main accent    |
| **Success** | `green-600`    | Open tickets   |
| **Warning** | `yellow-500`   | In-progress    |
| **Neutral** | `gray-500`     | Closed tickets |
| **Error**   | `red-600`      | Delete, errors |

## Components

Cards: rounded-xl shadow-md hover:shadow-lg
Buttons: Gradient backgrounds, focus rings
Toast: Animated notifications
Modal: Centered overlays with smooth transitions

# Layout
Max width: 1440px
Centered container
Wave hero background
Decorative blur circles
Responsive grid for tickets

## Accessibility

JetGO follows WCAG 2.1 AA best practices.

## Implemented Features

✅ Semantic HTML
✅ ARIA labels for icons
✅ Keyboard navigable components
✅ Visible focus rings
✅ Proper color contrast (4.5:1+)
✅ Screen reader-friendly toasts and alerts

Tested With

NVDA (Windows)

VoiceOver (macOS)

Chrome Lighthouse Audit

⚠️ Known Issues
Issue	Description
Mobile Safari	Minor input styling inconsistencies
Offline Mode	No offline persistence
IE11	Not supported (ES6+ required)
No real backend	Uses localStorage for demo purposes only
🌍 Browser Support
Browser	Supported
✅ Chrome 90+	Full
✅ Firefox 88+	Full
✅ Edge 90+	Full
✅ Safari 14+	Full
⚠️ IE / Legacy	Not supported
🤝 Contributing

# Contributions are welcome!

Fork the repository
Create a branch (feature/new-feature)
Commit your changes
Push to the branch
Open a Pull Request

# License

This project is licensed under the MIT License — see the LICENSE
 file for details.

Note: This is a demonstration project for educational and portfolio purposes.

 Team & Acknowledgments

Developer: [Your Name]
Design Inspiration: Atlassian Jira
Framework: Vue 3 with TypeScript
Icons: Lucide Vue
UI: Tailwind CSS

 Submission Checklist

✅ Landing page with wave and blur design
✅ Authentication (login/signup)
✅ Protected dashboard
✅ Ticket CRUD operations
✅ Real-time validation and toasts
✅ Responsive across all screens
✅ Accessible components
✅ Clean UI and UX
✅ Complete documentation