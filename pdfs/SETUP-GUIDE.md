# 🎨 Professional PDF Publishing Studio
## Complete Setup Guide

Your workspace is now configured to create **$100k-quality PDFs** with professional design, print-optimization, and automation.

---

## 📁 What You Have

| File | Purpose |
|------|---------|
| `company-profile.html` | Professional company overview template |
| `product-catalogue.html` | E-commerce product showcase |
| `brochure.html` | Marketing brochure template |
| `annual-report.html` | Corporate annual report |
| `styles-base.css` | Professional typography & print setup |
| `styles-profile.css` | Company profile styling |
| `styles-catalogue.css` | Catalogue product grid styling |
| `styles-brochure.css` | Brochure marketing styling |
| `styles-report.css` | Annual report professional styling |
| `tasks.json` | VS Code build automation |

---

## 🚀 Getting Started

### Step 1: Install Prince XML
Download from: **https://www.princexml.com/download/**

Prince is the professional PDF engine that converts your HTML/CSS into publication-ready PDFs.

### Step 2: Open a Template
Choose which document to create:
- ✅ `company-profile.html` (default - best to start here)
- ✅ `product-catalogue.html` (for product listings)
- ✅ `brochure.html` (for marketing)
- ✅ `annual-report.html` (for reports)

### Step 3: Move tasks.json to VS Code
```
Copy: tasks.json
To: .vscode/tasks.json

(Create .vscode folder if needed)
```

### Step 4: Generate Your First PDF
1. Open a template in VS Code (e.g., `company-profile.html`)
2. Press **Ctrl+Shift+B** to open task menu
3. Select the corresponding PDF task
4. Check the generated PDF in your file explorer

---

## ✏️ Customization Workflow

### 1. Edit HTML Content
```html
<!-- Change your company name -->
<h1>Your Company Name</h1>

<!-- Edit sections, add team members, update services -->
```

### 2. Customize Colors & Branding
Each stylesheet has a primary color scheme at the top:
```css
/* COMPANY PROFILE (styles-profile.css) */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Change hex codes to match your brand:
- 🔴 Red: `#e74c3c`
- 🔵 Blue: `#3498db`
- 🟢 Green: `#27ae60`
- 🟣 Purple: `#667eea`

### 3. Add Your Logo
Replace placeholder text or add an image:
```html
<img src="path/to/your-logo.png" alt="Logo" class="logo">
```

### 4. Add Product Images
```html
<img src="path/to/product.jpg" alt="Product" class="product-image">
```

### 5. Update Contact Information
```html
<p><strong>Phone:</strong> +1 (555) 123-4567</p>
<p><strong>Email:</strong> hello@yourcompany.com</p>
```

---

## 🎨 Professional Design Elements

### Spacing (Print Margin)
All PDFs are optimized with:
- **Page size**: A4 (210 × 297mm)
- **Margins**: 2cm all sides
- **Page numbers**: Bottom center (automatic)

### Typography
- **Headings**: Open Sans (clean, modern)
- **Body text**: Merriweather (professional serif)
- **Font sizes**: Optimized for print readability

### Grid Layouts
Use these classes for professional layouts:
```html
<!-- 2-column layout -->
<div class="two-column">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

<!-- 3-column for products -->
<div class="products-grid">
  <div class="product-card">...</div>
  <div class="product-card">...</div>
  <div class="product-card">...</div>
</div>
```

### Page Breaks
Force breaks between sections for better layout:
```html
<div class="page-break-after">
  <!-- This section breaks to next page -->
</div>
```

---

## 🔧 Advanced Customization

### Using Custom Fonts
Add to any CSS file:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

h1 {
  font-family: 'Playfair Display', serif;
}
```

### Custom Color Gradients
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adding Icons/Emojis
```html
<h3>🚀 Innovation</h3>
<h3>💼 Professional</h3>
<h3>🎯 Results-Driven</h3>
```

### Tables & Charts
Use semantic HTML tables:
```html
<table class="financial-table">
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
  </tr>
  <tr>
    <td>$10M</td>
    <td>+25%</td>
  </tr>
</table>
```

---

## 📊 Document Types & When to Use

| Document | Best For | Audience |
|----------|----------|----------|
| **Company Profile** | Corporate overview, B2B | Investors, partners, clients |
| **Product Catalogue** | Product showcase, pricing | Customers, sales teams |
| **Brochure** | Marketing, short-form | Marketing, distribution |
| **Annual Report** | Financial results, strategy | Shareholders, stakeholders |

---

## ⚡ Pro Tips for $100k Quality

### 1. **Consistency**
- Use same fonts throughout
- Keep color palette to 2-3 colors
- Maintain consistent spacing

### 2. **Visual Hierarchy**
- Larger headings for sections
- Subtle color accents
- White space for readability

### 3. **Professional Images**
- High-resolution (300+ dpi)
- Consistent sizing across pages
- Relevant to content

### 4. **Print Optimization**
- Test print preview (Ctrl+P in browser)
- Check margin spacing
- Verify page breaks

### 5. **Typography**
- Use bold for emphasis, not size changes
- Stick to 1-2 font families
- Proper line-height for readability

### 6. **Section Organization**
- Clear headers and subheaders
- Logical flow
- Page-break-inside: avoid for cards

---

## 🎯 Workflow Checklist

For each PDF you create:

- [ ] **Content**: Edit HTML with your text/info
- [ ] **Branding**: Update colors and logo
- [ ] **Images**: Add high-quality images
- [ ] **Review**: Check in browser first
- [ ] **Print Test**: Ctrl+P → Print preview
- [ ] **Generate**: Ctrl+Shift+B → Select task
- [ ] **Verify**: Check output PDF quality
- [ ] **Iterate**: Make refinements as needed

---

## 🚨 Troubleshooting

### PDF Not Generating?
1. Verify Prince is installed: `prince --version` in terminal
2. Check file paths in HTML (must be relative or absolute)
3. Ensure images exist at specified paths

### Text/Images Cut Off?
- Adjust margins in `@page { margin: 2cm; }`
- Use `page-break-inside: avoid;` for cards
- Reduce font size or padding

### Colors Look Wrong?
- Check CSS is linked correctly in HTML
- Verify hex color codes (#RRGGBB)
- Some colors print differently (avoid pure blacks)

### Page Breaks Not Working?
- Add `page-break-after: always;` to section
- Use `page-break-inside: avoid;` on cards
- Test with smaller content sections

---

## 📚 CSS Classes Quick Reference

```css
/* Utility Classes */
.text-center { text-align: center; }
.text-right { text-align: right; }
.no-break { page-break-inside: avoid; }
.page-break-before { page-break-before: always; }

/* Grid Layouts */
.two-column { display: grid; grid-template-columns: 1fr 1fr; }
.three-column { display: grid; grid-template-columns: 1fr 1fr 1fr; }
.products-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2em; }

/* Card Styling */
.card { background: white; border: 1px solid #e0e0e0; padding: 1.5em; }
.stat-box { background: #f0f4ff; padding: 1.5em; text-align: center; }
.service-card { background: #f9fafb; border-left: 4pt solid #667eea; }
```

---

## 📖 Next Steps

1. ✅ Choose a template
2. ✅ Customize the content
3. ✅ Update colors to match your brand
4. ✅ Add your logo and images
5. ✅ Generate PDF with Ctrl+Shift+B
6. ✅ Review and iterate

---

## 💡 Resources

- **Prince XML Docs**: https://www.princexml.com/doc/
- **Google Fonts**: https://fonts.google.com/
- **Color Picker**: https://coolors.co/
- **Professional Templates**: This workspace!

---

**You're ready to create publication-quality PDFs. Start editing `company-profile.html` and press Ctrl+Shift+B to generate!**
