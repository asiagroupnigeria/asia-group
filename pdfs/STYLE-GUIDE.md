# 🎨 Professional Design Style Guide

Complete guide to creating $100,000-quality PDFs using this workspace.

---

## 📐 Layout Principles

### Page Setup
- **Size**: A4 (210mm × 297mm)
- **Margins**: 2cm all sides (default)
- **Orientation**: Portrait (standard)
- **Bleed**: None required (internal use)

### Spacing System
Use these measurements consistently:
- **Section gap**: 2em
- **Card gap**: 1.5em
- **Item gap**: 1em
- **Padding**: 1.5em
- **Border**: 1-4pt

### White Space
- Minimum 1.5em between sections
- 0.5em between heading and text
- Don't fill entire page (breathing room)
- Use light backgrounds sparingly

---

## 🎨 Color Palette

### Professional Presets

**Preset 1: Corporate Blue**
```css
Primary: #34495e (Dark blue-grey)
Secondary: #3498db (Bright blue)
Accent: #e74c3c (Red)
Background: #f5f5f5 (Light grey)
```

**Preset 2: Modern Purple**
```css
Primary: #667eea (Purple)
Secondary: #764ba2 (Deep purple)
Accent: #f093fb (Pink)
Background: #f8f9fa (Off-white)
```

**Preset 3: Professional Green**
```css
Primary: #27ae60 (Green)
Secondary: #229954 (Dark green)
Accent: #f39c12 (Orange)
Background: #ecf0f1 (Light grey)
```

**Preset 4: Executive Black**
```css
Primary: #2c3e50 (Dark grey)
Secondary: #34495e (Medium grey)
Accent: #3498db (Blue)
Background: #ffffff (White)
```

### Usage Rules
- Use primary color for headers and key elements
- Use secondary for subheadings and accents
- Use accent sparingly for CTAs or highlights
- Keep background neutral

---

## 📝 Typography

### Font Pairs
**Professional Combination (Recommended)**
- Headings: Open Sans (sans-serif, clean)
- Body: Merriweather (serif, readable)
- Code: Courier New (monospace)

**Alternative Combinations**
- Headings: Playfair Display | Body: Open Sans
- Headings: Montserrat | Body: Lato
- Headings: Raleway | Body: Roboto

### Sizing Hierarchy
```css
h1: 36pt  /* Title pages, main heading */
h2: 24pt  /* Section headers */
h3: 16pt  /* Subsection headers */
h4: 14pt  /* Card titles */
h5: 12pt  /* Small headings */
p:  11pt  /* Body text */
```

### Line Height
- Body text: 1.8 (professional readability)
- Headings: 1.2 (tight for impact)
- Lists: 1.6 (easy scanning)

### Emphasis
- **Bold**: For important terms and labels
- *Italic*: For definitions and quotes
- ALL CAPS: Sparingly for labels only
- AVOID: Underlining (use bold instead)

---

## 🎯 Component Styling

### Headers/Section Titles
```css
h2 {
  font-size: 24pt;
  color: #primary-color;
  border-bottom: 3pt solid #primary-color;
  padding-bottom: 0.5em;
  margin: 2em 0 1.5em 0;
}
```

### Cards
```css
.card {
  background: #f9f9f9;
  border-left: 4pt solid #primary-color;
  padding: 1.5em;
  border-radius: 4pt;
  page-break-inside: avoid;
}
```

### Stat Boxes
```css
.stat-box {
  background: #primary-color15;  /* 15% opacity */
  padding: 1.5em;
  text-align: center;
  border-top: 3pt solid #primary-color;
}

.stat-box h3 {
  font-size: 28pt;
  color: #primary-color;
  margin: 0 0 0.5em 0;
}
```

### Call-to-Action (CTA)
```css
.cta-section {
  background: linear-gradient(135deg, #primary 0%, #secondary 100%);
  color: white;
  padding: 2em;
  border-radius: 6pt;
  text-align: center;
}
```

---

## 🖼️ Image Guidelines

### Resolution
- **Screen/Digital**: 72-96 dpi
- **Print/PDF**: 300 dpi (professional standard)
- **High-quality**: 600+ dpi

### Sizing
- **Cover images**: Full bleed (edge-to-edge)
- **Product images**: 120-200pt width
- **Team photos**: 100-150pt diameter (for circles)
- **Logos**: 80-120pt width

### Formats
- **Use**: PNG (transparency), JPG (photos)
- **Avoid**: GIF (poor quality), BMP (large files)
- **Recommended**: JPG for photos, PNG for graphics/logos

### Styling
```css
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1em 0;
  border-radius: 4pt;  /* Optional: subtle rounding */
}
```

---

## 📊 Tables & Data

### Professional Table Style
```html
<table class="financial-table">
  <tr>
    <th>Metric</th>
    <th>2026</th>
    <th>2025</th>
    <th>Growth</th>
  </tr>
  <tr>
    <td>Revenue</td>
    <td>$125.5M</td>
    <td>$105.2M</td>
    <td>+19.2%</td>
  </tr>
</table>
```

### CSS Styling
```css
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5em 0;
  font-size: 10pt;
}

th {
  background-color: #primary-color;
  color: white;
  padding: 12pt;
  text-align: left;
}

td {
  padding: 10pt;
  border-bottom: 1pt solid #ddd;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}
```

---

## 🎯 Grid Layouts

### 2-Column Layout
```html
<div class="two-column">
  <div>Left column content</div>
  <div>Right column content</div>
</div>
```

### 3-Column Layout (Products)
```html
<div class="three-column">
  <div class="product-card">Product 1</div>
  <div class="product-card">Product 2</div>
  <div class="product-card">Product 3</div>
</div>
```

### Best Practices
- Maximum 4 columns (readability)
- Equal column widths for uniformity
- Consistent gap spacing
- `page-break-inside: avoid;` on cards

---

## 🎭 Visual Effects

### Gradients
```css
/* 135-degree gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Horizontal gradient */
background: linear-gradient(to right, #667eea 0%, #764ba2 100%);

/* Radial gradient */
background: radial-gradient(circle, #667eea 0%, #764ba2 100%);
```

### Shadows (Subtle)
```css
box-shadow: 0 1pt 3pt rgba(0,0,0,0.05);    /* Subtle */
box-shadow: 0 2pt 8pt rgba(0,0,0,0.1);     /* Medium */
box-shadow: 0 4pt 16pt rgba(0,0,0,0.15);   /* Bold */
```

### Borders
```css
border: 1pt solid #e0e0e0;          /* Light border */
border-left: 4pt solid #primary;    /* Accent border */
border-bottom: 3pt solid #primary;  /* Underline */
```

### Opacity
```css
background: rgba(102, 126, 234, 0.1);    /* 10% primary */
background: rgba(0, 0, 0, 0.05);         /* Subtle dark */
color: rgba(255, 255, 255, 0.9);         /* 90% opacity white */
```

---

## 📄 Page Breaks

### When to Force Breaks
```html
<!-- New section on new page -->
<section class="page-break-before">
  <h2>New Section</h2>
</section>

<!-- Prevent section from breaking -->
<div class="page-break-inside avoid">
  <div class="card">Don't split this card</div>
</div>

<!-- Force next element to new page -->
<div class="page-break-after"></div>
```

### Strategic Break Points
- Between major sections
- After cover pages
- Before large tables
- After key statistics

---

## ✅ Quality Checklist

Before finalizing your PDF:

**Content**
- [ ] All text is accurate and spell-checked
- [ ] Contact info is current
- [ ] Images are high-resolution
- [ ] All links are functional

**Design**
- [ ] Consistent color scheme
- [ ] Proper font hierarchy
- [ ] Adequate white space
- [ ] Aligned elements

**Layout**
- [ ] Page breaks are logical
- [ ] No cut-off content
- [ ] Margins are consistent
- [ ] Text is readable at print size

**Branding**
- [ ] Logo is visible and professional
- [ ] Company colors are used
- [ ] Brand voice is consistent
- [ ] Tagline/mission is clear

---

## 🚀 Advanced Techniques

### Using CSS Variables (if supported)
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --spacing-unit: 1em;
}

h2 { color: var(--primary-color); }
.card { padding: var(--spacing-unit); }
```

### Print-Only Styles
```css
@media print {
  .no-print { display: none; }
  body { background: white; color: black; }
  a { color: inherit; border: none; }
}
```

### Dynamic Content with JavaScript
```html
<script>
  document.querySelector('.date').textContent = new Date().getFullYear();
</script>
```

---

## 💰 Pricing Perception

To make PDFs look more professional:
- Use consistent spacing (not cramped)
- High-quality images
- Professional typography
- Clear visual hierarchy
- Strategic use of white space
- Subtle gradients and shadows
- Professional photography
- Consistent branding

These create perceived quality worth $100,000+!

---

**Your workspace is fully equipped. Edit templates, customize colors, add images, and generate professional PDFs with Ctrl+Shift+B!**
