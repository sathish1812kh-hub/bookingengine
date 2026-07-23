# Design System Tokens & Styling Guidelines

## 1. Color Palette Tokens

### Primary Palette (Sleek Slate & Indigo)
- `--primary`: `hsl(222.2, 47.4%, 11.2%)`
- `--primary-foreground`: `hsl(210, 40%, 98%)`
- `--accent`: `hsl(217.2, 91.2%, 59.8%)`

### Financial Status Colors
- **Positive / Credit (`--color-success`)**: `hsl(142.1, 76.2%, 36.3%)` (Green)
- **Negative / Debit (`--color-danger`)**: `hsl(346.8, 77.2%, 49.8%)` (Crimson)
- **Discrepancy / Warning (`--color-warning`)**: `hsl(37.7, 92.1%, 50.2%)` (Amber)
- **Neutral / Informational (`--color-info`)**: `hsl(198.6, 88.7%, 48.4%)` (Blue)

## 2. Typography & Fonts
- **Font Family**: Inter, system-ui, sans-serif (Google Fonts)
- **Monospace (Numbers & Financials)**: JetBrains Mono / Roboto Mono (`tabular-nums` enforced on financial tables).

## 3. Dark Mode & Accessibility
- Full dark mode support using CSS variables & `class="dark"` on root html tag.
- WCAG AA contrast ratio ($\ge 4.5:1$) enforced across text and interactive controls.
