# JetGO - Ticket Management System

A modern, Jira-inspired ticket management application built with Vue 3, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Dashboard Overview** - Quick stats and insights into your tickets
- **Ticket Management** - Create, edit, track, and manage tickets efficiently
- **Real-time Analytics** - Visualize ticket status and progress
- **Responsive Design** - Works seamlessly across all devices
- **Modern UI/UX** - Clean, intuitive interface inspired by Atlassian design

## 🛠️ Tech Stack

- **Frontend**: Vue 3, TypeScript, Composition API
- **Styling**: Tailwind CSS
- **Icons**: Lucide Vue
- **Routing**: Vue Router 4
- **State Management**: Pinia
- **Build Tool**: Vite

## 📁 Project Structure
src/
├── components\
│ ├── auth/ # Authentication components\
│ ├── dashboard/ # Dashboard and stats\
│ ├── layout/ # Navigation, Footer\
│ ├── tickets/ # Ticket management\
│ └── ui/ # Reusable UI components\
├── pages/ # Route pages\
├── composables/ # Composable functions\
├── stores/ # State management\
└── router/ # Route configuration\


## 🎯 Key Components

### Core Features
- **Dashboard** - Overview with statistics and quick actions
- **Ticket Management** - Full CRUD operations for tickets
- **Authentication** - Login/Signup with route protection
- **Responsive Layout** - Mobile-first design

### UI Components
- **Button** - Variants: primary, secondary, danger, success, subtle
- **Input** - Form inputs with validation states
- **Toast** - Notification system with multiple types
- **StatCard** - Dashboard statistics cards
- **Modal** - Confirmation dialogs and forms

## 🎨 Design System

### Colors
- **Primary**: Blue-600 (Jira-inspired)
- **Success**: Green-500/600
- **Warning**: Yellow-500/600
- **Danger**: Red-500/600
- **Neutral**: Gray scale for text and backgrounds

### Typography
- Clean, readable fonts with proper hierarchy
- Consistent spacing and sizing

## 🚦 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

/ - Landing page
/login - User authentication
/signup - User registration
/dashboard - Main dashboard (protected)
/tickets - Ticket management (protected)
/about - Company information
/features - Product features
/pricing - Pricing plans
/contact - Contact form
/documentation - User guides
/careers - Job opportunities

 Authentication
Route-based protection

Automatic redirect for authenticated/unauthenticated users

Persistent login state

 Dashboard Features
Total tickets count

Open tickets tracking

In-progress monitoring

Closed tickets overview

Trend indicators with percentages

Quick action buttons

 Ticket Management
Create new tickets with form validation

Edit existing tickets inline

Delete tickets with confirmation modal

Status and priority tracking

Real-time updates

 Development
Code Style
TypeScript for type safety

Composition API with <script setup>

Tailwind CSS for styling

Consistent component structure

State Management
Pinia stores for global state

Composables for reusable logic

Reactive data handling

 License
MIT License - feel free to use this project for learning and development.


This README provides:
- Clear project overview
- Technology stack
- Project structure
- Key features
- Setup instructions
- Component documentation
- Design system details
- Development guidelines

It's concise yet comprehensive enough for developers to understand the project quickly.
