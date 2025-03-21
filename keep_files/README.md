# P1.1 - March Madness SmartStack v4 Application

This project is a SmartStack v4 (SS4) implementation of a March Madness bracket challenge application with a CLI-like user interface.

## Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Cursor AI Design System
- **UI Components**: shadcn/ui
- **Authentication**: GitHub OAuth via Supabase
- **Database**: Supabase
- **Data Fetching**: TanStack Query (React Query)
- **Form Handling**: React Hook Form + Zod
- **Testing**: Jest + React Testing Library

## Features

The application implements the US Suite stories from the SS4 specifications:

- US-001: GitHub OAuth Authentication
- US-002: Protected Landing Page
- US-003: User Profile Management
- US-004: Basic Dashboard Framework
- US-005: Subscription Plans Display
- US-005B: Stripe Subscription Management
- US-006: Basic API Infrastructure
- US-007: CLI-like UI for March Madness Bracket Challenge
- US-008: Perplexity API Integration for Pregame Hype Summaries
- US-009: Polygon 2.0 Integration Foundation (Optional)

## Development Approach

This project follows the SS4-B1 (Branch First) workflow with these core principles:

1. **Branch First**: Always create a dedicated branch before any code changes
2. **Pattern Stewardship**: Document reusable patterns in the pattern catalog
3. **Story-Driven**: Implement one story at a time with clear acceptance criteria
4. **Testing**: Comprehensive test coverage for components and features
5. **Documentation**: Clear documentation of implementation decisions

## Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/p1.git
cd p1.1

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run the development server
npm run dev
```

## Environment Setup

The application requires the following environment variables:

```
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# GitHub OAuth
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# Application URLs
NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000

# Perplexity API (for US-008)
NEXT_PUBLIC_ENABLE_PERPLEXITY=true
PERPLEXITY_API_KEY=your-perplexity-api-key
```

## Deployment

This application is deployed on Vercel with the following configuration:

1. **Production**: Deployed from the `main` branch
2. **Preview**: Deployed from pull requests
3. **Development**: Local development server 