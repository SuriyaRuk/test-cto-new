# Google OAuth Authentication Setup

This application uses NextAuth v5 for authentication with Google OAuth provider.

## Setup Instructions

### 1. Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Configure the OAuth consent screen
6. Create an OAuth 2.0 Client ID:
   - Application type: Web application
   - Authorized JavaScript origins: `http://localhost:3000` (for development)
   - Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
AUTH_SECRET=your-auth-secret-here
AUTH_GOOGLE_ID=your-google-client-id-here
AUTH_GOOGLE_SECRET=your-google-client-secret-here
```

Generate a secure `AUTH_SECRET` using:
```bash
npx auth secret
```

Or use:
```bash
openssl rand -base64 32
```

### 3. Run the Application

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Authentication Flow

1. **Home Page** (`/`): Shows sign-in button for unauthenticated users, or dashboard link for authenticated users
2. **Login Page** (`/auth/login`): Presents "Sign in with Google" button
3. **Dashboard** (`/dashboard`): Protected route that displays user information from Google account
4. **Logout**: Available on dashboard page

## Routes

- `/` - Home page (public)
- `/auth/login` - Login page (public)
- `/dashboard` - Protected dashboard (requires authentication)

## Features

- ✅ Google OAuth authentication
- ✅ Protected routes with middleware
- ✅ Session management
- ✅ User profile display (name, email, profile picture)
- ✅ Logout functionality
- ✅ Responsive design with dark mode support
