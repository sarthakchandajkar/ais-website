# Asset Innovative Solutions - Next.js Website

A modern, full-stack website built with Next.js 15, TypeScript, and Tailwind CSS for Asset Innovative Solutions.

## Tech Stack

### Frontend Framework & Core Technologies
- **Next.js 15.5.3** - React-based full-stack framework with App Router
- **React 19.1.0** - Latest React version with React DOM
- **TypeScript 5.9.2** - Type-safe JavaScript development

### Styling & UI
- **Tailwind CSS 4.1.13** - Utility-first CSS framework (latest version)
- **Radix UI** - Headless UI components for accessibility
- **Lucide React** - Icon library
- **next-themes** - Theme switching (light/dark mode)
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Conditional class name utilities

### Backend & Database
- **Supabase** - Backend-as-a-Service
- **@supabase/supabase-js** for client-side operations
- **@supabase/ssr** for server-side rendering support
- **PostgreSQL** - Database (via Supabase)

### Email & Communication
- **Nodemailer** - Email sending functionality
- **Resend** - Email API service
- **@react-email/render** - Email template rendering
- **Google APIs** - Gmail integration and Google Calendar

### Form Handling & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Development Tools
- **ESLint** - Code linting with Next.js configuration
- **Lightning CSS** - Fast CSS processing
- **Vercel Analytics** - Performance monitoring

### Additional Features
- **Date-fns** - Date manipulation library
- **Sonner** - Toast notifications
- **Google Fonts** - Typography (Work Sans, JetBrains Mono, Source Serif 4)
- **PWA Support** - Web app manifest and icons

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account
- Resend account (for email functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ais-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in the required environment variables:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # Email Services
   RESEND_API_KEY=your_resend_api_key
   SMTP_HOST=your_smtp_host
   SMTP_PORT=587
   SMTP_USER=your_smtp_username
   SMTP_PASS=your_smtp_password

   # Google APIs
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret

   # Next.js
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── pages/            # Page components
│   ├── ui/               # Reusable UI components
│   └── theme-provider.tsx
├── lib/                  # Utility functions
│   ├── email/            # Email templates and config
│   ├── supabase/         # Supabase client config
│   ├── validations/      # Zod schemas
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Features

### 🏠 Home Page
- Hero section with animated pillars slider
- Company statistics
- Service highlights

### 🛠️ Services Page
- Detailed service descriptions
- Feature lists for each service
- Call-to-action sections

### ℹ️ About Page
- Company story and mission
- Core values
- Global presence information

### 👨‍💼 Our Founder Page
- Leadership journey
- Achievements and certifications
- Philosophy and core beliefs

### 📞 Contact Page
- Contact form with validation
- Office locations
- Contact information

### 🎨 UI/UX Features
- Responsive design
- Dark/light theme support
- Smooth animations
- Accessible components
- PWA support

## API Routes

### `/api/contact`
Handles contact form submissions with email notifications.

**Method:** POST  
**Body:** Contact form data (name, email, phone, company, service, message)  
**Response:** Success/error message

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software owned by Asset Innovative Solutions.

## Support

For support, email info@assetinnovative.com or contact us through our website.
