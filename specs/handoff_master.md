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
# DOC B: DESIGN SYSTEM (Tokens + Components)

## Brand Attributes
- **Vibe:** Modern minimal, warm chai vibe
- **Core Principle:** "Mobile first" design
- **Visual Style:** Clean, flat (no gradients unless subtle), high legibility

## Tokens

### Colors
- **Backgrounds:**
  - `bg-cream`: Cream / Off-white (Main background)
  - `bg-white`: White (Card/Surface background)
- **Text:**
  - `text-charcoal`: Charcoal (Primary text)
  - `text-charcoal-light`: Muted charcoal (Secondary text)
- **Accent:**
  - `text-chai`: Chai brown (Primary Brand Color)
  - `bg-chai`: Chai brown (Button/Highlight)
- **Status:**
  - `text-green` / `bg-green-subtle`: Success/Completed
  - `text-yellow` / `bg-yellow-subtle`: Pending/Warning
  - `text-red` / `bg-red-subtle`: Error/Cancelled

### Typography Scale
- **H1:** Page Titles (Large, Bold)
- **H2:** Section Headers (Medium, Semibold)
- **H3:** Card/Group Headers (Small, Medium weight)
- **Body:** Standard paragraph text
- **Caption:** Tiny details, timestamps, helper text

### Spacing Scale
- `4px` (0.25rem)
- `8px` (0.5rem)
- `12px` (0.75rem)
- `16px` (1rem)
- `24px` (1.5rem)
- `32px` (2rem)
- `48px` (3rem)
- `64px` (4rem)

## Components List

### Button
- **Variants:**
  - `Primary`: Solid Chai Brown
  - `Secondary`: Outline or lighter background
  - `Danger`: Red text or background for destructive actions
  - `Ghost`: Text only, no background
- **States:** Hover, Active, Disabled (low opacity)

### Badge
- **Usage:** Status indicators (Pending, Completed, Cancelled)
- **Style:** Pill shape, subtle background color with matching dark text color

### Tabs
- **Usage:** Filtering lists (e.g., "All", "Pending", "Completed")
- **Style:** Underline or pill toggle style
- **State:** Active tab clearly differentiated from inactive

### Card
- **Usage:** Booking items, Menu items
- **Style:** White background, subtle shadow or border, rounded corners (mobile friendly)

### Table
- **Usage:** Admin lists (Desktop mainly)
- **Style:** Clean rows, clear headers, zebra striping optional but clean borders preferred
- **Mobile:** Horizontal scroll or card view alternative

### Form Inputs
- **Elements:** Text inputs, Number inputs, Textareas
- **Style:** Rounded borders, clear focus states (Chai brown ring)

### Toggle
- **Usage:** "Today Only" filter, Availability toggle
- **Style:** Standard switch component

### Empty States
- **Usage:** When lists have no data
- **Content:** Icon + Helper text + optional CTA

## Acceptance Rules
- **No Gradients:** Unless extremely subtle/functional.
- **Mobile First:** All components must be touch-friendly (min 44px tap targets).
- **Tailwind:** Use standard Tailwind utility classes for implementation.
# DOC C: PAGE SPECS (Per-page UI requirements)

## Page: Admin Dashboard
**Route:** `/admin`

### 1. Page Objective
- **User:** Café Operator / Staff
- **Goal:** Rapidly view incoming orders, update status (Confirm/Cancel), and manage menu availability.
- **Key Metric:** Speed of action (glanceability).

### 2. Sections (Top to Bottom)

#### A. Header
- **Layout:** Flex row, Space between.
- **Elements:**
  - Brand Logo / Title ("Chaiwala Admin").
  - User Profile / Logout Button (Ghost variant).

#### B. Filter Bar (Sticky)
- **Behavior:** `position: sticky; top: 0; z-index: 50;`
- **Background:** `bg-cream` (with slight transparency/blur or solid to hide scrolling content).
- **Elements:**
  - **Status Tabs:** Scrollable horizontal list (All, Pending, Confirmed, Completed, Cancelled).
  - **Time Toggle:** "Today Only" switch (Right aligned or separate row on mobile).
  - **Visual:** Count badges on tabs (e.g., "Pending (3)").

#### C. Bookings Section
- **Component:** Table (Desktop) / Card List or Scrollable Table (Mobile).
- **Sorting:** Time descending (newest first).
- **Row Emphasis:**
  - **Pending:** `bg-yellow-subtle` or thickened left border (`border-l-4 border-yellow`).
  - **New Insert:** Subtle visual pulse (CSS animation, no logic).
- **Columns/Data:**
  - **Time:** Format `HH:MM`.
  - **Customer:** Name + Phone (clickable tel link).
  - **Details:** Guest count, Table # (if applicable).
  - **Status:** Badge component.
  - **Actions:**
    - **Pending:** "Confirm" (Primary Button), "Cancel" (Danger Ghost).
    - **Confirmed:** "Complete" (Secondary), "Cancel" (Danger Ghost).
- **Mobile Behavior:** Container with `overflow-x-auto` to allow horizontal scrolling of table columns.

#### D. Menu Management (Products)
- **Layout:** Grid (2 col mobile, 4 col desktop) or List.
- **Card Elements:**
  - Product Name.
  - Price.
  - **Status:** "Available" / "Sold Out" Badge.
  - **Control:** Toggle Switch (optimistic update).

#### E. Category Management
- **Layout:** List or compact Grid.
- **Card Elements:**
  - Category Name.
  - **Control:** "Active" Toggle Switch.

### 3. Components Used
- **Design System:**
  - `Button` (Primary/Danger/Ghost)
  - `Badge` (Status)
  - `Tabs` (Filters)
  - `Toggle` (Availability/Time)
  - `Card` (Mobile views/Menu items)
  - `Table` (Bookings)

### 4. Layout Rules
- **Desktop:**
  - Max-width container (e.g., `max-w-7xl`).
  - Padding: `p-8`.
- **Mobile:**
  - Full width.
  - Padding: `p-4`.
  - Sticky header/filters must not consume more than 25% of screen height.
  - Horizontal scrolling for data-heavy tables.

### 5. Visual Hierarchy Rules
1.  **Pending Orders:** Highest contrast/prominence.
2.  **Action Buttons:** Primary (Confirm) > Secondary (Cancel).
3.  **Read-only Data:** Neutral charcoal.

### 6. States
- **Loading:** Skeleton rows for table/cards.
- **Empty:**
  - "No bookings found for this filter."
  - Illustration/Icon + Reset Filter button.
- **Error:**
  - Top banner notification (`bg-red-subtle` text-red).
  - Retry button.

### 7. Accessibility Rules
- **Touch Targets:** All buttons and toggles min `44px` height/width.
- **Contrast:** Status text must pass WCAG AA against background.
- **Screen Readers:** ARIA labels on Icon-only buttons (if any).
