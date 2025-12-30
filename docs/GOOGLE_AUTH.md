# Setting up Google Auth Service

This guide provides step-by-step instructions on how to create and configure the Google OAuth service for this application.

## 1. Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Click on the project dropdown at the top and select "New Project".
3. Give your project a name (e.g., "My Next.js App") and click "Create".

## 2. Configure OAuth Consent Screen

Before creating credentials, you must configure the OAuth consent screen.

1. In the sidebar, navigate to **APIs & Services** > **OAuth consent screen**.
2. Select **External** and click **Create**.
3. Fill in the required **App information**:
   - **App name**: Your application name.
   - **User support email**: Your email address.
   - **Developer contact information**: Your email address.
4. Click **Save and Continue**.
5. In the **Scopes** section, click **Add or Remove Scopes**.
6. Select the following scopes:
   - `.../auth/userinfo.email`
   - `.../auth/userinfo.profile`
   - `openid`
7. Click **Update** and then **Save and Continue**.
8. (Optional) Add test users if your app is in "Testing" mode.
9. Click **Save and Continue** and then **Back to Dashboard**.

## 3. Create OAuth 2.0 Credentials

1. In the sidebar, navigate to **APIs & Services** > **Credentials**.
2. Click **+ Create Credentials** at the top and select **OAuth client ID**.
3. Select **Web application** as the application type.
4. Add a name for the client (e.g., "NextAuth Client").
5. Under **Authorized JavaScript origins**, add:
   - `http://localhost:3000`
6. Under **Authorized redirect URIs**, add:
   - `http://localhost:3000/api/auth/callback/google`
7. Click **Create**.
8. A modal will appear showing your **Client ID** and **Client Secret**. Copy these values.

## 4. Configure Environment Variables

Create or update your `.env.local` file in the root of the project with the credentials you obtained:

```env
AUTH_SECRET=your-auth-secret-here
AUTH_GOOGLE_ID=your-google-client-id-here
AUTH_GOOGLE_SECRET=your-google-client-secret-here
```

### Generating AUTH_SECRET

You can generate a secure secret for `AUTH_SECRET` using the following command:

```bash
npx auth secret
```

Or using openssl:

```bash
openssl rand -base64 32
```

## 5. Verification

Once the environment variables are set, restart your development server:

```bash
npm run dev
```

You should now be able to sign in using your Google account.
