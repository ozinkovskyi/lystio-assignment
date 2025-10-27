# Lystio Assignment - Property Search

This is a [Next.js](https://nextjs.org) project implementing a property search bar with action buttons (Rent/Buy/AI).

## Project Structure

```
lystio-assignment/
├── app/
│   ├── globals.css          # Global styles, Tailwind config
│   ├── layout.tsx           # Root layout with SearchProvider
│   └── page.tsx             # Main page
├── components/
│   ├── actionButtons/       # Action Buttons module
│   │   ├── ActionButton.tsx # Reusable button component
│   │   ├── ActionButtons.tsx # Container component
│   │   ├── config.ts        # Configuration & styles
│   │   ├── constants.ts     # ACTION_TYPES constants
│   │   ├── types.ts         # TypeScript types
│   │   └── index.tsx        # Barrel export
│   ├── searchBar/
│   │   └── index.tsx        # Re-exports actionButtons
│   └── ui/
│       ├── Button.tsx       # Generic button component
│       └── types.ts         # UI types
├── context/
│   └── SearchContext.tsx    # Global state for search
├── lib/
│   ├── api/                 # API layer
│   ├── hooks/              # Custom hooks
│   └── utils/              # Utility functions
├── types/
│   └── index.ts            # Global types
└── .vscode/
    └── settings.json       # Prettier/ESLint config
```

## Component Architecture

### ActionButtons Module

- **Location:** `components/actionButtons/`
- **Exports:** Main component (default), constants, types
- **Style:** Modular, barrel exports, separation of concerns

### Features Implemented

✅ Action Buttons (Rent/Buy/AI)
✅ Modern-normalize CSS reset
✅ Tailwind CSS v4 configuration
✅ Prettier code formatting
✅ Cross-browser consistency

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
