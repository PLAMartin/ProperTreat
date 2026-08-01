# Proper Treat

Proper Treat is a voucher-as-a-service platform for small businesses that want to offer beautifully designed, humorous and thoughtful gift experiences to their customers.

The platform enables businesses such as cafés, restaurants, hair salons, nail bars and experience providers to sell digital gift vouchers with custom artwork, personalised messages and QR-code redemption.

The long-term vision is to become a Shopify-like gifting infrastructure platform for independent businesses.

---

# Vision

Most voucher systems are functional but emotionally flat.

Proper Treat aims to combine:
- the emotional impact of a greeting card
- the convenience of digital gifting
- the simplicity of modern checkout systems
- the charm of humour, art and thoughtful presentation

The product should feel:
- warm
- playful
- beautifully designed
- effortless to use

The experience should delight:
- the purchaser
- the recipient
- the merchant

---

# Core Concept

A customer purchases a voucher directly from a participating business.

After purchase:
1. the customer receives a QR code or link
2. they open a personalisation flow
3. they select artwork/templates
4. they add a personalised message
5. the recipient receives the completed digital gift voucher via email or SMS

The recipient later redeems the voucher in-store using a QR code.

Merchants scan the QR code to:
- validate the voucher
- partially redeem value
- fully redeem remaining balance
- prevent reuse

---

# Product Goals

## Merchant Goals
- increase revenue
- increase repeat visits
- improve gifting experience
- create branded customer moments
- reduce operational complexity

## Customer Goals
- send thoughtful gifts quickly
- personalise vouchers easily
- give something that feels more meaningful than cash

## Proper Treat Goals
- become the gifting infrastructure layer for independent businesses
- create a scalable multi-tenant SaaS platform
- combine commerce with humour, art and emotional design

---

# Initial Target Market

## Phase 1 — Bath
Independent:
- cafés
- restaurants
- nail bars
- hair salons
- boutique experience businesses

## Phase 2 — UK Expansion
Expand into:
- hospitality
- beauty
- wellness
- creative independent retail

## Phase 3 — International
Develop into a broader gifting infrastructure platform.

---

# Key Features

## Merchant Features
- voucher campaign creation
- sales analytics
- redemption tracking
- payout management
- customer list
- branding configuration
- staff permissions
- QR redemption scanning
- multi-location support (future)

## Customer Features
- digital gift vouchers
- humorous and artistic templates
- personalised messages
- email delivery
- SMS delivery
- mobile-friendly experience
- QR-based redemption
- partial redemption support

## Platform Features
- multi-tenant architecture
- Stripe Connect marketplace payments
- Supabase authentication
- admin management tools
- analytics dashboards
- scalable infrastructure
- template management system

---

# Product Principles

## 1. Keep It Simple
Small businesses should be able to:
- onboard quickly
- create vouchers quickly
- redeem vouchers quickly

Avoid unnecessary complexity.

---

## 2. Emotion Matters
The product is not just a payment system.

The gifting experience itself is part of the value.

Humour, art, design and thoughtful presentation are strategic advantages.

---

## 3. Merchant-Friendly
Many small businesses:
- lack technical resources
- lack design capability
- do not want operational complexity

Proper Treat should reduce friction everywhere possible.

---

## 4. Web-First
The initial platform is web-first:
- responsive web application
- mobile-optimised merchant flows
- mobile-optimised customer gifting flows

Native apps may follow later.

---

# Recommended Technology Stack

## Frontend
- Next.js (App Router)
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

## Image Handling (Future)
- Cloudinary

---

# Architecture Overview

## Multi-Tenant SaaS Architecture

Each business operates as its own tenant.

Each tenant has:
- staff users
- vouchers
- branding
- customers
- analytics
- payouts

This architecture supports:
- scalability
- future white-labelling
- operational separation
- marketplace expansion

---

# Suggested Folder Structure

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

# Authentication

## Recommended Approach
Use:
- Supabase Auth
- magic links initially
- optional Google login later

Why:
- low friction
- simple onboarding
- reduced support burden

---

# Voucher Lifecycle

## 1. Merchant Creates Campaign
Merchant defines:
- title
- description
- voucher amount
- expiry rules
- artwork options

---

## 2. Customer Purchases Voucher
Customer:
- pays via Stripe
- receives access to personalisation flow

---

## 3. Customer Personalises Voucher
Customer:
- selects artwork
- writes personalised message
- chooses recipient delivery method

---

## 4. Recipient Receives Voucher
Recipient receives:
- digital voucher
- QR code
- message
- branding

---

## 5. Merchant Redeems Voucher
Merchant scans QR code.

Merchant can:
- partially redeem
- fully redeem
- view remaining balance

Once balance reaches zero:
- voucher becomes fully redeemed
- QR code becomes invalid

---

# Suggested Database Structure

## tenants
Businesses using Proper Treat.

## users
Merchant staff users.

## roles
Permission model.

## vouchers
Voucher master records.

## voucher_redemptions
Partial and full redemption events.

## voucher_templates
Artwork/template records.

## customers
Purchasers and recipients.

## campaigns
Merchant voucher campaigns.

## payouts
Stripe payout tracking.

## audit_logs
Security and operational tracking.

---

# Security

## Core Security Principles
- Row Level Security enabled everywhere
- tenant isolation enforced
- signed QR validation
- secure webhook verification
- audit logging
- least-privilege permissions

---

# QR Redemption Flow

## Merchant Scan Flow
1. merchant scans QR code
2. voucher validation occurs
3. remaining balance displayed
4. merchant enters redemption amount
5. redemption recorded
6. updated balance returned

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