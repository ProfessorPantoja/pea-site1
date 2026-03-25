# Design System Document: Pessoas em Ação

## 1. Overview & Creative North Star: "The Human Kinetic"
This design system moves away from the static, "boxed-in" nature of traditional event landing pages. The Creative North Star is **"The Human Kinetic"**—a philosophy where the interface feels as fluid and energetic as the people it represents. 

We break the "template" look by utilizing **Intentional Asymmetry**. Instead of rigid grids, we use overlapping elements—typography bleeding over photography, and circular "pulse" graphics that break container boundaries. This creates a sense of movement and "action," ensuring the page feels premium and bespoke rather than a generic digital brochure.

---

## 2. Colors: Tonal Depth & Vibrancy
The palette is rooted in a warm, breathable base with high-energy accents. We avoid flat UI by using Material 3-style tonal layering.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders for sectioning or card definition. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background creates a sophisticated, "soft-edge" transition that feels more natural and premium.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers.
- **Base Layer:** `surface` (#faf5fa) for main page backgrounds.
- **Secondary Sectioning:** `surface-container-low` (#f5eff5) to gently separate content blocks.
- **Elevated Components:** `surface-container-lowest` (#ffffff) for high-priority cards or "floating" modules.

### The "Glass & Gradient" Rule
To inject "soul" into the interface:
- **CTAs & Heroes:** Use subtle linear gradients from `primary` (#973e4f) to `primary-container` (#fe90a1).
- **Floating Nav/Overlays:** Use Glassmorphism. Apply `surface` at 70% opacity with a `backdrop-filter: blur(20px)` to create a frosted-glass effect that allows the energetic photography to bleed through.

---

## 3. Typography: Editorial Impact
We pair **Plus Jakarta Sans** (Display/Headlines) with **Manrope** (Body/UI) to balance high-impact energy with professional readability.

*   **Display-LG (56px):** Used for the Hero statement. Tracking should be set to -2% to feel tight and "designed."
*   **Headline-LG (32px):** Used for section starts. These should often be "broken" across lines to create asymmetrical visual interest.
*   **Body-LG (16px):** The workhorse. Large enough to feel accessible and modern, never cramped.
*   **Label-MD (12px):** All-caps with increased letter spacing (+5%) for over-line headers or "category" tags.

**The Hierarchy Goal:** Typography isn't just for reading; it's a visual element. Use the massive scale difference between `display-lg` and `body-md` to create an "Editorial" feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "software-heavy" for a human-centric event. We use light and tone to create lift.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. The contrast is enough to define the object without a single line or shadow.
*   **Ambient Shadows:** If a "floating" effect is required (e.g., a sticky registration bar), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(48, 46, 50, 0.06)`. The shadow color is a tint of `on-surface`, never pure black.
*   **The "Ghost Border" Fallback:** If a container must be defined against a similar color, use the `outline-variant` (#b0acb1) at **15% opacity**. It should be felt, not seen.

---

## 5. Components: Fluidity in Action

### Buttons (The Kinetic Trigger)
*   **Primary:** Gradient fill (`primary` to `primary-container`), `full` roundedness (9999px). On hover, the button should slightly expand (scale 1.05) rather than just changing color.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. No border.

### Chips (Organic Tags)
Use `secondary-container` (#add6ff) with `on-secondary-container` (#004b76) for event categories. Sizing should be `sm` roundedness (0.5rem) to contrast with the circular buttons.

### Cards & Content Modules
*   **Strict Rule:** No dividers. Use `spacing-8` (2.75rem) to separate internal card content.
*   **Circular Motif:** Every card should feature a "ghost" circle graphic in the corner using `primary-fixed-dim` at 5% opacity, partially clipped by the card edge.

### Inputs & Fields
Use the `surface-container` background. Instead of a 4-sided border, use a 2px bottom-border of `outline-variant` that transforms into `primary` on focus. This keeps the form feeling light and open.

---

## 6. Do’s and Don’ts

### Do:
*   **DO** use photography that features people mid-laugh or mid-conversation. Crop them tightly so they feel close to the user.
*   **DO** use white space as a structural tool. Lean into `spacing-16` (5.5rem) and `spacing-20` (7rem) between sections to let the design breathe.
*   **DO** overlap elements. Let a circular graphic sit 20% off-screen or let a headline "step" into a photo's margin.

### Don’t:
*   **DON’T** use "Corporate Blue." Stick to the energetic `secondary` (#006095) which leans toward a vibrant sky-tone.
*   **DON’T** use standard 1px dividers. If you need to separate content, use a background color shift or a vertical space.
*   **DON’T** use stiff, posed stock photography. If it looks like a "meeting," delete it. We want "action."
*   **DON’T** center-align everything. Use the 12-column grid but offset your content (e.g., Text on cols 2-6, Image on cols 7-12) to create visual tension.

---

## 7. Spacing & Rhythm
We follow a strict geometric progression to ensure the "clean but not cluttered" requirement.
*   **Micro-spacing (3, 4, 5):** For internal component relationships.
*   **Macro-spacing (16, 20, 24):** For section breathing room. 
*   **Roundedness:** Use `xl` (3rem) for large image containers to mimic the circular logo motif, and `full` for interactive elements.