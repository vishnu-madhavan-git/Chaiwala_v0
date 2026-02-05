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
