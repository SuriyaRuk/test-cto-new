This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- ✅ Google OAuth authentication using NextAuth v5
- ✅ Protected routes with middleware
- ✅ User session management
- ✅ Responsive design with dark mode support
- ✅ TypeScript support
- ✅ Tailwind CSS v4

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Google OAuth

See [docs/GOOGLE_AUTH.md](./docs/GOOGLE_AUTH.md) for detailed instructions on setting up Google OAuth credentials.

Create a `.env.local` file in the root directory:

```env
AUTH_SECRET=your-auth-secret-here
AUTH_GOOGLE_ID=your-google-client-id-here
AUTH_GOOGLE_SECRET=your-google-client-secret-here
```

Generate `AUTH_SECRET` using:
```bash
npx auth secret
```

### 3. Run the development server:

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

## Project Structure

```
docs/
└── GOOGLE_AUTH.md            # Google OAuth setup guide
app/
├── api/
│   └── auth/
│       └── [...nextauth]/
│           └── route.ts          # NextAuth API routes
├── auth/
│   └── login/
│       └── page.tsx              # Login page with Google sign-in
├── dashboard/
│   └── page.tsx                  # Protected dashboard page
├── layout.tsx                    # Root layout
├── page.tsx                      # Home page with auth status
└── globals.css                   # Global styles
auth.ts                            # NextAuth configuration
middleware.ts                      # Route protection middleware
```

## Authentication Routes

- `/` - Home page (shows auth status and appropriate links)
- `/auth/login` - Login page with Google OAuth
- `/dashboard` - Protected dashboard (requires authentication)
- `/api/auth/[...nextauth]` - NextAuth API routes

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
