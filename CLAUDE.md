# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- **Development**: `pnpm dev` - Starts Next.js development server with Turbopack
- **Build**: `pnpm build` - Builds the application for production
- **Lint**: `pnpm lint` - Runs ESLint to check code quality
- **Preview**: `pnpm preview` - Builds and previews with OpenNext Cloudflare
- **Deploy**: `pnpm deploy` - Builds and deploys to Cloudflare
- **Type Generation**: `pnpm cf-typegen` - Generates TypeScript types for Cloudflare env

## Architecture Overview

Chat0 is a Next.js-based AI chat application with client-side data persistence:

### Frontend Structure
- **React Router**: Frontend routing handled by `react-router` in `frontend/app.tsx`
- **Next.js App Router**: Server-side routing in `app/` directory
- **Dual Architecture**: Uses both Next.js routing (for API routes) and React Router (for frontend navigation)

### Data Layer
- **Dexie Database**: Local IndexedDB storage via Dexie in `frontend/dexie/db.ts`
- **Schemas**: Threads, Messages, and MessageSummaries stored locally
- **Privacy-First**: All data stored in browser, no server persistence

### Key Components
- **ChatLayout**: Main chat interface wrapper
- **Chat Navigator**: Navigation system for messages within threads
- **API Routes**: Located in `app/api/` for chat completions and streaming
- **State Management**: Uses Zustand stores for API keys and model selection

### AI Integration
- **AI SDK**: Uses Vercel AI SDK with multiple providers
- **Supported Models**: Google Gemini, OpenAI, DeepSeek via OpenRouter
- **Streaming**: Real-time message streaming from AI models

### Styling
- **Tailwind CSS**: Primary styling framework
- **Radix UI**: Component library for UI primitives
- **Themes**: Dark/light mode support via `next-themes`

### Deployment
- **Cloudflare**: Deployed via OpenNext Cloudflare adapter
- **Static Generation**: Uses `app/static-app-shell/` for initial page load