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

### 🔹 Language

- **Typescript**

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

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## License

This project is licensed under the [MIT License](LICENSE).

---
