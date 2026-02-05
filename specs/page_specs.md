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
