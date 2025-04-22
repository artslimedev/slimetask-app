# Slimetask App

**Slimetask** is a minimalist task management application built with modern web technologies. It's designed for simplicity and productivity, with a clean user interface and solid backend architecture.

## Features

- ✅ **Task Management** – Create, edit, and delete your tasks
- ✅ **Responsive UI** – Works great on both desktop and mobile
- ✅ **Real-time Updates** – Tasks update instantly without refreshing

---

## Planned Features

- 📅 **Calendar** – Visualize tasks by date and deadlines
- ⚙️ **Settings** – Customize preferences like theme and notifications
- 👥 **Create Teams** – Collaborate with others and assign tasks
- 🔐 **Authentication** – User login, registration, and account management
- 🔍 **Search** – Quickly find tasks by keywords
- 🗂️ **Task Categorizing** – Group tasks by project or context

## Tech Stack

---

### 🔹 Frontend

- **Next.js** – A powerful React framework for building fast, full-stack web apps with built-in routing and server-side rendering.
- **Shadcn/UI** – A customizable UI component library built on top of Radix UI and Tailwind CSS.
- **Tailwind CSS** – Utility-first CSS framework for rapid and responsive design.

### 🔹 Backend

- **Next.js API Routes** – Used for server-side logic and API endpoints within the same codebase.
- **PostgreSQL** – A robust, open-source relational database system for storing task data.
- **Prisma** – A modern ORM (Object-Relational Mapper) for TypeScript and Node.js that simplifies database interactions.

### 🔹 Validation

- **Zod** – A TypeScript-first schema declaration and validation library, used to validate and parse request data.

---

---

## Summary

Slimetask is my attempt at building a clean, modern task manager without overcomplicating things. I wanted something fast, lightweight, and pleasant to use — both visually and under the hood. As someone with a design background, the UI/UX was just as important to me as the technical side.

I chose **Next.js** to keep everything in one place — frontend and backend — which makes development smoother and easier to manage. **TypeScript** helps catch bugs early and makes the codebase more predictable. For styling and components, I leaned on **Tailwind CSS** and **shadcn/ui** to move quickly while still having full control over the design.

On the backend, I went with **PostgreSQL** for reliable structured data and **Prisma** to simplify working with it. Prisma's developer experience is just really solid — it handles migrations, types, and queries cleanly. I also use **Zod** for validating data and keeping things safe and consistent between client and server.

This is just the starting point, but it’s built with growth in mind. I plan to expand it with teams, calendars, auth, and more down the line.

---

## Tech Stack

### 🔹 Frontend

- **Next.js** – Chosen for its powerful routing system, built-in SSR, and ability to keep frontend and backend logic within one framework.
- **TypeScript** – Used for its static typing, autocomplete support, and reduced runtime errors. It improves maintainability and developer confidence.
- **Shadcn/UI** – Offers accessible, unstyled primitives with the flexibility to build custom and consistent UI quickly.
- **Tailwind CSS** – Great for creating responsive layouts rapidly with a design-first mindset.

### 🔹 Backend

- **Next.js API Routes** – Keeping backend and frontend within the same codebase makes iteration and deployment much simpler.
- **PostgreSQL** – A reliable and feature-rich relational database, ideal for structured task and user data.
- **Prisma** – Chosen for its excellent TypeScript support, developer-friendly syntax, and safe migrations.

### 🔹 Validation

- **Zod** – Type-safe schema validation that pairs perfectly with TypeScript to reduce boilerplate and catch errors early.

### 🔹 Screenshots

<img width="1379" alt="Screenshot" src="https://github.com/user-attachments/assets/f3262ed2-302f-45d3-9d66-e2d7d452ab44" />
<img width="1379" alt="Edit" src="https://github.com/user-attachments/assets/aad5b0cc-84d1-4ce3-af1d-213c17f724c0" />

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/artslimedev/slimetask-app.git
cd slimetask-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root with your database connection string:

```env
DATABASE_URL=your_postgres_connection_string
```

### 4. Set Up the Database

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Run the Dev Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## License

This project is licensed under the [MIT License](LICENSE).
