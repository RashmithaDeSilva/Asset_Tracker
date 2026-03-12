# Hardware & Asset Tracker

A simple, full-stack React application designed to manage an inventory of tech components (like ESP32 modules, sensors, and networking gear) and allocate them to specific project workspaces. 

This project was built to demonstrate proficiency in modern frontend architecture, global state management, client-side routing, and database communication.

## 🛠️ Tech Stack

* **Frontend Framework:** React, Vite, TypeScript
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **State Management:** Redux Toolkit (Global Cart State), React `useState` (Local UI State)
* **Backend/ORM:** Express, Drizzle ORM, SQLite (`better-sqlite3`)

## ✨ Features

* **Inventory Dashboard:** View all available hardware assets fetched dynamically from a SQLite database via Drizzle ORM.
* **Allocation Workspace:** Add items to your project "cart." This state is managed globally by Redux, allowing the data to persist seamlessly across different routes.
* **Seamless Navigation:** Fast, client-side routing managed by React Router.
* **Responsive UI:** Clean, modern, and responsive design built entirely with Tailwind CSS utility classes.

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Installation
Clone this repository (or download the source code) and install the required dependencies:

```bash
npm install
```

### 2. Run the Backend (Database/API)
The frontend relies on a small Express backend connected to a SQLite database via Drizzle ORM. Open a terminal and run:

```bash
npm run dev
```

<i>The API will start running on http://localhost:3001.</i>

### 3. Run the Frontend (React App)
Leave the backend running, open a second terminal window, and start the Vite development server:

```bash
npm run dev
```

<i>The React app will be available at http://localhost:5173.</i>

## 📂 Architecture & Structure
To ensure a clean separation of concerns, the project is structured as follows:

```txt
├── backend/
│   ├── database.config.ts  # SQLite connection, and seed data
│   ├── db.ts               # Drizzle ORM schema, SQLite connection, and seed data
│   └── index.ts            # Express server and API endpoints
├── src/
│   ├── pages/         # High-level route components (Assets, Allocated)
│   ├── store/         # Redux Toolkit configuration and slices (cartSlice)
│   ├── App.tsx        # React Router configuration
│   └── main.tsx       # Application entry point wrapped in Redux <Provider>
```