# Next.js Template

This is a **Next.js** project template bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
It is designed to provide a clean, scalable, and production-ready foundation for your Next.js projects.

---

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  
You can start editing the app by modifying files inside the `app/` directory.  
The page auto-updates as you edit the file.

---

## ⚙️ Environment Setup

After installation, create the following environment files in the root directory:

```bash
.env.local
.env.production
.env.test
```

Each file should contain the necessary environment variables as per `env.example`

Environment files are automatically loaded by Next.js based on the environment (`local`, `production`, or `test`).

---

## 🧱 Project Structure

```
.
├── app/               # Application routes and pages
├── components/        # Reusable UI components
├── lib/               # Utilities and helper functions
├── public/            # Static assets
├── styles/            # Global and modular styles
├── next.config.js     # Next.js configuration
├── .env.local         # Local environment variables
└── package.json       # Project dependencies and scripts
```

---

## 🧰 Available Scripts

```bash
npm run dev             # Run the development server
npm run build           # Build for production
npm run start           # Start the production server
npm run lint            # Run ESLint
npm run lint:fix        # Fix linting issues
npm run format          # Format code using Prettier
npm run format:check    # Check code formatting
```

---

## 🧩 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) – learn about features and APIs  
- [Learn Next.js](https://nextjs.org/learn) – interactive tutorial  
- [Next.js GitHub Repository](https://github.com/vercel/next.js) – feedback and contributions are welcome  

---

## ☁️ Deploy on Vercel

The easiest way to deploy your Next.js app is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme),  
the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---
