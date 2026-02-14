# DOC A: SYSTEM BIBLE (Locked Constraints)

## Purpose
Prevent logic drift.

## LOCKED TECH + LOGIC (DO NOT CHANGE)
- Next.js App Router, client-side pages
- Supabase backend
- Bookings use realtime (INSERT/UPDATE/DELETE) for visibility only
- Admin actions are manual only (Confirm/Cancel), optimistic UI with rollback
- Filters: status tabs + Today toggle are derived state
- DB is authoritative
- NO automation, NO server actions, NO auth
- Do not modify Supabase queries, realtime subscriptions, useEffect, state shapes, or handlers

## Data Flow
- Snapshot → Realtime → Optimistic
- DB authoritative
- Manual control only
