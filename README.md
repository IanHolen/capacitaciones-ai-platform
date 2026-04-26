# Capacitaciones AI Platform

Plataforma educativa de cursos de Inteligencia Artificial.

## Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **ORM:** Prisma
- **Auth:** NextAuth.js
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- PostgreSQL database (connection string)

### Installation

```bash
# Clone the repo
git clone https://github.com/ianholendermariaca/capacitaciones-ai-platform.git
cd capacitaciones-ai-platform

# Install dependencies
npm install

# Copy env file and configure
cp .env.example .env
# Edit .env with your DATABASE_URL and auth secrets

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env` file based on `.env.example`:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXTAUTH_SECRET` | NextAuth.js secret key |
| `NEXTAUTH_URL` | App URL (e.g., `http://localhost:3000`) |

## Project Structure

```
capacitaciones-ai-platform/
├── app/                # Next.js App Router pages and layouts
│   ├── api/            # API routes
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   └── ui/             # shadcn/ui components
├── lib/                # Utility functions and shared code
├── prisma/             # Prisma schema and migrations
├── public/             # Static assets
├── .prettierrc         # Prettier config
├── eslint.config.mjs   # ESLint config
└── tsconfig.json       # TypeScript config
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## License

Private
