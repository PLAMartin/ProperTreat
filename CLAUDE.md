# CLAUDE.md

This file provides guidance to Claude Code when working on the Proper Treat codebase.

---

# Proper Treat

Proper Treat is a voucher-as-a-service platform for small businesses that want to offer beautifully designed, humorous and thoughtful gift experiences.

The platform enables businesses such as:
- cafés
- restaurants
- hair salons
- nail bars
- boutique experience businesses

to sell digital gift vouchers with:
- artistic templates
- personalised messages
- QR-code redemption
- partial redemption support

The long-term vision is to become a Shopify-like gifting infrastructure platform for independent businesses.

---

# Product Philosophy

Proper Treat is not just a payment or voucher system.

The gifting experience itself is part of the value.

The platform should feel:
- warm
- playful
- thoughtful
- beautifully designed
- simple to use

Humour, emotional connection and presentation quality are strategic advantages.

Avoid making the product feel:
- corporate
- cold
- overly technical
- cluttered
- enterprise-heavy

The UX should feel approachable for small independent businesses.

---

# Core Product Principles

## 1. Simplicity First

Optimise for:
- fast onboarding
- low cognitive load
- minimal configuration
- clear workflows

Small businesses should be able to:
- create vouchers quickly
- customise gifting easily
- redeem vouchers easily

Avoid unnecessary complexity.

---

## 2. Founder-Friendly Architecture

This product is being built by a solo founder.

Optimise for:
- maintainability
- clarity
- low operational overhead
- scalability without overengineering

Prefer:
- simple abstractions
- clear naming
- incremental complexity

Avoid:
- premature optimisation
- excessive indirection
- unnecessary microservices
- enterprise patterns unless justified

---

## 3. Multi-Tenant By Default

Proper Treat is a multi-tenant SaaS platform.

Every business is a tenant.

Tenant isolation is critical.

All database access and business logic must enforce tenant boundaries.

Never assume:
- shared data access
- global visibility
- unsafe joins

Always design with tenant isolation in mind.

---

## 4. Mobile-First UX

Most merchant interactions will happen on mobile devices.

Prioritise:
- responsive layouts
- touch-friendly controls
- fast-loading pages
- minimal typing
- clean forms

QR redemption flows must be extremely fast and simple.

---

# Tech Stack

## Frontend
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui

## Backend
- Supabase
  - PostgreSQL
  - Supabase Auth
  - Row Level Security
  - Storage
  - Edge Functions

## Payments
- Stripe
- Stripe Connect Express

## Hosting
- Vercel

## Source Control
- GitHub

## Email
- Resend

## SMS
- Twilio

---

# Coding Preferences

## General
- Use TypeScript everywhere
- Prefer server components where appropriate
- Prefer async/await over promise chains
- Keep files focused and reasonably small
- Prefer explicitness over magic

---

## React
- Prefer functional components
- Prefer composition over inheritance
- Avoid deeply nested component trees
- Keep state local where possible
- Avoid unnecessary global state

---

## Styling
- Use Tailwind CSS
- Use shadcn/ui primitives where appropriate
- Keep styling consistent
- Avoid excessive visual complexity

The UI should feel:
- calm
- modern
- playful
- premium but approachable

---

## Naming Conventions

### Database
Use:
- snake_case for database columns
- plural table names

Examples:
- tenants
- vouchers
- voucher_redemptions

---

### TypeScript
Use:
- PascalCase for components/types
- camelCase for variables/functions

Examples:
- VoucherCard
- RedemptionFlow
- calculateRemainingBalance()

---

# Architecture Guidelines

## API Design
Prefer:
- server actions where appropriate
- simple API routes
- clear validation

Avoid:
- unnecessary abstraction layers
- excessive service wrappers

---

## Database Design
Use:
- UUID primary keys
- created_at and updated_at timestamps
- explicit foreign keys
- tenant_id on tenant-scoped data

All tenant data must be protected with:
- Row Level Security policies

---

## Authentication
Use:
- Supabase Auth
- magic links initially
- Google login later if needed

Optimise for:
- low friction
- minimal support burden

---

## Payments
Use:
- Stripe Connect Express

Platform should:
- take a percentage fee
- support merchant payouts
- support webhook-based payment updates

Never trust frontend payment state.

Always validate payment state server-side.

---

# Voucher System Rules

## Voucher Requirements
Vouchers must support:
- QR codes
- expiry dates
- personalised messages
- artistic templates
- partial redemption
- remaining balance tracking

---

## Redemption Rules
Merchant scans QR code.

System should:
1. validate voucher
2. verify tenant ownership
3. display remaining balance
4. allow redemption amount entry
5. record redemption event
6. update remaining balance

Once balance reaches zero:
- voucher becomes fully redeemed
- voucher cannot be reused

All redemption activity should be auditable.

---

# Security Principles

## Always Enforce
- tenant isolation
- server-side validation
- webhook signature verification
- authenticated access
- least-privilege permissions

Never trust:
- client-side role checks
- frontend-calculated balances
- unverified webhook payloads

---

# Performance Principles

Optimise for:
- fast mobile loading
- responsive QR scanning flows
- simple navigation
- minimal operational latency

Avoid:
- unnecessary client-side rendering
- oversized bundles
- premature caching complexity

---

# Suggested Project Structure

/apps
  /web

/components
/features
/lib
/services
/hooks
/types
/styles

/supabase
  /migrations
  /functions

/docs

/public

---

# Suggested Feature Structure

/features
  /auth
  /campaigns
  /vouchers
  /redemptions
  /templates
  /customers
  /analytics
  /payouts

Keep business logic close to feature boundaries.

Avoid massive shared utility folders.

---

# Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

SUPABASE_SERVICE_ROLE_KEY=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

RESEND_API_KEY=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
```

---

# Development Workflow

## Preferred Workflow
1. create feature branch
2. implement feature
3. test locally
4. create PR
5. deploy preview via Vercel
6. merge to main

---

# UI/UX Guidance

The product should feel closer to:
- a thoughtful gifting brand
than:
- enterprise voucher software

Prioritise:
- emotional clarity
- delightful interactions
- clean typography
- simple flows

The experience should feel:
- human
- charming
- lightweight
- easy

---

# Future Vision

Potential future capabilities:
- Apple Wallet support
- Google Wallet support
- marketplace discovery
- local business collections
- embeddable checkout widgets
- white-label infrastructure
- POS integrations
- API platform

Build foundations that allow evolution toward this future without overengineering the MVP.

---

# Important Reminder

Proper Treat competes on:
- emotional experience
- design quality
- simplicity
- merchant friendliness

Not feature bloat.

Whenever making architectural or UX decisions:
- prefer simplicity
- prefer clarity
- prefer delight
- prefer maintainability