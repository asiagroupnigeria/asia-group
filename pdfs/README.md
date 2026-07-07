# Professional PDF Publishing Studio

Complete workspace for creating publication-quality PDFs: product catalogues, company profiles, brochures, and annual reports.

## 🎯 What This Workspace Includes

✅ **4 Professional Templates**
- Company Profile (corporate overview)
- Product Catalogue (e-commerce showcase)
- Brochure (marketing one-pager)
- Annual Report (financial/strategic)

✅ **5 Professional Stylesheets**
- Base styles (typography, print optimization)
- Profile-specific styling
- Catalogue product grid layouts
- Brochure marketing design
- Report corporate styling

✅ **VS Code Automation**
- Build tasks for instant PDF generation
- Multiple document type shortcuts
- Press Ctrl+Shift+B to generate

✅ **Prince XML Integration**
- Professional PDF engine
- Print-ready output
- Advanced layout control

---

## ⚡ Quick Start

1. **Install Prince XML**: https://www.princexml.com/download/

2. **Move tasks.json to VS Code**:
   ```
   Copy: tasks.json
   To: .vscode/tasks.json
   ```

3. **Edit a Template**: Open `company-profile.html`

4. **Generate PDF**: Press **Ctrl+Shift+B** → Select task

5. **Check Output**: Find your PDF in current directory

---

## 🎨 Customization

### Edit Content
```html
<h1>Your Company Name</h1>
<p>Your description here</p>
```

### Change Colors
```css
/* In any styles-*.css file */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add Images
```html
<img src="path/to/image.jpg" alt="Description">
```

### Add Logo
```html
<img src="path/to/logo.png" alt="Logo" class="logo">
```

---

## 📊 Template Options

| Template | Use Case | Layout |
|----------|----------|--------|
| **company-profile.html** | Corporate overview | Sections + team grid |
| **product-catalogue.html** | Product showcase | 2x2 product grid |
| **brochure.html** | Marketing material | Feature highlights |
| **annual-report.html** | Financial report | Tables + metrics |

---

## 🛠️ Professional Features

✨ **Print-Optimized**
- A4 page size with 2cm margins
- Page numbers automatically added
- Professional typography scaling

✨ **Professional Typography**
- Open Sans (headings)
- Merriweather (body text)
- Google Fonts integration

✨ **Advanced Layouts**
- Grid systems (2, 3, 4 columns)
- Card-based designs
- Flexbox alignment

✨ **Visual Polish**
- Gradient backgrounds
- Color-coded sections
- Consistent spacing

---

## 📚 Key Files

| File | Purpose |
|------|---------|
| `SETUP-GUIDE.md` | Complete customization guide |
| `prince-config.json` | Prince configuration |
| `tasks.json` | VS Code build tasks |
| `company-profile.html` | Company overview template |
| `product-catalogue.html` | Product showcase template |
| `brochure.html` | Marketing brochure template |
| `annual-report.html` | Annual report template |
| `styles-base.css` | Base typography & print setup |
| `styles-profile.css` | Company profile styling |
| `styles-catalogue.css` | Catalogue product styling |
| `styles-brochure.css` | Brochure marketing styling |
| `styles-report.css` | Annual report styling |

---

## 🚀 Workflow

```
1. Choose template → 2. Edit HTML → 3. Customize CSS
         ↓                  ↓               ↓
    4. Test in browser → 5. Press Ctrl+Shift+B → 6. Review PDF
         ↓                                           ↓
    7. Iterate & refine → 8. Final PDF ready
```

---

## 💡 Pro Tips

- ✅ Keep brand colors consistent
- ✅ Use high-resolution images (300+ dpi)
- ✅ Test print preview before final export
- ✅ Maintain 1-2 font families max
- ✅ Use white space effectively
- ✅ Keep page breaks logical

---

## 🎓 Advanced Usage

### Add Custom Fonts
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
```

### Create Page Breaks
```html
<div class="page-break-after">Content</div>
```

### Professional Tables
```html
<table class="financial-table">
  <tr><th>Column</th><th>Value</th></tr>
  <tr><td>Item</td><td>$100M</td></tr>
</table>
```

---

## 📞 Support

See `SETUP-GUIDE.md` for:
- Detailed customization instructions
- CSS class reference
- Troubleshooting guide
- Best practices for $100k-quality PDFs

---

**Ready to create professional PDFs? Start with `company-profile.html` and press Ctrl+Shift+B!**
