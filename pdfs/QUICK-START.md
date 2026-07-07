# 🚀 QUICK START - Professional PDF Generation

Your complete workspace for creating $100k-quality PDFs is ready!

---

## ⚡ 3-Step Setup

### Step 1️⃣: Install Prince XML
**Download**: https://www.princexml.com/download/

After installation, verify in terminal:
```bash
prince --version
```

### Step 2️⃣: Setup VS Code (Optional but Recommended)
Copy `tasks.json` to `.vscode/tasks.json` in this folder:
1. Create folder `.vscode` (if needed)
2. Copy the `tasks.json` file into `.vscode/tasks.json`

### Step 3️⃣: Generate Your First PDF
**Option A: Using Batch Script (Windows)**
```bash
Double-click: build.bat
```

**Option B: Using VS Code**
1. Open `company-profile.html`
2. Press **Ctrl+Shift+B**
3. Select "Build Company Profile PDF"
4. Check folder for `company-profile.pdf`

---

## 📋 Files in This Workspace

### Templates (HTML)
- ✅ `company-profile.html` - Professional company overview
- ✅ `product-catalogue.html` - Product showcase with grid
- ✅ `brochure.html` - Marketing brochure
- ✅ `annual-report.html` - Corporate annual report

### Stylesheets (CSS)
- ✅ `styles-base.css` - Base typography & print setup
- ✅ `styles-profile.css` - Company profile styling
- ✅ `styles-catalogue.css` - Catalogue layout
- ✅ `styles-brochure.css` - Brochure marketing
- ✅ `styles-report.css` - Report corporate styling

### Automation
- ✅ `build.bat` - Windows batch build script (runs all PDFs)
- ✅ `build.sh` - Bash script for Mac/Linux
- ✅ `tasks.json` - VS Code tasks (copy to `.vscode/`)

### Documentation
- ✅ `README.md` - Project overview
- ✅ `SETUP-GUIDE.md` - Detailed customization guide
- ✅ `STYLE-GUIDE.md` - Design principles & techniques
- ✅ `QUICK-START.md` - This file!

---

## ✏️ Customization in 5 Minutes

### 1. Edit Content
Open `company-profile.html` in any text editor:
```html
<h1>Your Company Name</h1>
<p>Your company description...</p>
```

### 2. Change Colors
Edit `styles-profile.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Change hex codes:
- Blue: `#3498db`
- Red: `#e74c3c`
- Green: `#27ae60`
- Purple: `#667eea`

### 3. Add Logo/Images
```html
<img src="path/to/your-logo.png" alt="Logo">
```

### 4. Update Contact Info
```html
<p><strong>Phone:</strong> +1 (555) 123-4567</p>
<p><strong>Email:</strong> hello@company.com</p>
```

### 5. Generate PDF
**Windows**: Double-click `build.bat` or press Ctrl+Shift+B
**Mac/Linux**: `bash build.sh` or press Ctrl+Shift+B

---

## 🎨 Choose Your Template

| Document | When to Use | Start File |
|----------|-------------|-----------|
| **Company Profile** | Corporate overview, B2B | `company-profile.html` |
| **Product Catalogue** | Product showcase, pricing | `product-catalogue.html` |
| **Brochure** | Marketing, one-pager | `brochure.html` |
| **Annual Report** | Financial results, strategy | `annual-report.html` |

---

## 🎯 Professional Design Included

✨ **Print-Optimized**
- A4 page size with margins
- Professional typography
- Page numbers automatically added

✨ **Professional Colors**
- Modern gradient backgrounds
- Consistent color schemes
- Professional color psychology

✨ **Advanced Layouts**
- Grid systems (2, 3, 4 columns)
- Card-based designs
- Professional spacing

✨ **Brand-Ready**
- Logo support
- Custom colors
- Team member sections
- Contact information

---

## 🛠️ Build Commands

### Generate Individual PDFs
```bash
prince company-profile.html -o company-profile.pdf -s styles-base.css -s styles-profile.css
prince product-catalogue.html -o product-catalogue.pdf -s styles-base.css -s styles-catalogue.css
prince brochure.html -o brochure.pdf -s styles-base.css -s styles-brochure.css
prince annual-report.html -o annual-report.pdf -s styles-base.css -s styles-report.css
```

### Generate All PDFs at Once
**Windows:**
```bash
build.bat
```

**Mac/Linux:**
```bash
bash build.sh
```

### With VS Code
Press **Ctrl+Shift+B** to open build menu

---

## 📚 Next Steps

1. ✅ Install Prince XML
2. ✅ Choose a template to customize
3. ✅ Edit HTML content
4. ✅ Update colors in CSS
5. ✅ Add your logo/images
6. ✅ Run build.bat or press Ctrl+Shift+B
7. ✅ Check generated PDF quality
8. ✅ Iterate and refine

---

## 📖 For More Details

- **Detailed Setup**: See `SETUP-GUIDE.md`
- **Design Principles**: See `STYLE-GUIDE.md`
- **Project Overview**: See `README.md`

---

## 🆘 Troubleshooting

### Prince Command Not Found?
Install Prince XML from: https://www.princexml.com/download/

### PDF Not Generating?
1. Check Prince is installed: `prince --version`
2. Verify HTML file exists
3. Check image paths are correct
4. Review build.bat output for errors

### Text/Images Cut Off?
- Adjust margins in CSS `@page { margin: 2cm; }`
- Reduce font size or padding
- Use `page-break-inside: avoid;` on cards

### Build Task Not Showing in VS Code?
- Ensure `tasks.json` is in `.vscode/` folder
- Reload VS Code window (F5 or Ctrl+Shift+P → Reload)
- Restart VS Code

---

## 💡 Pro Tips

✅ Test in browser first with Print preview (Ctrl+P)
✅ Keep brand colors consistent
✅ Use high-resolution images (300 dpi)
✅ Maintain logical page breaks
✅ Use white space effectively
✅ Check margins on final PDF

---

**🎉 You're ready! Edit a template and generate your first professional PDF now!**

Start with `company-profile.html` → `build.bat` or Ctrl+Shift+B
